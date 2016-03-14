/**
 * Imports
 */

import {radius, colorStyle, padding, margin, extend, setScaled} from '../util'
import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'

/**
 * Constants
 */

const themeProps = ['borderRadius', 'colors', 'scale', 'fontScale']
const filterProps = omit([
  // Padding
  'p',
  'px',
  'py',
  'pt',
  'pl',
  'pb',
  'pr',

  // Margin
  'm',
  'mx',
  'my',
  'mt',
  'ml',
  'mb',
  'mr',

  // Text
  'fs',
  'ellipsis',

  // Color
  'color',
  'bgColor',
  'inverted',
  'theme',

  // Shape
  'circle',
  'pill',
  'rounded',
  'wide',
  'tall',

  // Element / Theme
  'tag',
  'style',
  'baseStyle',
  '$theme'
])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, props, uiTheme, defaultTheme)
  return props
}

/**
 * Base Component
 */

function render ({props, children}) {
  const {tag: Tag = 'div', $theme} = props
  const {borderRadius, colors, scale, fontScale} = $theme

  return (
    <Tag {...filterProps(props)} style={getStyle(props, borderRadius, scale, colors, fontScale)}>
      {children}
    </Tag>
  )
}

/**
 * Helpers
 */

function getStyle (props, borderRadius, scale, colors, fontScale) {
  const result = {}
  const {style, baseStyle, wide, tall, fs, ellipsis} = props

  extend(result, baseStyle)

  colorStyle(result, props, colors)
  radius(result, props, borderRadius)
  margin(result, props, scale)
  padding(result, props, scale)

  if (wide) result.width = '100%'
  if (tall) result.height = '100%'
  if (ellipsis) result.textOverflow = 'ellipsis'

  setScaled(result, 'fontSize', fs, fontScale)
  extend(result, style)

  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}

export {
  defaultTheme
}
