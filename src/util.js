/**
 * Imports
 */

import normalizeBowser from '@f/normalize-bowser'
import defaultTheme from './default-theme'
import prefixStyle from '@f/prefix-style'
import extend from '@f/extend'
import bowser from 'bowser'
import pick from '@f/pick'
import Color from 'color'
import has from '@f/has'

/**
 * Prefixer
 */

let prefixer = style => style

function setupStylePrefixer (userAgent) {
  const {browser, version} = normalizeBowser(bowser._detect(userAgent))
  prefixer = prefixStyle(browser, version)
}

function autoprefix (styles) {
  return prefixer(styles)
}

/**
 * scaleSetter
 *
 * Set a style property from a given theme scale
 */

function scaleSetter (styleKey, themeScaleKey = 'scale', defaultValue = 'm') {
  if (Array.isArray(styleKey)) {
    return (style, val, theme) => {
      const scale = theme[themeScaleKey]

      if (val === true) {
        val = defaultValue
      }

      for (let i = 0; i < styleKey.length; ++i) {
        setScaled(style, styleKey[i], val, theme[themeScaleKey])
      }
    }
  } else {
    return (style, val, theme) => setScaled(
      style,
      styleKey,
      val === true ? defaultValue : val,
      theme[themeScaleKey]
    )
  }
}

/**
 * boolSetter
 *
 * Set a constant value if the property is true,
 * do nothing otherwise.
 */

function boolSetter (styleKey, value) {
  return (style, val) => val && (style[styleKey] = value)
}

/**
 * borderSetter
 *
 * Set a 1px solid border. If you pass a string, that string
 * is used as a color (indexed into your theme colors).
 */

function borderSetter (borderKey) {
  const colorKey = borderKey + 'Color'
  const styleKey = borderKey + 'Style'
  const widthKey = borderKey + 'Width'

  return (style, val, {colors}, {borderWidth = '1px'}) => {
    if (val) {
      if (typeof val === 'string') {
        // If the string being set has spaces in it,
        // that are not inside of a color string,
        // assume it's a shorthand for specifying all
        // the properties, rather than a named color
        if (/^[^\(]*\s/.test(val)) {
          const parts = val.split(' ')

          for (let i = 0; i < parts.length; i++) {
            const part = parts[i]
            if (has(part, colors)) {
              parts[i] = colors[part]
            }
          }

          style[borderKey] = parts.join(' ')
          return
        } else {
          setScaled(style, colorKey, val, colors)
        }
      }

      style[styleKey] = 'solid'
      style[widthKey] = borderWidth
    }
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

const posRe = /^(top|bottom)(?:\s(\-?\d+[a-zA-Z]+))?\s(left|right)(?:\s(\-?\d+[a-zA-Z]+))?$/

function positionSetter (styleKey) {
  return (style, val, {scale}) => {
    style.position = styleKey

    if (typeof val === 'string') {
      const parts = posRe.exec(val)

      setScaled(style, parts[1], parts[2] || 0, scale)
      setScaled(style, parts[3], parts[4] || 0, scale)
    } else if (typeof val === 'object') {
      setScaled(style, 'top', val.top, scale)
      setScaled(style, 'left', val.left, scale)
      setScaled(style, 'right', val.right, scale)
      setScaled(style, 'bottom', val.bottom, scale)
    }
  }
}

/**
 * setScaled
 *
 * Set a value from a scale if the scale has
 * a corresponding key for that value
 */

function setScaled (obj, key, val, scale) {
  if (typeof val !== 'undefined') {
    obj[key] = scale && has(val, scale)
      ? scale[val]
      : val
  }
}

/**
 * posString
 *
 * Generate a position string
 * given a position and a number
 */

function posString (pos, n) {
  switch (pos) {
    case 'top': return `${n}px 0 0 0`
    case 'right': return `0 ${n}px 0 0`
    case 'bottom': return `0 0 ${n}px 0`
    case 'left': return `0 0 0 ${n}px`
  }
}

/**
 * highlight
 *
 * Takes in a color and if that color is dark, lightens it
 * and if it is light, darkens it. This allows you to make
 * nice rollover effects where an element appears to
 * highlight when the mouse is over it.
 */

function highlight (color, amount = 0.1) {
  if (color === 'transparent') return color

  const clr = Color(color)

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
 * mergeTheme(ctxTheme)
 *
 * Merge the contextual theme with the default theme. Memoize this
 * so that we allocate/extend every time we render any components,
 * especially since the contextual theme should change only extremely
 * rarely, if ever.
 */

let lastCtxTheme = null
let lastMergedTheme = null

function mergeTheme (ctxTheme) {
  if (lastCtxTheme === ctxTheme && lastMergedTheme) return lastMergedTheme
  lastCtxTheme = ctxTheme
  lastMergedTheme = extend({}, defaultTheme, ctxTheme)
  return lastMergedTheme
}

/**
 * classes
 *
 * Takes two class arguments and if both are truthy,
 * returns an array of both, otherwise just returns
 * the truthy one
 */

function classes (a, b) {
  return a && b
    ? Array.isArray(a) ? a.concat(b) : [a, b]
    : a ? a : b
}

/**
 * flexify
 *
 * Just adds 'flex-' to 'start' or 'end' so we can use
 * a nicer syntax with our elements
 */

function flexify (str) {
  return str === 'start' || str === 'end'
    ? 'flex-' + str
    : str
}

const rgbaRe = /rgba\(([^,]+),([^,]+)\)/g

function rgbaify (str, colors) {
  let parts = rgbaRe.exec(str)

  while (parts) {
    let [replace, color, alpha] = parts

    if (has(color, colors)) {
      color = colors[color]
    }

    const newStr = Color(color).alpha(Number(alpha)).rgbaString()
    str = str.replace(replace, newStr)
    parts = rgbaRe.exec(str)
  }

  return str
}

/**
 * createEvent
 *
 * Cross-browser way to create events
 */

function createEvent (type, bubbles) {
  try {
    return new FocusEvent(type, {bubbles})
  } catch (err) {
    const e = document.createEvent('CustomEvent')
    e.initCustomEvent(type, bubbles, true, {})
    return e
  }
}

/**
 * Exports
 */

export {
  scaleSetter,
  positionSetter,
  boolSetter,
  borderSetter,

  autoprefix,
  setupStylePrefixer,

  setScaled,
  flexify,
  highlight,
  getThemeProps,
  mergeTheme,
  classes,
  rgbaify,
  createEvent
}
