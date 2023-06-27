import {
  Text,
  TableColumn,
  Badge,
  Paragraph,
  Tooltip,
} from '@siafoundation/design-system'
import { WalletData, TableColumnId } from './types'

type WalletsTableColumn = TableColumn<TableColumnId, WalletData, never> & {
  fixed?: boolean
  category?: string
}

export const columns: WalletsTableColumn[] = [
  // {
  //   id: 'actions',
  //   label: '',
  //   fixed: true,
  //   cellClassName: 'w-[50px] !pl-2 !pr-4 [&+*]:!pl-0',
  //   render: ({ data: { name } }) => null,
  // },
  {
    id: 'details',
    label: 'name',
    category: 'general',
    fixed: true,
    render: ({ data: { name, description } }) => {
      return (
        <div className="flex flex-col gap-2">
          <Text>{name}</Text>
          <Tooltip
            content={
              <pre>
                <Paragraph size="12">{description}</Paragraph>
              </pre>
            }
          >
            <Paragraph size="12">{description.split('\n')[0]}</Paragraph>
          </Tooltip>
        </div>
      )
    },
  },
  {
    id: 'type',
    label: 'type',
    category: 'general',
    render: ({ data: { type } }) => {
      return <Badge>{type}</Badge>
    },
  },
]
