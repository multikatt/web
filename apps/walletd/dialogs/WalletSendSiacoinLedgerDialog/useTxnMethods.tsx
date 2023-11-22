import {
  useTxPoolBroadcast,
  useWalletFund,
  useWalletOutputs,
  useWalletRelease,
  Transaction,
  useWalletFundSf,
} from '@siafoundation/react-walletd'
import { useWallets } from '../../contexts/wallets'
import { useCallback } from 'react'
import { useWalletAddresses } from '../../hooks/useWalletAddresses'
import { triggerErrorToast } from '@siafoundation/design-system'
import { signTransactionLedger } from '../../lib/signLedger'
import { useLedger } from '../../contexts/ledger'
import BigNumber from 'bignumber.js'

export function useTxnMethods() {
  const { wallet } = useWallets()
  const walletId = wallet?.id
  const outputs = useWalletOutputs({
    disabled: !walletId,
    params: {
      id: walletId,
    },
  })
  const { dataset: addresses } = useWalletAddresses({ id: walletId })
  const walletFund = useWalletFund()
  const walletFundSf = useWalletFundSf()
  const txPoolBroadcast = useTxPoolBroadcast()
  const walletRelease = useWalletRelease()

  const cancel = useCallback(
    async (transaction: Transaction) => {
      const siacoinOutputs =
        transaction.siacoinInputs?.map((i) => i.parentID) || []
      const siafundOutputs =
        transaction.siafundInputs?.map((i) => i.parentID) || []
      const response = await walletRelease.post({
        params: {
          id: walletId,
        },
        payload: {
          siacoinOutputs,
          siafundOutputs,
        },
      })
      if (response.error) {
        triggerErrorToast(response.error)
      }
    },
    [walletId, walletRelease]
  )

  const fund = useCallback(
    async ({
      address,
      mode,
      siacoin,
      siafund,
      fee,
    }: {
      address: string
      mode: 'siacoin' | 'siafund'
      siacoin: BigNumber
      siafund: number
      fee: BigNumber
    }) => {
      if (!addresses) {
        return {
          error: 'No addresses',
        }
      }

      // fund
      if (mode === 'siacoin') {
        const fundResponse = await walletFund.post({
          params: {
            id: walletId,
          },
          payload: {
            amount: siacoin.plus(fee).toString(),
            changeAddress: addresses[0].address,
            transaction: {
              minerFees: [fee.toString()],
              siacoinOutputs: [
                {
                  value: siacoin.toString(),
                  address,
                },
              ],
            },
          },
        })
        if (fundResponse.error) {
          return {
            error: fundResponse.error,
          }
        }
        return {
          fundedTransaction: fundResponse.data.transaction,
          toSign: fundResponse.data.toSign,
        }
      }

      if (mode === 'siafund') {
        const toSign = []
        let fundResponse = await walletFundSf.post({
          params: {
            id: walletId,
          },
          payload: {
            amount: siafund,
            changeAddress: addresses[0].address,
            claimAddress: addresses[0].address,
            transaction: {
              minerFees: [fee.toString()],
              siafundOutputs: [
                {
                  value: siafund,
                  address,
                },
              ],
            },
          },
        })
        if (fundResponse.error) {
          return {
            error: fundResponse.error,
          }
        }
        toSign.push(...fundResponse.data.toSign)
        // TODO: temporary
        fundResponse = await walletFund.post({
          params: {
            id: walletId,
          },
          payload: {
            amount: fee.toString(),
            changeAddress: addresses[0].address,
            transaction: fundResponse.data.transaction,
          },
        })
        if (fundResponse.error) {
          return {
            error: fundResponse.error,
          }
        }
        toSign.push(...fundResponse.data.toSign)
        return {
          fundedTransaction: fundResponse.data.transaction,
          toSign,
        }
      }
    },
    [addresses, walletFund, walletFundSf, walletId]
  )

  const { device } = useLedger()
  const sign = useCallback(
    async ({
      fundedTransaction,
      toSign,
    }: {
      fundedTransaction: Transaction
      toSign: string[]
    }) => {
      if (!device || !fundedTransaction) {
        return
      }
      // sign
      const signResponse = await signTransactionLedger({
        device,
        transaction: fundedTransaction,
        toSign,
        addresses,
        siacoinOutputs: outputs.data?.siacoinOutputs,
        siafundOutputs: outputs.data?.siafundOutputs,
      })
      if (signResponse.error) {
        cancel(fundedTransaction)
        return {
          error: signResponse.error,
        }
      }
      return {
        signedTransaction: signResponse.transaction,
      }
    },
    [device, addresses, outputs.data, cancel]
  )

  const broadcast = useCallback(
    async ({ signedTransaction }: { signedTransaction: Transaction }) => {
      if (!signedTransaction) {
        return {
          error: 'No signed transaction',
        }
      }
      // broadcast
      const broadcastResponse = await txPoolBroadcast.post({
        payload: {
          transactions: [signedTransaction],
          v2Transactions: [],
        },
      })
      if (broadcastResponse.error) {
        cancel(signedTransaction)
        return {
          error: broadcastResponse.error,
        }
      }

      return {
        // Need transaction ID, but its not part of transaction object
        // transactionId: signResponse.data.??,
      }
    },
    [cancel, txPoolBroadcast]
  )

  const fundAndSign = useCallback(
    async ({
      address,
      mode,
      siacoin,
      siafund,
      fee,
    }: {
      address: string
      mode: 'siacoin' | 'siafund'
      siacoin: BigNumber
      siafund: number
      fee: BigNumber
    }) => {
      const {
        fundedTransaction,
        toSign,
        error: fundingError,
      } = await fund({
        address,
        siacoin,
        siafund,
        mode,
        fee,
      })
      if (fundingError) {
        return {
          fundedTransaction,
          error: fundingError,
        }
      }
      const { signedTransaction, error: signingError } = await sign({
        fundedTransaction,
        toSign,
      })
      if (signingError) {
        cancel(fundedTransaction)
        return {
          fundedTransaction,
          error: signingError,
        }
      }
      return {
        signedTransaction,
      }
    },
    [fund, sign, cancel]
  )

  return {
    fundAndSign,
    broadcast,
    cancel,
  }
}
