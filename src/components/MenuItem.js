/**
 * Imports
 */

import {component, element} from 'vdux'
import {classes} from '../util'
import Block from './Block'

/**
 * <MenuItem/>
 */

export default component({
  render ({props, children}) {
    const {color = 'text', bgColor = 'white', ...rest} = props

    return (
      <Block
        px='m'
        py='s'
        pointer
        m={0}
        textDecoration='none'
        {...rest}
        color={color}
        bgColor={bgColor}
        class={classes(props.class, 'vui-menu-item')}>
        {props.text || children}
      </Block>
    )
  }
})
