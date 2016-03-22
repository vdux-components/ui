/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import {setScaled} from '../util'
import omit from '@f/omit'
import pick from '@f/pick'
import Base from './Base'

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

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

/**
 * Block
 */

function render ({props, children}) {
  const {baseStyle = {}} = props

  return (
    <Base {...filterProps(props)} class={[props.class, 'vui-block']} baseStyle={{...getStyle(props, props.$theme), ...baseStyle}}>
      {children}
    </Base>
  )
}

/**
 * getStyle
 */

function getStyle (props, {colors, scale}) {
  const {textAlign, border, borderColor, borderWidth = '1px', borderTop, borderBottom, borderLeft, borderRight} = props
  const result = {}

  if (border) result.borderStyle = 'solid'
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
