/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import Body from 'vdux/body'
import noop from '@f/noop'
import omit from '@f/omit'
import Menu from './menu'

/**
 * Constants
 */

const getProps = getThemeProps(['menuShadow'])
const filterProps = omit(['onDismiss', 'column', 'open', 'bgColor', 'color'])

/**
 * Dropdown container component
 */

function render ({props, children}) {
  const {column = true, bgColor = 'white', color = 'text', open, onDismiss = noop} = props

  return (
    <Menu hide={!open} {...filterProps(props)} bgColor={bgColor} color={color} class={[props.class, 'vui-dropdown-menu']} column={column} baseStyle={getStyle(props)}>
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

function getStyle ({open, top, right, $theme}) {
  return {
    position: 'absolute',
    boxSizing: 'border-box',
    left: right ? 'auto' : 0,
    right: right ? 0 : 'auto',
    top: top ? 'auto' : '100%',
    bottom: top ? '100%' : 'auto',
    boxShadow: $theme.menuShadow
  }
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
