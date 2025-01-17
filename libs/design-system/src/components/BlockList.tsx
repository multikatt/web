import { Panel } from '../core/Panel'
import { Heading } from '../core/Heading'
import { Link } from '../core/Link'
import { Text } from '../core/Text'
import { getEntityTypeLabel } from '../lib/entityTypes'
import { humanNumber } from '@siafoundation/sia-js'
import { formatDistance } from 'date-fns'
import { EntityAvatar } from './EntityAvatar'
import { cx } from 'class-variance-authority'
import { EntityListSkeleton } from './EntityListSkeleton'

type BlockListItemProps = {
  miningPool?: string
  timestamp: string | number
  height: number
  href: string
}

type Props = {
  title: string
  blocks?: BlockListItemProps[]
  skeletonCount?: number
}

export function BlockList({ title, blocks, skeletonCount = 10 }: Props) {
  return (
    <Panel>
      <div className="flex flex-col rounded overflow-hidden">
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-graydark-300">
          <Heading size="20" font="mono" ellipsis>
            {title}
          </Heading>
          <div className="flex-1" />
        </div>
        <div className="flex flex-col border-t border-gray-200 dark:border-graydark-300">
          {blocks?.length === 0 && (
            <div
              className={cx(
                'flex items-center justify-center h-[100px]',
                itemBorderStyles()
              )}
            >
              <Text size="18" color="subtle">
                {'No results'}
              </Text>
            </div>
          )}
          {blocks?.map((block, i) => (
            <div
              className={cx('flex gap-4 p-4', itemBorderStyles())}
              key={block.height}
            >
              <EntityAvatar
                label={getEntityTypeLabel('block')}
                initials="B"
                href={block.href}
                shape="square"
              />
              <div className="flex flex-col gap-1 justify-center">
                <Text color="subtle">
                  <Text weight="bold">
                    <Link href={block.href} underline="none">
                      {humanNumber(block.height)}
                    </Link>
                  </Text>
                  {block.miningPool
                    ? ' mined by '
                    : i < blocks.length - 1
                    ? ' mined '
                    : ''}
                  <Text weight="bold">{block.miningPool}</Text>
                  {block.miningPool ? ' ' : ''}
                  {i < blocks.length - 1
                    ? `in ${formatDistance(
                        new Date(block.timestamp),
                        new Date(blocks[i + 1].timestamp)
                      )}`
                    : ''}
                </Text>
                <Text color="subtle">
                  {formatDistance(new Date(block.timestamp), new Date(), {
                    addSuffix: true,
                  })}
                </Text>
              </div>
            </div>
          )) || <EntityListSkeleton skeletonCount={skeletonCount} />}
        </div>
      </div>
    </Panel>
  )
}

function itemBorderStyles() {
  return cx(
    'border-t border-gray-200 dark:border-graydark-300',
    'first:border-none'
  )
}
