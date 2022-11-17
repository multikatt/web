import { Text } from '../core/Text'
import { Button } from '../core/Button'
import { Link } from '../core/Link'
import { Copy16, Copy20 } from '../icons/carbon'
import { copyToClipboard } from '../lib/clipboard'
import { stripPrefix } from '../lib/utils'
import { EntityType, getEntityTypeLabel } from '../lib/entityTypes'
import { cx } from 'class-variance-authority'

type Props = {
  value: string
  displayValue?: string
  type?: EntityType
  label?: string
  href?: string
  size?: React.ComponentProps<typeof Text>['size']
  scaleSize?: React.ComponentProps<typeof Text>['scaleSize']
  maxLength?: number
  color?: React.ComponentProps<typeof Text>['color']
  className?: string
}

export function ValueCopyable({
  value,
  displayValue,
  type,
  label: customLabel,
  href,
  maxLength: customMaxLength,
  size,
  scaleSize,
  color = 'contrast',
  className,
}: Props) {
  const label = customLabel || getEntityTypeLabel(type)
  const maxLength = customMaxLength || (type === 'ip' ? 20 : 12)
  const cleanValue = stripPrefix(value)
  const renderValue = displayValue || cleanValue

  const text = `${renderValue?.slice(0, maxLength)}${
    (renderValue?.length || 0) > maxLength ? '...' : ''
  }`

  return (
    <div className={cx('flex gap-1 items-center', className)}>
      <Text size={size} scaleSize={scaleSize} weight="semibold" color={color}>
        {href ? (
          <Link href={href} underline={false}>
            {text}
          </Link>
        ) : (
          text
        )}
      </Text>
      <Button
        size="small"
        onClick={(e) => {
          e.stopPropagation()
          copyToClipboard(cleanValue, label)
        }}
      >
        {Number(size) <= 14 ? <Copy16 /> : <Copy20 />}
      </Button>
    </div>
  )
}
