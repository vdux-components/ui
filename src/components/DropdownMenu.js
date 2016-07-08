/**
 * Imports
 */

import Document from 'vdux/Document'
import element from 'vdux/element'
import {classes} from '../util'
import noop from '@f/noop'
import Menu from './Menu'

/**
 * Dropdown container component
 */

function render ({props, children}) {
  const {onDismiss = noop, left, top, open, ...restProps} = props

  return (
    <Menu
      boxSizing='border-box'
      boxShadow='menu'
      rounded
      py='s'
      absolute={{
        left: left ? 0 : 'auto',
        right: left ? 'auto' : 0,
        top: top ? 'auto' : '100%',
        bottom: top ? '100%' : 'auto'
      }}
      bgColor='white'
      color='text'
      column={true}
      hide={!open}
      {...restProps}
      class={classes(props.class, 'vui-dropdown-menu')}>
      {children}
      {
        open && <Document onClick={onDismiss} onKeypress={{esc: onDismiss}} />
      }
    </Menu>
  )
}

/**
 * Exports
 */

export default {
  render
}
