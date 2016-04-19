/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Flexbox cell component
 */

function render ({props, children}) {
  return (
    <Base {...props} class={classes(props.class, 'vui-box')}>
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
