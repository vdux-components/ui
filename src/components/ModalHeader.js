/**
 * Imports
 */

import {component, element} from 'vdux'
import Base from './Base'

/**
 * <ModalHeader/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base pt='xl' pb='l' fs='m' fw='200' color='blue' textAlign='center' {...props}>
        {children}
      </Base>
    )
  }
})
