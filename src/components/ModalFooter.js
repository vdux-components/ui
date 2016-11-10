/**
 * Imports
 */

import {component, element} from 'vdux'
import Base from './Base'

/**
 * <ModalFooter/>
 */

export default component({
  render ({props, children}) {
    return (
      <Base tag='div' wide color='#939597' bgColor='grey' align='end center' p mt {...props}>
        {children}
      </Base>
    )
  }
})
