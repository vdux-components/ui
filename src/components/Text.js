/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Text
 */

function render ({props, children}) {
  return (
    <Base
      tag='span'
      {...props}
      class={classes(props.class, 'vui-text')}>
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
