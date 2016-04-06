/**
 * Imports
 */

import {radius, colorStyle, padding, margin, position, setScaled, getThemeProps} from '../util'
import CSSEmulator from 'vdux-css-emulator'
import element from 'vdux/element'
import extend from '@f/extend'
import omit from '@f/omit'
import has from '@f/has'

/**
 * Constants
 */

const getProps = getThemeProps([
  'borderRadius',
  'colors',
  'scale',
  'fontScale',
  'zIndexScale',
  'lineHeightScale'
])

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
  'z',
  'hidden',
  'hide',
  'style',
  'baseStyle',
  'inlineBlock',
  '$theme'
])

/**
 * Base Component
 */

function render ({props, children}) {
  const {$theme} = props

  return (
    <CSSEmulator {...filterProps(props)} class={props.class} style={getStyle(props, $theme)}>
      {children}
    </CSSEmulator>
  )
}

/**
 * Helpers
 */

function getStyle (props, {borderRadius, scale, colors, fontScale, lineHeightScale, zIndexScale}) {
  const result = {}
  const {
    style, inlineBlock, baseStyle, wide, tall, hidden, opacity,
    lh, w, h, sq, fs, ellipsis, clear, float, cursor, pointer,
    transition, z, hide
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
  if (transition) result.transition = transition
  if (opacity !== undefined) result.opacity = opacity
  if (hidden) result.visibility = 'hidden'
  if (ellipsis) {
    result.whiteSpace = 'nowrap'
    result.textOverflow = 'ellipsis'
    result.overflow = 'hidden'
  }

  if (hide) result.display = 'none'
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

  setScaled(result, 'zIndex', z, zIndexScale)
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
