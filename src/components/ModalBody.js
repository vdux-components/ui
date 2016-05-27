/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * <ModalBody/> component
 */

function render ({props, children}) {
  return (
    <Base tag='div' wide bgColor='white' px='70px' {...props}>
      {children}
    </Base>
  )
}

/**
 * Exports
 */

export default {
  render
}
