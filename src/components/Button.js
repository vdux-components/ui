/**
 * Imports
 */

import defaultTheme from '../default-theme'
import {highlightColor} from '../util'
import element from 'vdux/element'
import Block from './Block'
import pick from '@f/pick'
import omit from '@f/omit'
import Icon from './icon'

/**
 * Constants
 */

const themeProps = ['scale', 'colors']
const filterProps = omit(['bgColor', 'color', 'inverted', 'type', 'text', 'noselect', 'highlight'])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

/**
 * Button
 */

function render ({props, children}) {
  const {$theme, type = 'button', inverted = true, icon, highlight} = props
  const {scale = {}, colors = {}} = $theme
  let {text, color = 'white', bgColor = 'primary', hovering} = props

  if (icon) {
    text = <Icon baseStyle={{fontSize: 'inherit'}} name={icon} />
    bgColor = 'transparent'
  }

  return (
    <Block
      tag='button'
      class={[props.class, 'vui-button']}
      baseStyle={getStyle(props)}
      color={color}
      bgColor={highlight ? highlightColor(bgColor, colors) : bgColor}
      type={type}
      inverted={inverted}
      pointer
      {...filterProps(props)}>
      {text || children}
    </Block>
  )
}

/**
 * Compute base styles
 */

function getStyle ({icon, noselect}) {
  return {
    position: 'relative',
    overflow: 'visible',
    cursor: 'pointer',
    textAlign: 'center',
    padding: icon ? 0 : null,
    margin: 0,
    border: 0,
    userSelect: noselect ? 'none' : null,
    textDecoration: 'none'
  }
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
