/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Block from './Block'
import Icon from './Icon'

/**
 * <Toast/>
 */

export default component({
  onCreate ({props}) {
    return props.$transition.didEnter()
  },

  render ({props, children}) {
    const {$transition = {}, onDismiss, ...rest} = props
    const {entering, leaving, didLeave} = $transition

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
          absolute={{top: -9, right: -9}}
          border='2px solid white'
          align='center center'
          onClick={onDismiss}
          hide={!onDismiss}
          bgColor='black'
          boxShadow='z2'
          circle='21px'
          color='white'
          name='close'
          pointer
          fs='xs' />
        <Block m='10px 12px' bold>
          {children}
        </Block>
      </Block>
    )
  }
})
