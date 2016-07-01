/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * getProps
 */

function getProps (props, context) {
  props.$spinnerAnimation = context.uiTheme.spinnerAnimation
  return props
}

/**
 * Spinner
 */

function render ({props, children}) {
  const {$spinnerAnimation, dark, ...rest} = props

  return (
    <Base
      tag='div'
      circle='1em'
      bgColor={dark ? 'blue' : 'white'}
      animation={dark ? $spinnerAnimation.dark : $spinnerAnimation.light}
      {...rest}
      class={classes(props.class, 'vui-spinner')} />
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
