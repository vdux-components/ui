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
    checkedValue, onChange, ...rest,
    btn: Btn = CheckboxUi
  } = props

  return (
    <Base tag='label'>
      <Base
        tag='input'
        type='checkbox'
        hide
        name={name}
        checkedValue={checkedValue}
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
        <Btn checked={checked} label={label} { ...rest}/>
    </Base>
  )
}

function CheckboxUi ({props}) {
  const {checked, label, uiProps, ...rest} = props

  return (
    <Flex align='start center' {...rest}>
      <Flex rounded align='center center' sq={16} border borderColor={checked ? 'green' : '#bbb' } bgColor={checked ? 'green' : 'white'} {...uiProps}>
        <Icon fs={11} hide={!checked} color='white' name='check' />
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
