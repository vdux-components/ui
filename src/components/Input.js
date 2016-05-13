/**
 * Imports
 */

import inputAttrs from '@f/input-attrs'
import element from 'vdux/element'
import {classes} from '../util'
import Tooltip from './Tooltip'
import Block from './Block'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './Base'
import Text from './Text'
import Icon from './Icon'

/**
 * Constants
 */

const inputPropNames = [
  'invalid',
  'type',
  'name',
  'inputProps',
  'onInvalid',
  'defaultValue',
  'defaultChecked'
].concat(inputAttrs)
const filterProps = omit(inputPropNames)

/**
 * Input component
 */

function render ({props, children}) {
  const {
    message, name, label, labelClass,
    labelProps = {}, inputClass, inputProps = {},
    invalid, border, errorPlacement = 'left', icon
  } = props
  const filteredProps = filterProps(props)
  const restInputAttrs = pick(inputPropNames, props)

  return (
    <Block
      tag='label'
      align='start center'
      mb='s'
      overflow='visible'
      onFocus={[props.onFocus, stopEvent]}
      onBlur={[props.onBlur, stopEvent]}
      color={invalid ? 'error' : null}
      {...filteredProps}
      class={classes(props.class, 'vui-input-container')}>
      <Base tag='label' for={name} class={classes(labelClass, 'vui-label')} {...labelProps}>
        {label || children}
      </Base>
      <Icon name={icon} hide={!icon} fs='s' lh='inherit'/>
      <Base
        tag='input'
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
        border={inputProps.border && (invalid ? 'error' : 'border')}
        {...restInputAttrs}
        {...inputProps}
        class={classes(inputClass, 'vui-input')}/>
        {
          message && <Tooltip fs='xxs' p='0px 20px' lh='30px' placement={errorPlacement} show={invalid} bgColor='error' space={10}>{message}</Tooltip>
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
