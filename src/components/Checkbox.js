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
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange} />
        <Btn checked={checked} indeterminate={indeterminate} label={label} checkProps={checkProps} {...uiProps} />
    </Flex>
  )
}

function CheckboxUi ({props}) {
  const {checked, label, indeterminate, checkProps, ...rest} = props
  const isGreen = checked || indeterminate

  return (
    <Flex align='start center' {...rest}>
      <Flex rounded align='center center' fs={11} sq={17} border borderColor={isGreen ? 'green' : '#bbb' } bgColor={isGreen ? 'green' : 'white'} {...checkProps} >
        {checked && <Icon fs='inherit' color='white' name='check' />}
        {!checked && indeterminate && <Icon fs='inherit' color='white' name='remove' />}
        {!checked && !indeterminate && <Icon fs='inherit' visibility='hidden' color='white' name='check' />}
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
