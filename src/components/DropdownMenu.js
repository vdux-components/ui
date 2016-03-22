/**
 * Imports
 */

import element from 'vdux/element'
import Body from 'vdux/body'
import noop from '@f/noop'
import omit from '@f/omit'
import Menu from './menu'

/**
 * Constants
 */

const filterProps = omit(['onDismiss', 'column', 'open'])

/**
 * Dropdown container component
 */

function render ({props, children}) {
  const {column = true, open, onDismiss = noop} = props

  return (
    <Menu class={[props.class, 'vui-dropdown-menu']} {...filterProps(props)} column={column} baseStyle={getStyle(props)}>
      {children}
      {
        open && <Body onClick={onDismiss} onKeypress={{esc: onDismiss}} />
      }
    </Menu>
  )
}

/**
 * Compute style
 */

function getStyle ({open, top, right}) {
  return {
    position: 'absolute',
    boxSizing: 'border-box',
    display : open ? '' : 'none',
    left: right ? 'auto' : 0,
    right: right ? 0 : 'auto',
    top: top ? 'auto' : '100%',
    bottom: top ? '100%' : 'auto'
  }
}

/**
 * Exports
 */

export default {
  render
}
