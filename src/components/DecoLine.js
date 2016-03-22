/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * Divider component
 */

function render ({props, children}) {
  return <Base class={[props.class, 'vui-deco-line']} baseStyle={{borderTop: '1px solid rgba(0, 0, 0, 0.2)', borderBottom: '1px solid rgba(255, 255, 255, 0.2)'}} {...props} />
}

/**
 * Exports
 */

export default {
  render
}
