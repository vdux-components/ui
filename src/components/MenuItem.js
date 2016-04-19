/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Block from './Block'

/**
 * getProps
 */

function getProps (props) {
  if (!props.color) props.color = 'text'
  if (!props.bgColor) props.bgColor = 'white'

  return props
}

/**
 * MenuItem
 */

function render ({props, children}) {
  return (
    <Block
      px='m'
      py='s'
      pointer
      m={0}
      textDecoration='none'
      {...props}
      class={classes(props.class, 'vui-menu-item')}>
      {props.text || children}
    </Block>
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
