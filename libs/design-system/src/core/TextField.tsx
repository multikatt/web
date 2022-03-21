import { styled } from '../config/theme'

export const TextField = styled('input', {
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$sans',
  '&[type=number]': {
    fontFamily: '$mono',
  },
  margin: '0',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: '$colors$border, $colors$shadow',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow:
      '$colors$borderInput, $colors$shadow, inset 0 0 0 100px $colors$brandAccent4',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '@hover': {
    '&:hover': {
      boxShadow: '$colors$borderInputHover, $colors$shadow',
    },
  },

  '&:focus': {
    boxShadow: '$colors$borderInputActive, $colors$shadowActive',
    '&:-webkit-autofill': {
      boxShadow:
        '$colors$borderInputActive, $colors$shadowActive, inset 0 0 0 100px $colors$brandAccent4',
    },
  },
  '&::placeholder': {
    color: '$brandGray9',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$brandGray2',
    color: '$brandGray8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$brandGray7',
    },
  },
  '&:read-only': {
    backgroundColor: '$brandGray2',
    boxShadow: '$colors$borderInput, $colors$shadow',
    '&:focus': {
      boxShadow: '$colors$borderInputActive, $colors$shadowActive',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$3-5',
        fontSize: '$12',
        padding: '0 $1',
        lineHeight: '$sizes$3-5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$12',
        },
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          position: 'relative',
          right: '-7px',
        },
      },
      '2': {
        borderRadius: '$1',
        height: '$5',
        fontSize: '$16',
        padding: '0 $1-5',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$16',
        },
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          position: 'relative',
          right: '-13px',
        },
      },
    },
    noSpin: {
      true: {
        '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
          '-webkit-appearance': 'none',
        },

        '&[type=number]': {
          '-moz-appearance': 'textfield',
        },
      },
    },
    variant: {
      totalGhost: {
        padding: 0,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        '&:focus': {
          backgroundColor: 'none',
          boxShadow: 'none',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: '$colors$borderRed, $colors$shadow',
        '@hover': {
          '&:hover': {
            boxShadow: '$colors$borderRedHover, $colors$shadow',
          },
        },
        '&:focus': {
          boxShadow: '$colors$borderRedActive, $colors$shadowActive',
        },
      },
      valid: {
        boxShadow: '$colors$borderGreen, $colors$shadow',
        '@hover': {
          '&:hover': {
            boxShadow: '$colors$borderGreenHover, $colors$shadow',
          },
        },
        '&:focus': {
          boxShadow: '$colors$borderGreenActive, $colors$shadowActive',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})