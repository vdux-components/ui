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
    divider: baseColors.black,
    text: baseColors.black
  },

  iconTag: 'md-icon',
  iconClass: 'material-icons',

  inverted: 'white',

  borderRadius: 2,
  cardShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  menuShadow: '0 0 20px 0 rgba(52, 52, 52, 0.2)',

  scale: {
    z: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64
  },

  fontScale: {
    xxl: 48,
    xl: 32,
    l: 24,
    m: 20,
    s: 16,
    xs: 14,
    xxs: 12
  },

  lineHeightScale: {
    xxl: '1.2em',
    xl: '1.2em',
    l: '1.2em',
    s: '1.4em',
    xs: '1.2em',
    xxs: '1.2em'
  },

  zIndexScale: {
    tooltip: 99999
  }
}
