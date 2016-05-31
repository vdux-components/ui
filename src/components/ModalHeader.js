/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * <ModalHeader/> component
 */

function render ({props, children}) {
  return (
    <Base pt='xl' pb='l' fs='m' fw='200' color='blue' textAlign='center' {...props}>
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
