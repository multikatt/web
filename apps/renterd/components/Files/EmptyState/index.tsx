import { Code, LinkButton, Text } from '@siafoundation/design-system'
import { CloudUpload32 } from '@siafoundation/react-icons'
import { routes } from '../../../config/routes'
import { useFiles } from '../../../contexts/files'
import { useAutopilotNotConfigured } from '../checks/useAutopilotNotConfigured'
import { useNotEnoughContracts } from '../checks/useNotEnoughContracts'
import { StateError } from './StateError'
import { StateNoneMatching } from './StateNoneMatching'
import { StateNoneYet } from './StateNoneYet'

export function EmptyState() {
  const { dataState, isViewingRootOfABucket } = useFiles()

  const autopilotNotConfigured = useAutopilotNotConfigured()
  const notEnoughContracts = useNotEnoughContracts()

  if (dataState === 'noneMatchingFilters') {
    return <StateNoneMatching />
  }

  if (dataState === 'error') {
    return <StateError />
  }

  // only show on root directory and when there are no files
  if (
    isViewingRootOfABucket &&
    dataState === 'noneYet' &&
    autopilotNotConfigured.active
  ) {
    return (
      <div className="flex flex-col gap-10 justify-center items-center h-[400px] cursor-pointer">
        <Text>
          <CloudUpload32 className="scale-[200%]" />
        </Text>
        <div className="flex flex-col gap-6 justify-center items-center">
          <Text color="subtle" className="text-center max-w-[500px]">
            Before you can upload files you must configure your settings. Once
            configured, <Code>renterd</Code> will find contracts with hosts
            based on the settings you choose. <Code>renterd</Code> will also
            repair your data as hosts come and go.
          </Text>
          <LinkButton variant="accent" href={routes.config.index}>
            Configure
          </LinkButton>
        </div>
      </div>
    )
  }

  // only show on root directory and when there are no files
  if (
    isViewingRootOfABucket &&
    dataState === 'noneYet' &&
    notEnoughContracts.active
  ) {
    return (
      <div className="flex flex-col gap-12 justify-center items-center h-[400px] cursor-pointer">
        <Text>
          <CloudUpload32 className="scale-[200%]" />
        </Text>
        <div className="flex flex-col gap-4 justify-center items-center">
          <Text color="subtle" className="text-center max-w-[500px]">
            There are not enough contracts to upload data yet. Redundancy is
            configured to use {notEnoughContracts.required} shards which means
            at least that many contracts are required.
          </Text>
          <Text size="30" className="text-center max-w-[500px]">
            {notEnoughContracts.count}/{notEnoughContracts.required}
          </Text>
        </div>
      </div>
    )
  }

  if (dataState === 'noneYet') {
    return <StateNoneYet />
  }

  return null
}
