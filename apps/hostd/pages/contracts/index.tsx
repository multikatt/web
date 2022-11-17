import {
  Close16,
  Text,
  Flex,
  Box,
  Button,
  Button,
  ControlGroup,
  Table,
} from '@siafoundation/design-system'
import { ContractsViewDropdownMenu } from '../../components/ContractsViewDropdownMenu'
import { ContractsFilterDropdownMenu } from '../../components/ContractsFilterDropdownMenu'
import { useContracts } from '../../hooks/useContracts'
import { HostdAuthedLayout } from '../../components/HostdAuthedLayout'

export default function ContractsPage() {
  const { columns, filters, removeFilter, contracts } = useContracts()

  return (
    <HostdAuthedLayout
      title="Contracts"
      filters={
        <Flex gap="1" css={{ flex: 1 }}>
          {Object.entries(filters).map(([key, filter]) => (
            <ControlGroup key={key}>
              <Button disabled>
                <Text size="12">{key}</Text>
              </Button>
              <Button disabled>
                <Text size="12" color="subtle">
                  is
                </Text>
              </Button>
              <Button disabled>
                {filter.value && <Text size="12">{filter.value}</Text>}
                {filter.values && (
                  <Text size="12">
                    {filter.values.reduce((acc, val) =>
                      acc.concat(` or ${val}`)
                    )}
                  </Text>
                )}
              </Button>
              <Button variant="gray" size="1" onClick={() => removeFilter(key)}>
                <Close16 />
              </Button>
            </ControlGroup>
          ))}
          <ContractsFilterDropdownMenu />
        </Flex>
      }
      size="flush"
      actions={
        <Flex gap="1">
          <ContractsViewDropdownMenu />
        </Flex>
      }
    >
      <Box
        css={{
          minWidth: 'fit-content',
          padding: '$3-5',
        }}
      >
        <Table data={contracts} columns={columns} summary />
      </Box>
    </HostdAuthedLayout>
  )
}
