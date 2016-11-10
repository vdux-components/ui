/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Divider/>
 */

export default component({
  render ({props}) {
    return (
      <Base
        tag='hr'
        bgColor={props.color || 'divider'}
        borderWidth='0'
        h='1'
        {...props}
        class={classes(props.class, 'vui-divider')} />
    )
  }
})
