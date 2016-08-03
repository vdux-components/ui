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
      transform={`translate3d(0, ${entering || leaving ? '-105% ' : '12px'}, 0)`}
      transition='transform .3s cubic-bezier(0.55, 0, 0.55, 0.2)'
      class={classes(props.class, 'vui-toast')}
      onTransitionEnd={leaving && didLeave}
      minHeight='46px'
      bgColor='white'
      boxShadow='z3'
      z='overlay'
      fw='normal'
      w='400px'
      mx='auto'
      rounded
      fixed
      right
      left
      top
      {...rest}>
      <Icon
        border='2px solid white'
        boxShadow='z2'
        name='close'
        hide={!onDismiss}
        circle='27'
        pointer
        fs='s'
        textAlign='center'
        onClick={onDismiss}
        absolute={{top: -15, right: -15}}
        bgColor='black'
        color='white' />
      <Block m={9}>
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
