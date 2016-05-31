/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableRow/> component
 */

function render ({props, children}) {
  return (
    <Base tag='tr' {...props} class={classes(props.class, 'vui-table-row')}>
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
