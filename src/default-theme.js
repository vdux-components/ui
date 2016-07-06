/**
 * Default theme for <Base/> component and those that depend on it
 */

const baseColors = {
  black: '#111',
  white: '#fff',
  grey: '#ddd',
  grey_medium: '#888',
  blue: '#08e',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

export default {
  circularAvatars: true,

  colors: {
    ...baseColors,
    primary: baseColors.blue,
    secondary: baseColors.grey_medium,
    default: baseColors.black,
    info: baseColors.blue,
    success: baseColors.green,
    warning: baseColors.orange,
    error: baseColors.red,
    divider: baseColors.grey_medium,
    text: baseColors.black
  },

  iconTag: 'md-icon',
  iconClass: 'material-icons',

  borderRadius: 3,

  shadow: {
    card: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
    menu: '0 0 20px 0 rgba(52, 52, 52, 0.2), 0 0 0 1px rgba(52, 52, 52, 0.05)'
  },

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
    tooltip: 99999,
    overlay: 99999
  }
}
