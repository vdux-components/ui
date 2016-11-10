/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Dropdown/> - container component for a dropdown menu
 */

export default component({
  render ({props, children}) {
    return (
      <Base
        relative
        {...props}
        class={classes(props.class, 'vui-dropdown')}>
        {children}
      </Base>
    )
  }
})
