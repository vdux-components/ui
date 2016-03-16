/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import Block from './block'
import omit from '@f/omit'
import pick from '@f/pick'
import Base from './base'
import Text from './text'

/**
 * Constants
 */

const themeProps = ['colors', 'scale']
const filterProps = omit([
  'invalid',
  'label',
  'type',
  'name',
  'rounded',
  'inverted',
  'bgColor',
  'theme',
  'classes',
  'containerStyle',
  'labelStyle',
  'border',
])

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

function render ({props}) {
  const {label, type = 'text', name, theme, rounded, inverted, bgColor, $theme, message, classes = {}, containerStyle, containerProps = {}, labelStyle} = props
  const filteredProps = filterProps(props)

  return (
    <Block class={['input-container', classes.container]} baseStyle={getRootStyle(props, $theme)} style={containerStyle} {...containerProps}>
      <label for={name} class={['label', classes.label]} style={labelStyle}>
        {label}
      </label>
      <Base
        tag='input'
        type={type}
        class={['input', classes.input]}
        baseStyle={getStyle(props, props.$theme)}
        name={name}
        rounded={rounded}
        inverted={inverted}
        theme={theme}
        bgColor={bgColor}
        {...filteredProps}
        />
        {
          message && <Text fs={1}>{message}</Text>
        }
    </Block>
  )
}

/**
 * getRootStyle(props, $theme) -> Style object
 */

function getRootStyle ({invalid}, {scale, colors}) {
  return {
    marginBottom: scale[2],
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
