/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './base'

/**
 * Prop filtering
 */

const themeProps = ['scale']
const filterProps = omit([
  'gutter',
  'column',
  '$theme',
  'align',
  'wrap',
  'flex'
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
 * Flex container component
 */

function render ({props, children}) {
  const {gutter, $theme, column} = props
  const {scale} = $theme
  const extras = {}

  if (gutter) {
    extras.mx = -(scale && scale[gutter] ? scale[gutter] : gutter)
  }

  return (
    <Base class={[props.class, 'vui-flex', column ? 'vui-flex-column' : 'vui-flex-row']} baseStyle={getStyle(props)} {...extras} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({align, column, wrap, flex}) {
  const result = {display: 'flex'}

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
