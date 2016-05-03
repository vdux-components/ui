/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * <Overlay/> component
 */

function render ({props, children}) {
  return (
    <Base tag='div' bgColor='black' z='overlay' fixed opacity={0.5} wide tall {...props} class={props.class ? ['vui-overlay', props.class] : 'vui-overlay'}>
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
