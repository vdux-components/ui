/**
 * Imports
 */

import {radius, colorStyle, padding, margin, position, extend, setScaled} from '../util'
import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import has from '@f/has'

/**
 * Constants
 */

const themeProps = ['borderRadius', 'colors', 'scale', 'fontScale', 'zIndex', 'lineHeightScale']
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
  'lh',
  'ellipsis',

  // Color
  'color',
  'bgColor',
  'bg',
  'inverted',
  'theme',
  'opacity',

  // Shape
  'circle',
  'pill',
  'rounded',
  'wide',
  'tall',
  'w',
  'h',
  'sq',

  // Position
  'absolute',
  'relative',
  'fixed',

  // Float
  'clear',
  'float',

  // Cursor
  'cursor',
  'pointer',

  // Transition
  'transition',

  // Element / Theme
  'zIndex',
  'tag',
  'hidden',
  'style',
  'baseStyle',
  'inlineBlock',
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

  return (
    <Tag {...filterProps(props)} class={props.class} style={getStyle(props, $theme)}>
      {children}
    </Tag>
  )
}

/**
 * Helpers
 */

function getStyle (props, {borderRadius, scale, colors, fontScale, lineHeightScale}) {
  const result = {}
  const {
    style, inlineBlock, baseStyle, wide, tall, hidden, opacity,
    lh, w, h, sq, fs, ellipsis, clear, float, cursor, pointer,
    transition, zIndex
  } = props

  extend(result, baseStyle)

  colorStyle(result, props, colors)
  radius(result, props, borderRadius)
  margin(result, props, scale)
  padding(result, props, scale)
  position(result, props, scale)

  if (wide) result.width = '100%'
  if (tall) result.height = '100%'
  if (pointer) result.cursor = 'pointer'
  if (cursor) result.cursor = cursor
  if (zIndex) result.zIndex = zIndex
  if (transition) result.transition = transition
  if (opacity !== undefined) result.opacity = opacity
  if (hidden) result.visibility = 'hidden'
  if (ellipsis) {
    result.whiteSpace = 'nowrap'
    result.textOverflow = 'ellipsis'
    result.overflow = 'hidden'
  }

  if (inlineBlock) result.display = 'inline-block'
  if (float) result.float = float
  if (clear) {
    result.clear = clear === true
      ? 'both'
      : clear
  }

  setScaled(result, 'width', sq, scale)
  setScaled(result, 'height', sq, scale)
  setScaled(result, 'width', w, scale)
  setScaled(result, 'height', h, scale)

  setScaled(result, 'fontSize', fs, fontScale)

  // Use the font-size to set the line-height as well, but
  // allow it to be overriden by an explicit line-height
  if (has(fs, lineHeightScale)) result.lineHeight = lineHeightScale[fs]
  setScaled(result, 'lineHeight', lh, lineHeightScale)

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
