/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Divider component
 */

function render ({props}) {
  return (
    <Base
      tag='hr'
      bgColor={props.color || 'divider'}
      {...props}
      class={classes(props.class, 'vui-divider')} />
  )
}

/**
 * Exports
 */

export default {
  render
}
