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
    name, label, checked, disabled,
    checkedValue, onChange, ...rest,
    btn: Btn = CheckboxUi, uiProps = {},
    checkProps = {}
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
        <Btn checked={checked} label={label} checkProps={checkProps} {...uiProps} />
    </Flex>
  )
}

function CheckboxUi ({props}) {
  const {checked, label, checkProps, ...rest} = props

  return (
    <Flex align='start center' {...rest}>
      <Flex rounded align='center center' fs={11} sq={16} border borderColor={checked ? 'green' : '#bbb' } bgColor={checked ? 'green' : 'white'} {...checkProps}>
        <Icon fs='inherit' hide={!checked} color='white' name='check' />
      </Flex>
      {
        // Put space in the middle so the order can
        // be reversed while maintaining proper spacing
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
