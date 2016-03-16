/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Icon from './icon'
import Base from './base'

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
  const {$theme, type = 'button', bgColor = 'primary', inverted = true, icon} = props
  const {scale = []} = $theme
  let {text} = props

  if (icon) {
    text = <Icon name={icon} />
  }

  return (
    <Base
      tag='button'
      baseStyle={{margin: 0, border: 0, textDecoration: 'none'}}
      px={scale[2]}
      py={scale[1]}
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
