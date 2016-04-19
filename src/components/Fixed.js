/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Fixed position container
 */

function render ({props, children}) {
  return (
    <Base
      fixed
      {...props}
      class={classes(props.class, 'vui-fixed')}>
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
