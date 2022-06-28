import {
  AnimatedPanel,
  Badge,
  Container,
  Flex,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
} from '@siafoundation/design-system'
import { humanNumber } from '@siafoundation/sia-js'
import { Datum, ValueItemProps } from '../../Datum'
import { AddressEntity, EntityType } from '../../../config/types'
import { EntityList } from '../../EntityList'
import { ChartTimeValue } from '../../ChartTimeValue'
import { useBalanceHistory } from '../../../hooks/useBalanceHistory'
import { useMemo, useState } from 'react'
import { useStatus } from '../../../hooks/useStatus'
import { ValueSc } from '../../ValueSc'
import { routes } from '../../../config/routes'
import { EntityHeading } from '../../EntityHeading'
import { useUtxos } from '../../../hooks/useUtxos'

type Tab = 'transactions' | 'evolution' | 'utxos'

type Props = {
  entity: AddressEntity
}

export function AddressEntity({ entity }: Props) {
  const status = useStatus()
  const { data } = entity

  const [tab, setTab] = useState<Tab>('transactions')
  const balanceHistory = useBalanceHistory(
    tab === 'evolution' ? entity.data[0].MasterHash : null
  )
  const utxos = useUtxos(tab === 'utxos' ? entity.data[0].MasterHash : null)

  const firstSeen = data[1].firstSeen === '-' ? 0 : data[1].firstSeen
  const firstSeenAgo =
    status.data?.lastblock && status.data.lastblock - firstSeen

  const values = useMemo(() => {
    const list: ValueItemProps[] = [
      {
        label: 'Confirmed SC',
        sc: BigInt(data[1].balanceSc),
        comment: (
          <Flex gap="1" wrap="wrap">
            <ValueSc
              tooltip="Received"
              value={data[1].receivedSc}
              variant="change"
              size="10"
            />
            <ValueSc
              tooltip="Sent"
              value={-data[1].sentSc}
              variant="change"
              size="10"
            />
          </Flex>
        ),
      },
      {
        label: 'Pending SC',
        sc: BigInt(data[1].pendingSc),
      },
      {
        label: 'Confirmed SF',
        sf: data[1].balanceSf,
      },
      {
        label: 'Pending SF',
        sf: data[1].pendingSf,
      },
    ]
    return list
  }, [data])

  const address = data[0].MasterHash

  const transactions = useMemo(
    () => [
      ...data[1].unconfirmedTransactions.map((tx) => ({
        hash: tx.TxHash,
        type: tx.TxType as EntityType,
        sc: BigInt(tx.ScValue),
        sf: tx.SfValue,
        timestamp: tx.Timestamp,
        unconfirmed: true,
      })),
      ...data[1].last100Transactions.map((tx) => ({
        hash: tx.MasterHash,
        type: tx.TxType as EntityType,
        sc: BigInt(tx.ScChange),
        sf: tx.SfChange,
        height: tx.Height,
        timestamp: tx.Timestamp,
      })),
    ],
    [data]
  )

  // const qrCode = `${apiBase}/navigator-api/qr/${address}.svg`

  return (
    <>
      <Container>
        <Flex direction="column" gap="6">
          <AnimatedPanel
            variant="subtle"
            startTime={0}
            css={{
              padding: '$3',
              borderRadius: '$2',
            }}
          >
            <Flex direction="column" gap="5">
              <Flex justify="between" align="center" wrap="wrap" gapY="1">
                <EntityHeading
                  label="address"
                  type="address"
                  value={address}
                  href={routes.address.view.replace('[id]', address)}
                />
                <Flex gap="1" align="center">
                  <Tooltip
                    content={`First seen ${humanNumber(
                      firstSeenAgo
                    )} blocks ago, at block ${humanNumber(firstSeen)}`}
                  >
                    <Badge variant="simple">{`${humanNumber(
                      firstSeen
                    )}`}</Badge>
                  </Tooltip>
                  <Tooltip
                    content={`${humanNumber(
                      data[1].TotalTxCount
                    )} total transactions`}
                  >
                    <Badge variant="accent">
                      {`${humanNumber(data[1].TotalTxCount)}`} transactions
                    </Badge>
                  </Tooltip>
                </Flex>
              </Flex>
              <Flex direction="column" gapY="3">
                {values.map((item) => (
                  <Datum key={item.label} {...item} />
                ))}
              </Flex>
            </Flex>
          </AnimatedPanel>
        </Flex>
      </Container>
      <Container>
        <Tabs
          defaultValue={tab}
          value={tab}
          onValueChange={(val) => setTab(val as Tab)}
        >
          <TabsList aria-label="Address tabs">
            <TabsTrigger value="transactions">
              Last 100 transactions
            </TabsTrigger>
            <TabsTrigger value="evolution">Balance evolution</TabsTrigger>
            <TabsTrigger value="utxos">Unspent outputs</TabsTrigger>
          </TabsList>
          <TabsContent value="transactions">
            <EntityList entities={transactions} />
          </TabsContent>
          <TabsContent value="evolution">
            <ChartTimeValue
              datasets={[
                {
                  name: 'SC',
                  dataset: balanceHistory.data?.scJson || [],
                },
                {
                  name: 'SF',
                  dataset: balanceHistory.data?.sfJson || [],
                },
              ]}
              height={300}
            />
          </TabsContent>
          <TabsContent value="utxos">
            <EntityList
              entities={utxos.data?.map((output) => ({
                sc: BigInt(output.hastings || '0'),
                sf: output.sf,
                hash: output.output,
                type: 'output' as EntityType,
              }))}
            />
          </TabsContent>
        </Tabs>
      </Container>
    </>
  )
}