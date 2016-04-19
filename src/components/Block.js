/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Block
 */

function render ({props, children}) {
  return (
    <Base tag='div' {...props} class={classes(props.class, 'vui-block')}>
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
