import {
  Text,
  ValueScFiat,
  TableColumn,
  ContractTimeline,
  ValueCopyable,
  stripPrefix,
  Tooltip,
  ValueNum,
  Badge,
  Separator,
} from '@siafoundation/design-system'
import { ArrowUpLeft16 } from '@siafoundation/react-icons'
import { humanBytes, humanDate } from '@siafoundation/sia-js'
import { ContractData, TableColumnId } from './types'
import { ContractContextMenu } from '../../components/Contracts/ContractContextMenu'
import { ContractState } from '@siafoundation/react-renterd'

type Context = {
  currentHeight: number
  contractsTimeRange: {
    startHeight: number
    endHeight: number
  }
}

type ContractsTableColumn = TableColumn<
  TableColumnId,
  ContractData,
  Context
> & {
  fixed?: boolean
  category?: string
}

export const columns: ContractsTableColumn[] = [
  {
    id: 'actions',
    label: '',
    fixed: true,
    cellClassName: 'w-[50px] !pl-2 !pr-4 [&+*]:!pl-0',
    render: ({ data: { id, hostIp, hostKey } }) => (
      <ContractContextMenu id={id} address={hostIp} publicKey={hostKey} />
    ),
  },
  {
    id: 'contractId',
    label: 'contract ID',
    category: 'general',
    render: ({ data: { id, isRenewed, renewedFrom } }) => {
      // const { label, color } = getStatus(row)
      return (
        <div className="flex flex-col gap-1 w-full">
          <ValueCopyable
            size="12"
            value={stripPrefix(id)}
            label="contract ID"
          />
          {isRenewed && (
            <Tooltip content="Renewed from" align="start">
              <div className="flex items-center">
                <Text color="subtle">
                  <ArrowUpLeft16 className="scale-75" />
                </Text>
                <ValueCopyable
                  color="subtle"
                  size="10"
                  value={stripPrefix(renewedFrom)}
                  label="contract ID"
                />
              </div>
            </Tooltip>
          )}
        </div>
      )
    },
  },
  {
    id: 'hostIp',
    label: 'host address',
    category: 'general',
    render: ({ data: { hostIp } }) => {
      return (
        <ValueCopyable
          size="12"
          value={hostIp}
          type="ip"
          label="host address"
        />
      )
    },
  },
  {
    id: 'hostKey',
    label: 'host public key',
    category: 'general',
    render: ({ data: { hostKey } }) => {
      return <ValueCopyable size="12" value={hostKey} label="host public key" />
    },
  },
  {
    id: 'state',
    label: 'state',
    category: 'general',
    render: ({ data: { state } }) => {
      return (
        <Tooltip
          content={
            <div className="flex flex-col gap-1.5">
              <div className="flex">
                <Text className="flex-1" weight="medium">
                  pending
                </Text>
                <Text className="flex-[2]" color="subtle">
                  Contract has been added.
                </Text>
              </div>
              <Separator className="w-full" />
              <div className="flex">
                <Text className="flex-1" weight="medium">
                  active
                </Text>
                <Text className="flex-[2]" color="subtle">
                  Contract has appeared on chain.
                </Text>
              </div>
              <Separator className="w-full" />
              <div className="flex">
                <Text className="flex-1" weight="medium">
                  complete
                </Text>
                <Text className="flex-[2]" color="subtle">
                  Storage proof has appeared on chain.
                </Text>
              </div>
              <Separator className="w-full" />
              <div className="flex">
                <Text className="flex-1" weight="medium">
                  failed
                </Text>
                <Text className="flex-[2]" color="subtle">
                  Storage proof was not submitted before the end of proof
                  window.
                </Text>
              </div>
            </div>
          }
        >
          <Badge variant={getContractStateColor(state)}>{state}</Badge>
        </Tooltip>
      )
    },
  },
  {
    id: 'timeline',
    label: 'timeline',
    category: 'time',
    render: ({
      data: {
        contractHeightStart,
        contractHeightEnd,
        proofWindowHeightStart,
        proofWindowHeightEnd,
        revisionHeight,
        proofHeight,
      },
      context: { currentHeight, contractsTimeRange },
    }) => {
      return (
        <div className="w-[400px]">
          <ContractTimeline
            currentHeight={currentHeight}
            contractHeightStart={contractHeightStart}
            contractHeightEnd={contractHeightEnd}
            proofWindowHeightStart={proofWindowHeightStart}
            proofWindowHeightEnd={proofWindowHeightEnd}
            proofHeight={proofHeight}
            revisionHeight={revisionHeight}
            range={contractsTimeRange}
          />
        </div>
      )
    },
  },
  {
    id: 'startTime',
    label: 'start date',
    category: 'time',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { startTime } }) => {
      return (
        <Text size="12" font="mono" ellipsis>
          {humanDate(startTime)}
        </Text>
      )
    },
  },
  {
    id: 'endTime',
    label: 'end date',
    category: 'time',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { endTime } }) => {
      return (
        <Text size="12" font="mono" ellipsis>
          {humanDate(endTime)}
        </Text>
      )
    },
  },
  {
    id: 'size',
    label: 'size',
    category: 'general',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { size } }) => (
      <ValueNum
        size="12"
        value={size}
        variant="value"
        format={(d) => humanBytes(d)}
      />
    ),
  },
  {
    id: 'totalCost',
    label: 'total cost',
    category: 'financial',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { totalCost } }) => (
      <ValueScFiat displayBoth size="12" value={totalCost.negated()} />
    ),
  },
  {
    id: 'spendingUploads',
    label: 'uploads spending',
    category: 'financial',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { spendingUploads } }) => (
      <ValueScFiat displayBoth size="12" value={spendingUploads.negated()} />
    ),
  },
  {
    id: 'spendingDownloads',
    label: 'downloads spending',
    category: 'financial',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { spendingDownloads } }) => (
      <ValueScFiat displayBoth size="12" value={spendingDownloads.negated()} />
    ),
  },
  {
    id: 'spendingFundAccount',
    label: 'fund account spending',
    category: 'financial',
    contentClassName: 'w-[120px] justify-end',
    render: ({ data: { spendingFundAccount } }) => (
      <ValueScFiat
        displayBoth
        size="12"
        value={spendingFundAccount.negated()}
      />
    ),
  },
]

function getContractStateColor(state: ContractState) {
  if (state === 'active') {
    return 'amber'
  }
  if (state === 'failed') {
    return 'red'
  }
  if (state === 'pending') {
    return 'amber'
  }
  if (state === 'complete') {
    return 'green'
  }
}
