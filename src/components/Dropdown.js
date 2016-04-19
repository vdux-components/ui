/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Dropdown container component
 */

function render ({props, children}) {
  return (
    <Base
      relative
      {...props}
      class={classes(props.class, 'vui-dropdown')}>
      {children}
    </Base>
  )
}

/**
 * Exports
 */

export default {
  render
}
