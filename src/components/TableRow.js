/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <TableRow/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='tr' {...props} class={classes(props.class, 'vui-table-row')}>
        {children}
      </Base>
    )
  }
})
