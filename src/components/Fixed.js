/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * Fixed position container
 */

export default component({
  render ({props, children}) {
    return (
      <Base
        fixed
        {...props}
        class={classes(props.class, 'vui-fixed')}>
        {children}
      </Base>
    )
  }
})
