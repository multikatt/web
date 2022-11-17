import { cva, cx, VariantProps } from 'class-variance-authority'
import BaseNextLink from 'next/link'
import React from 'react'
import { textStyles } from './Text'
import { Button, ButtonLink } from './Button'

const linkVariants = cva([], {
  variants: {
    disabled: {
      true: 'opacity-50',
    },
    underline: {
      true: 'underline underline-offset-2 decoration-gray-1100 dark:decoration-gray-500',
    },
  },
  defaultVariants: {
    disabled: false,
    underline: true,
  },
})

type Variants = VariantProps<typeof linkVariants> &
  VariantProps<typeof textStyles> & {
    className?: string
  }
const variants = ({
  font,
  size,
  scaleSize,
  color,
  weight,
  noWrap,
  ellipsis,
  underline,
  disabled,
  className,
}: Variants) =>
  cx(
    textStyles({ scaleSize, size, font, color, weight, noWrap, ellipsis }),
    linkVariants({ disabled, underline }),
    className
  )

type Props = React.ComponentProps<typeof BaseNextLink> & Variants

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
  (
    {
      href,
      font,
      size,
      scaleSize,
      color,
      weight,
      noWrap,
      ellipsis,
      underline,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <BaseNextLink href={href} passHref>
        <a
          ref={ref}
          className={variants({
            font,
            scaleSize,
            size,
            color,
            weight,
            noWrap,
            ellipsis,
            underline,
            disabled,
            className,
          })}
          {...props}
        >
          {children}
        </a>
      </BaseNextLink>
    )
  }
)

type NextLinkButtonProps = React.ComponentProps<typeof Button> & {
  id?: string
  href?: string
  disabled?: boolean
  target?: string
}

// Next link
export function LinkButton({
  id,
  href,
  target,
  disabled,
  ...props
}: NextLinkButtonProps) {
  if (!href || disabled) {
    return <Button id={id} {...props} disabled={disabled} />
  }
  return (
    <BaseNextLink href={href} passHref>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      <ButtonLink id={id} target={target} {...(props as any)} />
    </BaseNextLink>
  )
}
