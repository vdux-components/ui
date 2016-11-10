/**
 * Imports
 */

import {component, element} from 'vdux'
import Base from './Base'

/**
 * <Overlay/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='div' bgColor='rgba(1, 1, 1, 0.5)' z='overlay' fixed wide tall {...props} class={props.class ? ['vui-overlay', props.class] : 'vui-overlay'}>
        {children}
      </Base>
    )
  }
})
