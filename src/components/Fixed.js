/**
 * Imports
 */

import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Prop filtering
 */

const filterProps = omit([
  'top',
  'right',
  'bottom',
  'left',
  'zIndex'
])

/**
 * Fixed position container
 */

function render ({props, children}) {
  return (
    <Base class={[props.class, 'vui-fixed']} baseStyle={getStyle(props)} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({top, right, bottom, left, zIndex}) {
  const result = {position: 'fixed'}

  if (top) result.top = 0
  if (right) result.right = 0
  if (bottom) result.bottom = 0
  if (left) result.left = 0

  return result
}

/**
 * Exports
 */

export default {
  render
}
