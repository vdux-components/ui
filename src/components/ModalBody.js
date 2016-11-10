/**
 * Imports
 */

import {component, element} from 'vdux'
import Base from './Base'

/**
 * <ModalBody/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='div' wide bgColor='white' px='70px' {...props}>
        {children}
      </Base>
    )
  }
})
