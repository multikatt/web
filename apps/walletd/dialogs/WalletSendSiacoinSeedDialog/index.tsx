import BigNumber from 'bignumber.js'
import { useMemo, useState } from 'react'
import {
  Separator,
  Dialog,
  ProgressSteps,
  FormSubmitButton,
} from '@siafoundation/design-system'
import { useComposeForm } from './useComposeForm'
import { useSendForm } from './useSendForm'
import { Done } from './Done'
import { useWalletBalance } from '@siafoundation/react-walletd'

export type WalletSendSiacoinSeedDialogParams = {
  walletId: string
}

type Props = {
  params?: WalletSendSiacoinSeedDialogParams
  trigger?: React.ReactNode
  open: boolean
  onOpenChange: (val: boolean) => void
}

type Step = 'compose' | 'send' | 'done'

type SendData = {
  address: string
  siacoin: BigNumber
  fee: BigNumber
}

const emptySendData: SendData = {
  address: '',
  siacoin: new BigNumber(0),
  fee: new BigNumber(0),
}

export function WalletSendSiacoinSeedDialog({
  params,
  trigger,
  open,
  onOpenChange,
}: Props) {
  const { walletId } = params || {}
  const balance = useWalletBalance({
    disabled: !walletId,
    params: {
      id: walletId,
    },
  })
  const siacoinBalance = useMemo(
    () => new BigNumber(balance.data?.siacoins || 0),
    [balance.data]
  )

  const [step, setStep] = useState<Step>('compose')
  const [signedTxnId, setSignedTxnId] = useState<string>()
  const [data, setData] = useState<SendData>(emptySendData)

  // Form for each step
  const compose = useComposeForm({
    balance: siacoinBalance,
    onComplete: (c) => {
      setData((d) => ({
        ...d,
        address: c.address,
        siacoin: c.siacoin,
        fee: c.fee,
      }))
      setStep('send')
    },
  })
  const send = useSendForm({
    walletId,
    data,
    onConfirm: ({ transactionId }) => {
      setSignedTxnId(transactionId)
      setStep('done')
    },
  })

  const controls = useMemo(() => {
    if (step === 'compose') {
      return {
        submitLabel: 'Generate transaction',
        form: compose.form,
        handleSubmit: compose.handleSubmit,
        reset: compose.reset,
      }
    }
    if (step === 'send') {
      return {
        submitLabel: 'Sign and broadcast transaction',
        form: send.form,
        handleSubmit: send.handleSubmit,
        reset: send.reset,
      }
    }
    return undefined
  }, [step, compose, send])

  return (
    <Dialog
      trigger={trigger}
      open={open}
      onOpenChange={(val) => {
        if (!val) {
          compose.reset()
          send.reset()
          setStep('compose')
        }
        onOpenChange(val)
      }}
      title="Send siacoin"
      onSubmit={controls ? controls.handleSubmit : undefined}
      controls={
        controls?.form && (
          <div className="flex flex-col gap-1">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            <FormSubmitButton<any> form={controls.form}>
              {controls.submitLabel}
            </FormSubmitButton>
          </div>
        )
      }
      contentVariants={{
        className: 'w-[400px]',
      }}
    >
      <div className="flex flex-col gap-4">
        <ProgressSteps
          onChange={(val) => setStep(val as Step)}
          activeStep={step}
          steps={[
            {
              id: 'compose',
              label: 'Setup',
            },
            {
              id: 'send',
              label: 'Confirm',
            },
            {
              id: 'done',
              label: 'Complete',
            },
          ]}
        />
        <Separator className="w-full mt-4" />
        {step === 'compose' && compose.el}
        {step === 'send' && send.el}
        {step === 'done' && <Done data={data} transactionId={signedTxnId} />}
      </div>
    </Dialog>
  )
}
