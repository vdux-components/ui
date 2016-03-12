/**
 * Imports
 */

import has from '@f/has'

/**
 * Style computation utilities
 */

function colorStyle (result, props, colors) {
  const {color, bgColor, inverted, theme} = props

  if (color) {
    result.color = colors[color] ? colors[color] : color
  }

  if (bgColor) {
    result.backgroundColor = colors[bgColor] ? colors[bgColor] : bgColor
  }

  if (theme && colors[theme]) {
    const invertedColor = props.inverted
    if (inverted) {
      result.color = invertedColor || colors.white
      result.bgColor = colors[theme]
    } else {
      result.color = colors[theme]
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

function extend (dest, src) {
  if (src) {
    for (var key in src) {
      dest[key] = src[key]
    }
  }

  return dest
}

/**
 * Exports
 */

export {
  colorStyle,
  radius,
  padding,
  margin,
  extend,
  setScaled
}
