/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './base'

/**
 * Constants
 */

const themeProps = ['avatarScale', 'circularAvatars']
const filterProps = omit(['size', 'circle', '$theme'])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

/**
 * Avatar component
 */

function render ({props}) {
  let {circle = true, size = 32, $theme} = props
  const {avatarScale, circularAvatars} = $theme

  if (avatarScale && avatarScale[size]) {
    size = avatarScale[size]
  }

  if (circularAvatars === false && props.circle === undefined) {
    circle = false
  }

  return (
    <Base tag='img' class={[props.class, 'vui-avatar']} {...filterProps(props)} width={size} height={size} circle={circle} baseStyle={{width: size, height: size}} />
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
