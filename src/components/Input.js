/**
 * Imports
 */

import {decodeRaw, component, element} from 'vdux'
import {classes, createEvent} from '../util'
import inputAttrs from '@f/input-attrs'
import ErrorTip from './ErrorTip'
import Block from './Block'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './Base'
import Icon from './Icon'

/**
 * <Input/>
 */

export default component({
  render ({props, children, actions}) {
    const {
      message, name, label, labelClass,
      labelProps = {}, inputClass, inputProps = {},
      invalid, errorPlacement = 'left', icon
    } = props
    const filteredProps = filterProps(props)
    const restInputAttrs = pick(inputPropNames, props)
    const hasLabel = !!(label || children.length)

    return (
      <Block
        tag='label'
        align='start center'
        mb='s'
        relative
        overflow='visible'
        onFocus={[props.onFocus, decodeRaw(actions.stopEvent)]}
        onBlur={[props.onBlur, decodeRaw(actions.stopEvent)]}
        color={invalid ? 'error' : null}
        {...filteredProps}
        class={classes(props.class, 'vui-input-container')}>
        {
          hasLabel && (
            <Base tag='label' for={name} class={classes(labelClass, 'vui-label')} {...labelProps}>
              {label || children}
            </Base>
          )
        }
        {icon && <Icon name={icon} fs='s' lh='inherit'/>}
        <Base
          tag='input'
          onBlur={decodeRaw(actions.handleEvent)}
          onFocus={decodeRaw(actions.handleEvent)}
          outline='none'
          boxSizing='border-box'
          fontFamily='inherit'
          display='block'
          wide
          m={0}
          color='inherit'
          fs='inherit'
          type='text'
          border={inputProps.border && (invalid ? 'error' : 'border')}
          {...restInputAttrs}
          {...inputProps}
          class={classes(inputClass, 'vui-input')} />
        {
          message && <ErrorTip placement={errorPlacement} show={invalid} message={message} />
        }
      </Block>
    )
  },

  controller: {
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

/**
 * Constants
 */

const inputPropNames = [
  'tag',
  'invalid',
  'type',
  'name',
  'inputProps',
  'onInvalid',
  'defaultValue',
  'defaultChecked'
].concat(inputAttrs)
const filterProps = omit(inputPropNames)
