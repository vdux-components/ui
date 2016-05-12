/**
 * Imports
 */

import element from 'vdux/element'
import Overlay from './Overlay'
import Flex from './Flex'
import Base from './Base'

/**
 * <Overlay/> component
 */

function render ({props, children}) {
  const {dismissOnClick = true, dismissOnEsc = true, onDismiss, ...rest} = props

  return (
    <Overlay onClick={dismissOnClick && onDismiss} onKeypress={{esc: dismissOnEsc && onDismiss}}>
      <Flex wide tall align='center center'>
        <Base onClick={e => e.stopPropagation()} tag='div' bgColor='white' w={520} {...rest} boxShadow='card'>
          {children}
        </Base>
      </Flex>
    </Overlay>
  )
}

/**
 * Exports
 */

export default {
  render
}
