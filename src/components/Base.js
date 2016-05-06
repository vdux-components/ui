/**
 * Imports
 */

import {
  mergeTheme, setScaled, scaleSetter, boolSetter,
  positionSetter, highlight, borderSetter, flexify
} from '../util'
import CSSEmulator from 'vdux-css-emulator'
import htmlAttrs from '@f/html-attrs'
import element from 'vdux/element'
import extend from '@f/extend'
import has from '@f/has'

/**
 * Constants
 */


function getProps (props, context) {
  props.$theme = mergeTheme(context.uiTheme)
  return props
}

const eventRegex = /^on[A-Z]/
const fns = {
  // Padding
  p: scaleSetter('padding'),
  py: scaleSetter(['paddingTop', 'paddingBottom']),
  px: scaleSetter(['paddingLeft', 'paddingRight']),
  pt: scaleSetter('paddingTop'),
  pb: scaleSetter('paddingBottom'),
  pl: scaleSetter('paddingLeft'),
  pr: scaleSetter('paddingRight'),

  // Margin
  m: scaleSetter('margin'),
  my: scaleSetter(['marginTop', 'marginBottom']),
  mx: scaleSetter(['marginLeft', 'marginRight']),
  mt: scaleSetter('marginTop'),
  mb: scaleSetter('marginBottom'),
  ml: scaleSetter('marginLeft'),
  mr: scaleSetter('marginRight'),

  // Font
  fontFamily: scaleSetter('fontFamily', 'fonts'),
  italic: boolSetter('fontStyle', 'italic'),
  bold: boolSetter('fontWeight', 'bold'),
  capitalize: boolSetter('textTransform', 'capitalize'),
  uppercase: boolSetter('textTransform', 'uppercase'),
  underline: boolSetter('textDecoration', 'underline'),
  antialiased: boolSetter('-webkit-font-smoothing', 'antialiased'),
  fw: scaleSetter('fontWeight', 'weightScale'),
  fs: (style, val, theme, props) => {
    setScaled(style, 'fontSize', val, theme.fontScale)
    if (has(val, theme.lineHeightScale) && !has('lh', props)) {
      setScaled(style, 'lineHeight', val, theme.lineHeightScale)
    }
  },
  lh: scaleSetter('lineHeight', 'lineHeightScale'),

  // Size
  wide: boolSetter('width', '100%'),
  tall: boolSetter('height', '100%'),
  sq: scaleSetter(['width', 'height']),
  w: scaleSetter('width'),
  h: scaleSetter('height'),

  // Cursor
  pointer: boolSetter('cursor', 'pointer'),

  // Position
  absolute: positionSetter('absolute'),
  relative: positionSetter('relative'),
  fixed: positionSetter('fixed'),
  top: (style, val) => style.top = val === true ? 0 : val,
  left: (style, val) => style.left = val === true ? 0 : val,
  right: (style, val) => style.right = val === true ? 0 : val,
  bottom: (style, val) => style.bottom = val === true ? 0 : val,

  // Color/Background
  color: scaleSetter('color', 'colors'),
  bgColor: scaleSetter('backgroundColor', 'colors'),
  bg: (style, val, {colors}) => style.background = val
    .split(' ')
    .map(p => has(p, colors) ? colors[p] : p)
    .join(' '),

  // Element
  hide: boolSetter('display', 'none'),
  hidden: boolSetter('visibility', 'hidden'),

  z: scaleSetter('zIndex', 'zIndexScale'),
  inlineBlock: boolSetter('display', 'inline-block'),
  clear: (style, val) => style.clear = (val === true ? 'both' : val),
  ellipsis: (style, val) => {
    if (val) {
      style.whiteSpace = 'nowrap'
      style.textOverflow = 'ellipsis'
      style.overflow = 'hidden'
    }
  },

  // Rounding
  pill: boolSetter('borderRadius', 99999),
  circle: boolSetter('borderRadius', 99999),
  rounded: (style, val, {borderRadius}) => {
    if (val === true) style.borderRadius = borderRadius
    else if (val === false) style.borderRadius = 0
    else if (typeof val === 'string') {
      style.borderRadius = posString(val, borderRadius)
    }
  },

  // Border
  border: borderSetter('border'),
  borderTop: borderSetter('borderTop'),
  borderBottom: borderSetter('borderBottom'),
  borderLeft: borderSetter('borderLeft'),
  borderRight: borderSetter('borderRight'),
  borderColor: scaleSetter('borderColor', 'colors'),
  borderTopColor: scaleSetter('borderTopColor', 'colors'),
  borderLeftColor: scaleSetter('borderLeftColor', 'colors'),
  borderRightColor: scaleSetter('borderRightColor', 'colors'),
  borderBottomColor: scaleSetter('borderBottomColor', 'colors'),

  borderWidth: (style, val) => style.borderWidth = val,

  // Flexbox
  flex: (style, val, theme, props) => {
    if (val) {
      if (val === true) style.flex = '1'
      else {
        style.flex = `1 1 ${val}`
        if (typeof val === 'string' && val.indexOf('%') !== -1) {
          style['max' + (props.col ? 'Height' : 'Width')] = val
        }
      }
    }
  },

  wrap: boolSetter('flexWrap', 'wrap'),
  column: boolSetter('flexDirection', 'column'),
  align: (style, val) => {
    if (val) {
      const [justify, alignItems] = val.split(' ')
      style.justifyContent = flexify(justify)
      style.alignItems = flexify(alignItems)
    }
  },
  wrap: boolSetter('flexWrap', 'wrap'),

  // Shadow
  boxShadow: scaleSetter('boxShadow', 'shadow')
}

/**
 * Base Component
 */

function render ({props, children}) {
  const newProps = {}
  const style = {}

  computeProps(style, newProps, props)

  return (
    <CSSEmulator {...newProps}>
      {children}
    </CSSEmulator>
  )
}

/**
 * computeProps
 *
 * Decide which props to forward, and process style properties
 */

function computeProps (style, newProps, props) {
  // Apply base styles
  if (props.baseStyle) extend(style, props.baseStyle)

  // Separate styles and props (attributes to be placed on the element)
  // and apply shorthand functions

  for (let key in props) {
    if (key === 'tag') continue

    const val = props[key]

    if (fns[key]) {
      fns[key](style, val, props.$theme, props)
    } else if (eventRegex.test(key) || htmlAttrs[key]) {
      newProps[key] = val
    } else if (val !== undefined && typeof val !== 'object') {
      style[key] = val
    }
  }

  // Post processing transformations

  if (props.highlight && style.backgroundColor) {
    style.backgroundColor = highlight(style.backgroundColor)
  }

  if (props.style) extend(style, props.style)
  if (style) newProps.style = style

  newProps.tag = props.tag
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
