/**
 * Imports
 */

import Base from './Base'
import omit from '@f/omit'
import element from 'vdux/element'

/**
 * Filter props
 */

const filterProps = omit([
  'flex'
])

/**
 * Flexbox cell component
 */

function render ({props, children}) {
  return (
    <Base class={[props.class, 'vui-box']} baseStyle={getStyle(props)} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({flex}) {
  const result = {}

  if (flex) {
    if (flex === true) flex = 'auto'
    result.flex = `1 1 ${flex}`
  }

  return result
}

/**
 * Exports
 */

export default {
  render
}
