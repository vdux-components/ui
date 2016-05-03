/**
 * Imports
 */

import {classes, mergeTheme} from '../util'
import element from 'vdux/element'
import Base from './Base'

/**
 * getProps
 */

function getProps (props, {uiTheme}) {
  props.$theme = mergeTheme(uiTheme)

  const {circle = props.$theme.circularAvatars, size = 32} = props
  props.circle = circle
  props.size = size

  return props
}

/**
 * Avatar component
 */

function render ({props}) {
  let {$theme, size, ...rest} = props
  const {avatarScale} = $theme

  if (avatarScale && avatarScale[size]) {
    size = avatarScale[size]
  }

  return (
    <Base
      tag='img'
      class={classes(props.class, 'vui-avatar')}
      {...rest}
      sq={size} />
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
