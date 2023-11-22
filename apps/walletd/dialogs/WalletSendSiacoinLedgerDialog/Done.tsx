import BigNumber from 'bignumber.js'
import { Text } from '@siafoundation/design-system'
import { CheckmarkFilled32 } from '@siafoundation/react-icons'
import { Receipt } from './Receipt'

type Props = {
  data: {
    address: string
    mode: 'siacoin' | 'siafund'
    siafund: number
    siacoin: BigNumber
    fee: BigNumber
  }
  transactionId?: string
}

export function Done({
  data: { address, siacoin, siafund, mode, fee },
  transactionId,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      <Receipt
        address={address}
        mode={mode}
        siacoin={siacoin}
        siafund={siafund}
        fee={fee}
        transactionId={transactionId}
      />
      <div className="flex flex-col items-center justify-center gap-2 my-4">
        <Text>
          <CheckmarkFilled32 />
        </Text>
        <Text>Transaction successfully broadcasted.</Text>
      </div>
    </div>
  )
}
