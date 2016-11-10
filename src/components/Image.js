/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Image/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='img' {...props} class={classes(props.class, 'vui-image')}/>
    )
  }
})
