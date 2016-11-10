/**
 * Imports
 */

import {component, decodeRaw, findDOMNode, element} from 'vdux'
import {classes, createEvent} from '../util'
import eventHandler from '@f/event-handler'
import ErrorTip from './ErrorTip'
import Block from './Block'
import Icon from './Icon'
import Base from './Base'

/**
 * <Textarea/>
 */

export default component({
  onCreate (model) {
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
  },

  onUpdate (prev, next) {
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
  },

  render ({props, children, actions}) {
    const {onBlur, onFocus, errorPlacement, message, invalid, label, icon, ...rest} = props

    return (
      <Block
        tag='label'
        overflow='visible'
        onFocus={[onFocus, decodeRaw(actions.stopEvent)]}
        onBlur={[onBlur, decodeRaw(actions.stopEvent)]}
        class='vui-input-container'>
        <Base tag='span'>
          {label || children}
        </Base>
        <Icon name={icon} hide={!icon} fs='s' lh='inherit' />
        <Base
          tag='textarea'
          onBlur={decodeRaw(actions.handleEvent)}
          onFocus={decodeRaw(actions.handleEvent)}
          onInput={decodeRaw(actions.handleInput)}
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
          class={classes(props.class, 'vui-textarea')} />
        {
          message && <ErrorTip placement={errorPlacement} show={invalid} message={message} />
        }
      </Block>
    )
  },

  controller: {
    handleInput ({props}, e) {
      const {onInput} = props

      // *sigh*, we have to do this because IE11 likes to submit
      // input events when the placeholder is set, or when the
      // element is focused.
      //
      // http://stackoverflow.com/questions/21406138/input-event-triggered-on-internet-explorer-when-placeholder-changed
      if (onInput && e.target === document.activeElement) {
        e.target.__dirty = true
        return eventHandler(onInput)(e)
      }
    },

    handleEvent (model, e) {
      if (!e.bubbles) {
        const newEvent = createEvent(e.type, true)
        e.target.dispatchEvent(newEvent)
      }
    },

    stopEvent (model, e) {
      e.stopPropagation()
      e._rawEvent.stopPropagation()
    }
  }
})
