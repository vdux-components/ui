/**
 * Imports
 */

import {decodeRaw, component, element} from 'vdux'
import Overlay from './Overlay'
import noop from '@f/noop'
import Base from './Base'

/**
 * <Overlay/>
 */

export default component({
  render ({props, children, actions}) {
    const {dismissOnClick = true, dismissOnEsc = true, onDismiss = noop, overlayProps, ...rest} = props

    return (
      <Overlay overflowY='auto' onClick={dismissOnClick && decodeRaw(actions.maybeDismiss)} onKeyup={{esc: dismissOnEsc && onDismiss}} {...overlayProps}>
        <Base tag='div' bgColor='white' w={520} boxShadow='card' margin='50px auto 0' {...rest}>
          {children}
        </Base>
      </Overlay>
    )
  },

  controller: {
    * maybeDismiss ({props}, e) {
      const {onDismiss = noop} = props

      if (e.target === e.currentTarget) {
        yield onDismiss()
      }
    }
  }
})
