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
  'p',
  'px',
  'py',
  'pt',
  'pl',
  'pb',
  'pr',
  'm',
  'mx',
  'my',
  'mt',
  'ml',
  'mb',
  'mr',
  'fs',
  'color',
  'bgColor',
  'inverted',
  'theme',
  'circle',
  'pill',
  'rounded',
  'style',
  'tag',
  'wide',
  'tall',
  'baseStyle',
  '$theme'
])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {baseTheme = {}} = context
  props.$theme = pick(themeProps, props, baseTheme, defaultTheme)
  return props
}

/**
 * Base Component
 */

function render ({props, children}) {
  const {tag: Tag = 'div', $theme} = props
  const {borderRadius, colors, scale, fontScale} = $theme

  return (
    <Tag {...filterProps(props)} style={getStyle(props, borderRadius, scale, colors)}>
      {children}
    </Tag>
  )
}

/**
 * Helpers
 */

function getStyle (props, borderRadius, scale, colors, fontScale) {
  const result = {}
  const {style, baseStyle, wide, tall, fs} = props

  extend(result, baseStyle)

  colorStyle(result, props, colors)
  radius(result, props, borderRadius)
  margin(result, props, scale)
  padding(result, props, scale)

  if (wide) result.width = '100%'
  if (tall) result.height = '100%'

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
