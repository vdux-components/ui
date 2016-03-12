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
  const {border, borderColor, borderWidth, borderTop, borderBottom, borderLeft, borderRight} = props
  const result = {}

  if (border) result.borderStyle = bs(border)
  if (borderTop) result.borderTopStyle = bs(borderTop)
  if (borderBottom) result.borderBottomStyle = bs(borderBottom)
  if (borderLeft) result.borderLeftStyle = bs(borderLeft)
  if (borderRight) result.borderRightStyle = bs(borderRight)
  if (borderColor) result.borderColor = colors && colors[borderColor] ? colors[border] : borderColor
  if (borderWidth) result.borderWith = borderWidth

  return result
}

function bs (exists) {
  return exists ? 'solid' : 'none'
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
