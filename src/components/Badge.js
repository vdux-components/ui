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
    const {size = 24} = props

    return (
      <Base tag='div' class={classes(props.class, 'vui-badge')} circle={size} bgColor='grey_medium' align='center center' color='white' {...props}>
        {children}
      </Base>
    )
  }
})
