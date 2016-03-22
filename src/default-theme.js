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
    error: baseColors.red,
    divider: baseColors.black
  },

  iconTag: 'md-icon',
  iconClass: 'material-icons',

  inverted: 'white',
  textColor: 'black',

  borderRadius: 2,
  cardShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',

  scale: [
    0,
    8,
    16,
    32,
    64
  ],

  fontScale: [
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
