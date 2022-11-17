import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const styles = cva(['rounded-full flex-shrink-0'], {
  variants: {
    size: {
      small: 'w-2 h-2',
      medium: 'w-4 h-4',
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

type Props = React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof styles>

export const Status = React.forwardRef<HTMLDivElement, Props>(
  ({ size, className, ...props }, ref) => {
    return <div ref={ref} className={styles({ size, className })} {...props} />
  }
)
