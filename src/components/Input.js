/**
 * Imports
 */

import {getThemeProps} from '../util'
import inputAttrs from '@f/input-attrs'
import element from 'vdux/element'
import Block from './block'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './Base'
import Text from './text'

/**
 * Constants
 */

const getProps = getThemeProps(['colors', 'scale'])
const inputProps = [
  'invalid',
  'label',
  'type',
  'name',
  'rounded',
  'inverted',
  'bgColor',
  'theme',
  'labelStyle',
  'border'
].concat(inputAttrs)
const filterProps = omit(inputProps)

/**
 * Input component
 */

function render ({props, children}) {
  const {label, type = 'text', $theme, message, name, labelClass, inputClass, labelStyle, inputStyle = {}} = props
  const filteredProps = filterProps(props)
  const restInputAttrs = pick(inputProps, props)

  return (
    <Block baseStyle={getRootStyle(props, $theme)} class={[props.class, 'vui-input-container']} {...filteredProps}>
      <label for={name} class={['label', labelClass]} style={labelStyle}>
        {label || children}
      </label>
      <Base
        tag='input'
        {...restInputAttrs}
        baseStyle={getStyle(props, props.$theme)}
        style={inputStyle}
        class={['vui-input', inputClass]}
        type={type}
        />
        {
          message && <Text fs='s'>{message}</Text>
        }
    </Block>
  )
}

/**
 * getRootStyle(props, $theme) -> Style object
 */

function getRootStyle ({invalid}, {scale, colors}) {
  return {
    marginBottom: scale.s,
    position: 'relative',
    color: invalid ? colors.error : null
  }
}

/**
 * getStyle(props, $theme) -> Style object
 */

function getStyle ({invalid, border}, {scale, colors}) {
  const result = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
    margin: 0,
    color: 'inherit'
  }

  if (border) {
    result.borderWidth = 1
    result.borderStyle = 'solid'
    result.borderColor = invalid ? colors.error : colors.border
  }

  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
