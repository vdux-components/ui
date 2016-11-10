/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableCell/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='td' {...props} class={classes(props.class, 'vui-table-cell')}>
        {children}
      </Base>
    )
  }
})
