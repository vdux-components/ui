/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Image
 */

function render ({props, children}) {
  return (
    <Base tag='img' {...props} class={classes(props.class, 'vui-image')}/>
  )
}

/**
 * Exports
 */

export default {
  render
}
