/**
 * Imports
 */

import {setScaled, getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Constants
 */

const getProps = getThemeProps(['fonts', 'fontScale', 'weightScale', 'lineHeightScale'])
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
 * Text
 */

function render ({props, children}) {
  const {tag = 'span', $theme} = props

  return (
    <Base tag={tag} baseStyle={getStyle(props, $theme)} {...filterProps(props)} class={[props.class, 'vui-text']}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle (props, theme) {
  const {fonts, weightScale, lineHeightScale} = theme
  const {italic, bold, weight, transform, letterSpacing, font, center, left, right, antialiased} = props
  const result = {}

  if (italic) result.fontStyle = 'italic'
  if (transform) result.textTransform = transform
  if (bold) result.fontWeight = theme.bold || 'bold'
  if (antialiased) result['-webkit-font-smoothing'] = 'antialiased'
  if (letterSpacing) result.letterSpacing = letterSpacing

  setScaled(result, 'fontFamily', font, fonts)
  setScaled(result, 'fontWeight', weight, weightScale)

  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
