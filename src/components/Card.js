/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Card/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base
        color='text'
        bgColor='white'
        boxShadow='card'
        {...props}
        class={classes(props.class, 'vui-card')}>
        {children}
      </Base>
    )
  }
})
