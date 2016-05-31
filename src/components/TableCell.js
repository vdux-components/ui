/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableCell/> component
 */

function render ({props, children}) {
  return (
    <Base tag='td' {...props} class={classes(props.class, 'vui-table-cell')}>
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
