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
 * Block
 */

function render ({props, children}) {
  const {
    name, label, checked, disabled,
    checkedValue, onChange, ...rest
  } = props

  return (
    <Flex tag='label' {...rest} align='start center'>
      <Base
        tag='input'
        type='checkbox'
        hide
        name={name}
        checkedValue={checkedValue}
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
      <Flex rounded align='center center' sq={16} border borderColor={checked ? 'green' : '#bbb' } bgColor={checked ? 'green' : 'white'} mr='s'>
        <Icon fs={11} hide={!checked} color='white' name='check' />
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
