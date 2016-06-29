/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Block from './Block'
import Icon from './Icon'

function onCreate ({props}) {
  return props.$transition.didEnter()
}

/**
 * <Toast/> component
 */

function render ({props, children}) {
  const {$transition = {}, onDismiss, ...rest} = props
  const {entering, leaving, didEnter, didLeave} = $transition

  return (
    <Block
      fixed
      rounded
      class={classes(props.class, 'vui-toast')}
      boxShadow='z3'
      z='overlay'
      bgColor='white'
      minHeight='48px'
      top='-24px'
      transform={`translateY(+${entering || leaving ? 0 : 48}px)`}
      onTransitionEnd={leaving && didLeave}
      transition='transform .25s ease-in'
      left='0px'
      right='0px'
      w='400px'
      mx='auto'
      {...rest}>
      <Icon
        border='2px solid white'
        name='close'
        hide={!onDismiss}
        circle
        pointer
        onClick={onDismiss}
        absolute={{top: -15, right: -15}}
        bgColor='black'
        color='white' />
      <Block m>
        {children}
      </Block>
    </Block>
  )
}

/**
 * Exports
 */

export default {
  onCreate,
  render
}
