/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Table/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='table' {...props} class={classes(props.class, 'vui-table')}>
        {children}
      </Base>
    )
  }
})
