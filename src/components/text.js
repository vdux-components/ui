/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import {setScaled} from '../util'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './Base'

/**
 * Constants
 */

const themeProps = ['fonts', 'fontScale', 'weightScale', 'lineHeightScale']
const filterProps = omit([
  'tag',
  'size',
  'font',
  'bold',
  'font',
  '$theme',
  'weight',
  'italic',
  'transform',
  'antialiased',
  'letterSpacing'
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
 * Text
 */

function render ({props, children}) {
  const {tag = 'span', $theme} = props

  return (
    <Base tag={tag} class={[props.class, 'vui-text']} baseStyle={getStyle(props, $theme)} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle (props, theme) {
  const {fonts, weightScale, lineHeightScale} = theme
  const {italic, bold, weight, transform, letterSpacing, font, lh, center, left, right, antialiased} = props
  const result = {}

  if (italic) result.fontStyle = 'italic'
  if (transform) result.textTransform = transform
  if (bold) result.fontWeight = theme.bold || 'bold'
  if (antialiased) result['-webkit-font-smoothing'] = 'antialiased'
  if (letterSpacing) result.letterSpacing = letterSpacing

  setScaled(result, 'fontFamily', font, fonts)
  setScaled(result, 'fontWeight', weight, weightScale)
  setScaled(result, 'lineHeight', lh, lineHeightScale)

  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
