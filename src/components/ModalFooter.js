/**
 * Imports
 */

import element from 'vdux/element'
import Base from './Base'

/**
 * <ModalFooter/> component
 */

function render ({props, children}) {
  return (
    <Base tag='div' wide color='#939597' h='25%' bgColor='grey' align='end center' pr {...props}>
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
