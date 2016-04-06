/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Constants
 */

const getProps = getThemeProps(['avatarScale', 'circularAvatars'])
const filterProps = omit(['size', 'circle', '$theme'])

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
    <Base tag='img' class={[props.class, 'vui-avatar']} {...filterProps(props)} w={size} h={size} circle={circle} baseStyle={{width: size, height: size}} />
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
