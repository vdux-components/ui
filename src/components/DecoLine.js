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
  return <Base
    borderTop='rgba(0, 0, 0, 0.2)'
    borderBottom='rgba(255, 255, 255, 0.2)'
    {...props}
    class={classes(props.class, 'vui-deco-line')} />
}

/**
 * Exports
 */

export default {
  render
}
