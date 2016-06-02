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
 * <Checkbox/>
 */

function render ({props, children}) {
  const {
    name, label = children, checked, disabled,
    value, onChange, indeterminate, ...rest,
    btn: Btn = CheckboxUi, uiProps = {}
  } = props

  return (
    <Flex tag='label' {...rest} align='start center'>
      <Base
        tag='input'
        type='checkbox'
        hide
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
        <Btn checked={checked} indeterminate={indeterminate} label={label} {...uiProps} />
    </Flex>
  )
}

function CheckboxUi ({props}) {
  const {checked, label, indeterminate, ...rest} = props
  const isGreen = checked || indeterminate

  return (
    <Flex align='start center' {...rest}>
      <Flex rounded align='center center' sq={16} border borderColor={isGreen ? 'green' : '#bbb' } bgColor={isGreen ? 'green' : 'white'}>
        <Icon fs={11} hide={!checked} color='white' name='check' />
        <Icon fs={11} hide={checked || !indeterminate} color='white' name='remove' />
      </Flex>
      {
        // Put space in the middle so the order can
        // be reversed while still maintaining proper spacing
        label && <Block mr='s'/>
      }
      <Block>
        {label}
      </Block>
    </Flex>
  )
}

/**
 * Exports
 */

export default {
  render
}
