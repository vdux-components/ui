/**
 * Imports
 */

import {getThemeProps, setScaled} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Constants
 */

const getProps = getThemeProps(['colors'])
const filterProps = omit([
  'border',
  'borderColor',
  'borderWidth',
  'borderTop',
  'borderBottom',
  'borderLeft',
  'borderRight',
  'textAlign'
])

/**
 * Block
 */

function render ({props, children}) {
  const {baseStyle = {}} = props

  return (
    <Base {...filterProps(props)} class={[props.class, 'vui-block']} baseStyle={{...baseStyle, ...getStyle(props, props.$theme)}}>
      {children}
    </Base>
  )
}

/**
 * getStyle
 */

function getStyle (props, {colors, scale}) {
  const {textAlign, border, borderColor, borderWidth = '1px', borderTop, borderBottom, borderLeft, borderRight, width, height} = props
  const result = {}

  if (border) {
    result.borderStyle = 'solid'
    if (typeof border === 'string') {
      setScaled(result, 'borderColor', border, colors)
    }
  }

  if (borderTop) {
    result.borderTopStyle = 'solid'
    if (typeof borderTop === 'string') {
      setScaled(result, 'borderTopColor', borderTop, colors)
    }
  }

  if (borderBottom) {
    result.borderBottomStyle = 'solid'
    if (typeof borderBottom === 'string') {
      setScaled(result, 'borderBottomColor', borderBottom, colors)
    }
  }

  if (borderLeft) {
    result.borderLeftStyle = 'solid'
    if (typeof borderLeft === 'string') {
      setScaled(result, 'borderLeftColor', borderLeft, colors)
    }
  }

  if (borderRight) {
    result.borderRightStyle = 'solid'
    if (typeof borderRight === 'string') {
      setScaled(result, 'borderRightColor', borderRight, colors)
    }
  }

  if (borderColor) setScaled(result, 'borderColor', borderColor, colors)
  if (borderWidth) result.borderWidth = borderWidth
  if (textAlign) result.textAlign = textAlign

  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
