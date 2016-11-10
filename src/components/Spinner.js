/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Base from './Base'

/**
 * <Spinner/>
 */

export default component({
  render ({props, children, context}) {
    const {dark, ...rest} = props
    const spinnerAnimation = context.uiTheme.spinnerAnimation || {}

    return (
      <Base
        tag='div'
        circle='1em'
        bgColor={dark ? 'blue' : 'white'}
        animation={dark ? spinnerAnimation.dark : spinnerAnimation.light}
        {...rest}
        class={classes(props.class, 'vui-spinner')} />
    )
  }
})
