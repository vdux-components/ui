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
    <Base tag='div' wide color='#939597' bgColor='grey' align='end center' p mt {...props}>
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
