/**
 * Imports
 */

import defaultTheme from '../default-theme'
import inputAttrs from '@f/input-attrs'
import element from 'vdux/element'
import Block from './block'
import omit from '@f/omit'
import pick from '@f/pick'
import Base from './Base'
import Text from './text'

/**
 * Constants
 */

const themeProps = ['colors', 'scale']
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
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

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
