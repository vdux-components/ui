/**
 * Imports
 */

import {component, element} from 'vdux'
import Base from './Base'

/**
 * <Flex/>
 */

export default component({
  render ({props, children}) {
    let cls = ['vui-flex', props.column ? 'vui-flex-column' : 'vui-flex-row']

    if (props.class) {
      if (Array.isArray(props.class)) cls = cls.concat(props.class)
      else cls.push(props.class)
    }

    return (
      <Base display='flex' {...props} class={cls}>
        {children}
      </Base>
    )
  }
})
