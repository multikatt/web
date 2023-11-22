import {
  SiacoinElement,
  SiafundElement,
  Transaction,
} from '@siafoundation/react-walletd'
import { stripPrefix } from '@siafoundation/design-system'
import { AddressData } from '../contexts/addresses/types'

export function addUnlockConditionsAndSignatures({
  transaction,
  toSign,
  addresses,
  siacoinOutputs,
  siafundOutputs,
}: {
  transaction: Transaction
  toSign: string[]
  addresses: AddressData[]
  siafundOutputs: SiafundElement[]
  siacoinOutputs: SiacoinElement[]
}): { transaction?: Transaction; error?: string } {
  if (!addresses) {
    return { error: 'No addresses' }
  }
  if (!siacoinOutputs) {
    return { error: 'No outputs' }
  }

  // for each toSign
  for (const idPrefixed of toSign) {
    const id = stripPrefix(idPrefixed)

    // find the parent utxo funding element for each input
    const scUtxoAddr = getSiacoinUtxoAndAddress({
      id,
      addresses,
      siacoinOutputs,
    })

    if (!scUtxoAddr.error) {
      // find the siacoin input by matching the toSign ID to the siacoin input's parent ID
      const sci = transaction.siacoinInputs.find(
        (sci) => stripPrefix(sci.parentID) === stripPrefix(scUtxoAddr.utxo.id)
      )

      // build the unlock conditions with the utxo funding element's public key
      sci.unlockConditions = {
        timelock: 0,
        publicKeys: [scUtxoAddr.address.publicKey],
        signaturesRequired: 1,
      }

      if (!transaction.signatures) {
        transaction.signatures = []
      }

      // push to signatures
      transaction.signatures.push({
        parentID: id,
        publicKeyIndex: 0,
        timelock: 0,
        coveredFields: {
          wholeTransaction: true,
        },
      })
      continue
    }

    // find the parent utxo funding element for each input
    const sfUtxoAddr = getSiafundUtxoAndAddress({
      id,
      addresses,
      siafundOutputs,
    })

    if (!sfUtxoAddr.error) {
      // find the siacoin input by matching the toSign ID to the siacoin input's parent ID
      const sfi = transaction.siafundInputs.find(
        (sfi) => stripPrefix(sfi.parentID) === stripPrefix(sfUtxoAddr.utxo.id)
      )

      // build the unlock conditions with the utxo funding element's public key
      sfi.unlockConditions = {
        timelock: 0,
        publicKeys: [sfUtxoAddr.address.publicKey],
        signaturesRequired: 1,
      }

      if (!transaction.signatures) {
        transaction.signatures = []
      }

      // push to signatures
      transaction.signatures.push({
        parentID: id,
        publicKeyIndex: 0,
        timelock: 0,
        coveredFields: {
          wholeTransaction: true,
        },
      })
      continue
    }

    return { error: scUtxoAddr.error || sfUtxoAddr.error }
  }

  return {}
}

export function getSiacoinUtxoAndAddress({
  id: idPrefixed,
  addresses,
  siacoinOutputs,
}: {
  id: string
  addresses: AddressData[]
  siacoinOutputs: SiacoinElement[]
}): { utxo?: SiacoinElement; address?: AddressData; error?: string } {
  const id = stripPrefix(idPrefixed)

  // find the utxo by toSign ID
  const utxo = siacoinOutputs.find((sco) => stripPrefix(sco.id) === id)
  if (!utxo) {
    return { error: 'Missing siacoin utxo' }
  }

  // find the utxo's address metadata which has the index and public key saved
  // the public key was computed and saved when the address was generated
  const addressData = addresses.find(
    (a) => stripPrefix(a.address) === stripPrefix(utxo.siacoinOutput.address)
  )

  if (!addressData) {
    return { error: 'Missing siacoin address' }
  }
  if (addressData.index === undefined) {
    return { error: 'Missing siacoin address index' }
  }
  if (!addressData.publicKey) {
    return { error: 'Missing siacoin address public key' }
  }

  return {
    utxo,
    address: addressData,
  }
}

export function getSiafundUtxoAndAddress({
  id: idPrefixed,
  addresses,
  siafundOutputs,
}: {
  id: string
  addresses: AddressData[]
  siafundOutputs: SiafundElement[]
}): { utxo?: SiafundElement; address?: AddressData; error?: string } {
  const id = stripPrefix(idPrefixed)

  // find the utxo by toSign ID
  const utxo = siafundOutputs.find((sfo) => stripPrefix(sfo.id) === id)
  if (!utxo) {
    return { error: 'Missing siafund utxo' }
  }

  // find the utxo's address metadata which has the index and public key saved
  // the public key was computed and saved when the address was generated
  const addressData = addresses.find(
    (a) => stripPrefix(a.address) === stripPrefix(utxo.siafundOutput.address)
  )

  if (!addressData) {
    return { error: 'Missing siafund address' }
  }
  if (addressData.index === undefined) {
    return { error: 'Missing siafund address index' }
  }
  if (!addressData.publicKey) {
    return { error: 'Missing siafund address public key' }
  }

  return {
    utxo,
    address: addressData,
  }
}
