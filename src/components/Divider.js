/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Filter props
 */

const getProps = getThemeProps(['colors'])
const filterProps = omit([
  'color'
])

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
