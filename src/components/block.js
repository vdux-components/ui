/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import omit from '@f/omit'
import pick from '@f/pick'
import Base from './base'

/**
 * Constants
 */

const themeProps = ['colors']
const filterProps = omit([
  'border',
  'borderColor',
  'borderWidth',
  'borderTop',
  'borderBottom',
  'borderLeft',
  'borderRight'
])

/**
 * getProps
 */

function getProps (props, context) {
  props.$theme = pick(themeProps, context, defaultTheme)
  return props
}

/**
 * Block
 */

function render ({props, children}) {
  return (
    <Base {...filterProps(props)} baseStyle={getStyle(props, props.$theme)}>
      {children}
    </Base>
  )
}

/**
 * getStyle
 */

function getStyle (props, {colors, scale}) {
  const {border, borderColor, borderWidth = '1px', borderTop, borderBottom, borderLeft, borderRight} = props
  const result = {}

  if (border) result.borderStyle = 'solid'
  if (borderTop) {
    result.borderTopStyle = 'solid'
    if (typeof borderTop === 'string') {
      result.borderTopColor = getColor(borderTop, colors)
    }
  }

  if (borderBottom) {
    result.borderBottomStyle = 'solid'
    if (typeof borderBottom === 'string') {
      result.borderBottomColor = getColor(borderBottom, colors)
    }
  }

  if (borderLeft) {
    result.borderLeftStyle = 'solid'
    if (typeof borderLeft === 'string') {
      result.borderLeftColor = getColor(borderLeft, colors)
    }
  }

  if (borderRight) {
    result.borderRightStyle = 'solid'
    if (typeof borderRight === 'string') {
      result.borderRightColor = getColor(borderRight, colors)
    }
  }

  if (borderColor) result.borderColor = getColor(borderColor, colors)
  if (borderWidth) result.borderWidth = borderWidth

  return result
}

function getColor (color, colorScale) {
  return colorScale && colorScale[color] ? colorScale[color] : color
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
