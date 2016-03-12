/**
 * Default theme for <Base/> component and those that depend on it
 */

const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  midgray: '#888',
  blue: '#08e',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

export default {
  colors: {
    ...baseColors,
    primary: baseColors.blue,
    secondary: baseColors.midgray,
    default: baseColors.black,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red
  },

  inverted: baseColors.white,

  borderRadius: 2,

  scale: [
    0,
    8,
    16,
    32,
    64
  ],

  fontSizes: [
    48,
    32,
    24,
    20,
    16,
    14,
    12
  ],

  zIndex: [
    0,
    2,
    4,
    8,
    16
  ]
}
