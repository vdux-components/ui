/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableHeader/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='th' {...props} class={classes(props.class, 'vui-table-header')}>
        {children}
      </Base>
    )
  }
})
