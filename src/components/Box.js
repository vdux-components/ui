/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Box/> - Flexbox cell component
 */

export default component({
  render ({props, children}) {
    return (
      <Base {...props} class={classes(props.class, 'vui-box')}>
        {children}
      </Base>
    )
  }
})
