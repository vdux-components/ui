/**
 * Imports
 */

import Base from './base'
import omit from '@f/omit'
import element from 'vdux/element'

/**
 * Filter props
 */

const filterProps = omit([
  'auto',
  'flex',
  'col'
])

/**
 * Flexbox cell component
 */

function render ({props, children}) {
  return (
    <Base baseStyle={getStyle(props)} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({auto, flex, col}) {
  const result = {}

  if (auto) result.flex = '1 1 auto'
  if (flex) result.display = 'flex'
  if (col) result.width = result.flexBasis = (col / 12 * 100) + '%'

  return result
}

/**
 * Exports
 */

export default {
  render
}
