/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Block from './Block'
import Flex from './Flex'
import Icon from './Icon'
import Base from './Base'

/**
 * <Radio/>
 */

function render ({props, children}) {
  const {
    name, label, checked, disabled,
    value, onChange, ...rest,
    btn: Btn = RadioUi, uiProps = {}
  } = props

  return (
    <Flex tag='label' {...rest} align='start center'>
      <Base
        tag='input'
        type='radio'
        hide
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
        <Btn checked={checked} label={label} {...uiProps} />
    </Flex>
  )
}

function RadioUi ({props}) {
  const {checked, label} = props

  return (
    <Flex align='start center'>
      <Flex circle align='center center' sq={16} border borderColor={checked ? 'green' : '#bbb' } bgColor={checked ? 'green' : 'white'} mr='s'>
      </Flex>
      {label}
    </Flex>
  )
}

/**
 * Exports
 */

export default {
  render
}
