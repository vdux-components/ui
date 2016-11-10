/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Block/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='div' {...props} class={classes(props.class, 'vui-block')}>
        {children}
      </Base>
    )
  }
})
