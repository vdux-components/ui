/**
 * Imports
 */

import element from 'vdux/element'
import ErrorTip from './ErrorTip'
import {classes} from '../util'
import Block from './Block'
import Icon from './Icon'
import Base from './Base'

/**
 * <Textarea/> component
 */

function render ({props, children}) {
  const {onBlur, onFocus, errorPlacement, message, invalid, label, icon, ...rest} = props

  return (
    <Block
      tag='label'
      overflow='visible'
      onFocus={[onFocus, stopEvent]}
      onBlur={[onBlur, stopEvent]}
      class='vui-input-container'>
      <Base tag='span'>
        {label || children}
      </Base>
      <Icon name={icon} hide={!icon} fs='s' lh='inherit' />
      <Base
        tag='textarea'
        onBlur={handleEvent}
        onFocus={handleEvent}
        outline='none'
        boxSizing='border-box'
        fontFamily='inherit'
        display='block'
        wide
        m={0}
        color='inherit'
        fs='inherit'
        type='text'
        {...rest}
        class={classes(props.class, 'vui-textarea')}/>
        {
          message && <ErrorTip placement={errorPlacement} show={invalid} message={message} />
        }
    </Block>
  )
}

/**
 * Event simulation
 */

function handleEvent (e) {
  if (!e.bubbles) {
    e.target.dispatchEvent(new FocusEvent(e.type, {bubbles: true}))
  }
}

function stopEvent (e) {
  e.stopPropagation()
  e._rawEvent.stopPropagation()
}

/**
 * Exports
 */

export default {
  render
}
