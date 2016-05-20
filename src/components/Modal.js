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
  const {dismissOnClick = true, dismissOnEsc = true, onDismiss, overlayProps, ...rest} = props

  return (
    <Overlay onClick={dismissOnClick && onDismiss} onKeypress={{esc: dismissOnEsc && onDismiss}} {...overlayProps}>
      <Base onClick={e => e.stopPropagation()} tag='div' bgColor='white' w={520} boxShadow='card' margin='50px auto 0' {...rest}>
        {children}
      </Base>
    </Overlay>
  )
}

/**
 * Exports
 */

export default {
  render
}
