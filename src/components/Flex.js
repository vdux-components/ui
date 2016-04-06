/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Prop filtering
 */

const getProps = getThemeProps(['scale'])
const filterProps = omit([
  'baseStyle',
  'gutter',
  'column',
  '$theme',
  'class',
  'align',
  'wrap',
  'flex'
])

/**
 * Flex container component
 */

function render ({props, children}) {
  const {gutter, $theme, column, baseStyle = {}} = props
  const {scale} = $theme
  const extras = {}

  if (gutter) {
    extras.mx = -(scale && scale[gutter] ? scale[gutter] : gutter)
  }

  return (
    <Base {...filterProps(props)} class={[props.class, 'vui-flex', column ? 'vui-flex-column' : 'vui-flex-row']} baseStyle={{...getStyle(props), ...baseStyle}} {...extras}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({align, column, wrap, flex}) {
  const result = {
    display: 'flex'
  }

  if (align) {
    const [justify, alignItems] = align.split(' ')
    if (justify) result.justifyContent = flexify(justify)
    if (align) result.alignItems = flexify(alignItems)
  }

  if (column) result.flexDirection = 'column'
  if (wrap) result.flexWrap = 'wrap'
  if (flex) {
    if (flex === true) flex = 'auto'
    result.flex = `1 1 ${flex}`
  }

  return result
}

function flexify (str) {
  return str === 'start' || str === 'end'
    ? 'flex-' + str
    : str
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
