/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Icon from './icon'
import Base from './Base'

/**
 * Constants
 */

const themeProps = ['scale']
const filterProps = omit(['bgColor', 'color', 'inverted', 'type', 'text'])

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
  const {$theme, type = 'button', inverted = true, icon} = props
  const {scale = []} = $theme
  let {text, color = 'white', px, py, bgColor = 'primary'} = props

  if (icon) {
    text = <Icon baseStyle={{fontSize: 'inherit'}} name={icon} />
    bgColor = 'transparent'
  }

  return (
    <Base
      tag='button'
      class={[props.class, 'vui-button']}
      baseStyle={{padding: icon ? 0 : null, margin: 0, border: 0, textDecoration: 'none'}}
      color={color}
      bgColor={bgColor}
      type={type}
      inverted={inverted}
      pointer
      {...filterProps(props)}>
      {text || children}
    </Base>
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
