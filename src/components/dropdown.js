/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * Dropdown container component
 */

function render ({props, children}) {
  return (
    <Base {...props} class={[props.class, 'vui-dropdown']} baseStyle={{position: 'relative'}}>
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
