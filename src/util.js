/**
 * Imports
 */

import defaultTheme from './default-theme'
import pick from '@f/pick'
import Color from 'color'
import has from '@f/has'

/**
 * Style computation utilities
 */

function colorStyle (result, props, colors) {
  const {color, bg, bgColor, inverted, theme} = props

  if (color) {
    setScaled(result, 'color', color, colors)
  }

  if (bgColor) {
    setScaled(result, 'backgroundColor', bgColor, colors)
  }

  if (bg) {
    // Set the color string from our palette if it
    // exists
    result.background = bg
      .split(' ')
      .map(p => has(p, colors) ? colors[p] : p)
      .join(' ')
  }

  if (theme && colors[theme]) {
    const invertedColor = props.inverted === true ? 'white' : invertedColor
    if (inverted) {
      setScaled(result, 'color', invertedColor, colors)
      setScaled(result, 'backgroundColor', theme, colors)
    } else {
      setScaled(result, 'color', theme, colors)
    }
  }

  return result
}

function radius (result, {circle, pill, rounded}, r) {
  if (pill || circle) {
    result.borderRadius = 99999
  }

  if (rounded === true) {
    result.borderRadius = r
  }

  if (rounded === false) {
    result.borderRadius = 0
  }

  if (typeof rounded === 'string') {
    result.borderRadius = posString(rounded, r)
  }

  return result
}

function padding (result, props, scale) {
  const {p, px, py, pt, pr, pb, pl} = props

  // all padding props
  setScaled(result, 'padding', p, scale)

  // y-axis
  setScaled(result, 'paddingTop', py, scale)
  setScaled(result, 'paddingBottom', py, scale)

  // x-axis
  setScaled(result, 'paddingLeft', px, scale)
  setScaled(result, 'paddingRight', px, scale)

  // Individual sides
  setScaled(result, 'paddingTop', pt, scale)
  setScaled(result, 'paddingBottom', pb, scale)
  setScaled(result, 'paddingLeft', pl, scale)
  setScaled(result, 'paddingRight', pr, scale)

  return result
}

function margin (result, props, scale) {
  const {m, mx, my, mt, mr, mb, ml} = props

  // all padding props
  setScaled(result, 'margin', m, scale)

  // y-axis
  setScaled(result, 'marginTop', my, scale)
  setScaled(result, 'marginBottom', my, scale)

  // x-axis
  setScaled(result, 'marginLeft', mx, scale)
  setScaled(result, 'marginRight', mx, scale)

  // Individual sides
  setScaled(result, 'marginTop', mt, scale)
  setScaled(result, 'marginBottom', mb, scale)
  setScaled(result, 'marginLeft', ml, scale)
  setScaled(result, 'marginRight', mr, scale)

  return result
}

function setScaled (obj, key, val, scale) {
  if (typeof val !== 'undefined') {
    obj[key] = scale && has(val, scale)
      ? scale[val]
      : val
  }
}

function posString (pos, n) {
  switch (pos) {
    case 'top': return `${n}px 0 0 0`
    case 'right': return `0 ${n}px 0 0`
    case 'bottom': return `0 0 ${n}px 0`
    case 'left': return `0 0 0 ${n}px`
  }
}

/**
 *  position(obj, str)
 *
 * Set position on a style object
 *
 *  * obj - Object. Obj to set style on
 *  * props - Object with keys absolute|relative|fixed set to position strings of
 *            the form `bottom right` or `bottom 10px right 5px`.
 *            i.e. `(top|bottom) (n)? (left|right) (n)?`
 *  * scale - The scale from which to select sizes
 */
const posRe = /^(top|bottom)(?:\s(\d+[a-zA-Z]+))?\s(left|right)(?:\s(\d+[a-zA-Z]+))?$/

function position (obj, {absolute, relative, fixed}, scale) {
  let str = false

  if (absolute) {
    str = absolute
    obj.position = 'absolute'
  } else if (relative) {
    str = relative
    obj.position = 'relative'
  } else if (fixed) {
    str = fixed
    obj.position = 'fixed'
  }


  if (typeof str === 'string') {
    const parts = posRe.exec(str)

    setScaled(obj, parts[1], parts[2] || 0, scale)
    setScaled(obj, parts[3], parts[4] || 0, scale)
  } else if (typeof str === 'object') {
    const pos = str

    setScaled(obj, 'top', pos.top, scale)
    setScaled(obj, 'right', pos.right, scale)
    setScaled(obj, 'bottom', pos.bottom, scale)
    setScaled(obj, 'left', pos.left, scale)
  }

  return obj
}

function highlightColor (color, colors = {}, amount = 0.1) {
  if (color === 'transparent') return color
  const clr = Color(has(color, colors) ? colors[color] : color)

  return clr.light()
    ? clr.darken(amount).rgbaString()
    : clr.lighten(amount).rgbaString()
}

function getThemeProps (themeProps) {
  return (props, context = {}) => {
    const {uiTheme = {}} = context
    props.$theme = pick(themeProps, uiTheme, defaultTheme)
    return props
  }
}

/**
 * Exports
 */

export {
  colorStyle,
  radius,
  padding,
  margin,
  position,
  setScaled,
  highlightColor,
  getThemeProps
}
