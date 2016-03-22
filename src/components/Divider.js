/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './Base'

/**
 * Filter props
 */

const themeProps = ['colors']
const filterProps = omit([
  'color'
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
 * Divider component
 */

function render ({props, children}) {
  const {$theme, color = 'divider'} = props
  const {colors} = $theme

  return (
    <Base tag='hr' bgColor={colors[color] || color} class={[props.class, 'vui-divider']} {...filterProps(props)} />
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
