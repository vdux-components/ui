/**
 * Imports
 */

import {classes, createEvent} from '../util'
import {findDOMNode} from 'vdux/dom'
import element from 'vdux/element'
import ErrorTip from './ErrorTip'
import Block from './Block'
import Icon from './Icon'
import Base from './Base'

/**
 * onCreate
 */

function onCreate (model) {
  if (typeof window !== 'undefined' && model.props.defaultValue) {
    return () => {
      setTimeout(() => {
        // Emulate the defaultValue prop for browsers that don't support
        // it on Textareas
        const node = findDOMNode(model)
        if (node) {
          const ta = node.querySelector('textarea')
          if (ta) ta.value = model.props.defaultValue
        }
      })
    }
  }
}

function onUpdate (prev, next) {
  if (typeof window !== 'undefined' && prev.props.defaultValue !== next.props.defaultValue) {
    return () => {
      setTimeout(() => {
        const node = findDOMNode(next)
        if (node) {
          const ta = node.querySelector('textarea')
          if (ta && !ta.__dirty) {
            ta.value = next.props.defaultValue
          }
        }
      })
    }
  }
}

/**
 * <Textarea/> component
 */

function render ({props, children}) {
  const {onBlur, onFocus, errorPlacement, onInput, message, invalid, label, icon, ...rest} = props

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
        onInput={handleInput}
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

  function handleInput (e) {
    // *sigh*, we have to do this because IE11 likes to submit
    // input events when the placeholder is set, or when the
    // element is focused.
    //
    // http://stackoverflow.com/questions/21406138/input-event-triggered-on-internet-explorer-when-placeholder-changed
    if (onInput && e.target === document.activeElement) {
      e.target.__dirty = true
      return runHandler(onInput, e)
    }
  }
}

/**
 * Event simulation
 */

function handleEvent (e) {
  if (!e.bubbles) {
    const newEvent = createEvent(e.type, true)
    e.target.dispatchEvent(newEvent)
  }
}

function stopEvent (e) {
  e.stopPropagation()
  e._rawEvent.stopPropagation()
}

function runHandler (handler = () => {}, e) {
  return Array.isArray(handler)
    ? handler.map(handler => runHandler(handler, e))
    : handler(e)
}

/**
 * Exports
 */

export default {
  onCreate,
  onUpdate,
  render
}
