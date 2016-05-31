/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * <Table/> component
 */

function render ({props, children}) {
  return (
    <Base tag='table' {...props} class={classes(props.class, 'vui-table')}>
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
