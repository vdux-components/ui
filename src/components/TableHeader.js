/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableHeader/> component
 */

function render ({props, children}) {
  return (
    <Base tag='th' {...props} class={classes(props.class, 'vui-table-header')}>
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
