/**
 * Imports
 */

import {
  mergeTheme, setScaled, scaleSetter, boolSetter,
  positionSetter, highlight, borderSetter, flexify,
  rgbaify, createStylePrefixer
} from '../util'
import {component, element} from 'vdux'
import htmlAttrs from '@f/html-attrs'
import extend from '@f/extend'
import has from '@f/has'

/**
 * <Base/>
 */

export default component({
  render ({props, children, context}) {
    const {tag: Tag = 'div'} = props
    const newProps = {}
    const style = {}

    computeProps(style, newProps, props, context.uiMedia, mergeTheme(context.uiTheme), createStylePrefixer(context.uiPrefixUserAgent))

    return (
      <Tag {...newProps}>
        {children}
      </Tag>
    )
  }
})

/**
 * Constants
 */

const canContainRgba = [
  'color',
  'bgColor',
  'background',
  'bg',
  'outline',
  'outlineColor',
  'boxShadow',
  'border',
  'borderTop',
  'borderBottom',
  'borderLeft',
  'borderRight',
  'borderColor',
  'borderTopColor',
  'borderLeftColor',
  'borderRightColor',
  'borderBottomColor'
].reduce((acc, key) => {
  acc[key] = true
  return acc
}, {})

const borderRadiusSetter = boolSetter('borderRadius', 9999)
const squareSetter = scaleSetter(['width', 'height'])

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
  bolder: boolSetter('fontWeight', 'bolder'),
  lighter: boolSetter('fontWeight', 'lighter'),
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
  sq: squareSetter,
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
  outline: scaleSetter('outline', 'colors'),
  outlineColor: scaleSetter('outlineColor', 'colors'),
  color: scaleSetter('color', 'colors'),
  bgColor: scaleSetter('backgroundColor', 'colors'),
  bgImg: (style, val) => style.backgroundImage = `url(${val})`,
  bgSize: (style, val) => style.backgroundSize = val,
  bgPos: (style, val) => style.backgroundPosition = val,
  bg: (style, val = '', {colors}) => style.background = val
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
  pill: borderRadiusSetter,
  circle: (style, val, theme, props) => {
    borderRadiusSetter(style, val, theme, props)
    if (typeof val !== 'boolean') {
      squareSetter(style, val, theme, props)
    }
  },
  rounded: (style, val, {borderRadius}) => {
    if (val === true) style.borderRadius = borderRadius
    else if (val === false) style.borderRadius = 0
    else if (typeof val === 'string') {
      style.borderRadius = val
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
      else if (!/\s/.test(val)) {
        style.flex = `1 1 ${val}`
        if (typeof val === 'string' && val.indexOf('%') !== -1) {
          style['max' + (props.col ? 'Height' : 'Width')] = val
        }
      } else {
        style.flex = val
      }
    }
  },

  column: (style, val) => {
    style.display = 'flex'
    style.flexDirection = val ? 'column' : 'row'
  },
  align: (style, val) => {
    if (val) {
      const [justify, alignItems] = val.split(' ')
      style.justifyContent = flexify(justify)
      style.alignItems = flexify(alignItems)
      style.display = 'flex'
    }
  },
  wrap: boolSetter('flexWrap', 'wrap'),

  // Shadow
  boxShadow: scaleSetter('boxShadow', 'shadow')
}

/**
 * computeProps
 *
 * Decide which props to forward, and process style properties
 */

function computeProps (style, newProps, props, media, theme, autoprefix) {
  if (media) {
    const mediaProps = props[media + 'Props']
    if (mediaProps) extend(props, mediaProps)
  }

  // Separate styles and props (attributes to be placed on the element)
  // and apply shorthand functions

  for (let key in props) {
    if (key === 'tag') continue

    const val = canContainRgba[key]
      ? rgbaify(props[key], theme.colors)
      : props[key]

    if (fns[key]) {
      fns[key](style, val, theme, props)
    } else if (eventRegex.test(key) || htmlAttrs[key] || key === 'innerHTML') {
      newProps[key] = val
    } else if (val !== undefined && typeof val !== 'object' && key[0] !== '$') {
      style[key] = val
    }
  }

  // Post processing transformations
  if (props.highlight && style.backgroundColor) {
    style.backgroundColor = highlight(style.backgroundColor, props.highlight === true ? 0.1 : props.highlight)
  }

  if (style) {
    newProps.style = style
    autoprefix(style)
  }
}
