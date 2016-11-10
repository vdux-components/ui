/**
 * Imports
 */

import {component, element} from 'vdux'
import Flex from './Flex'
import Base from './Base'

/**
 * <Radio/>
 */

export default component({
  render ({props, children}) {
    const {
      name, label = children, checked, disabled,
      value, onChange, btn: Btn = RadioUi,
      uiProps = {}, ...rest
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
})

/**
 * <RadioUi/>
 */

function RadioUi ({props}) {
  const {checked, label} = props

  return (
    <Flex align='start center'>
      <Flex circle align='center center' sq={16} border borderColor={checked ? 'green' : '#bbb' } bgColor={checked ? 'green' : 'white'} mr='s' />
      {label}
    </Flex>
  )
}
