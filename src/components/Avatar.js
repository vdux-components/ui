/**
 * Imports
 */

import {classes, mergeTheme} from '../util'
import {component, element} from 'vdux'
import Base from './Base'

/**
 * <Avatar/>
 */

export default component({
  render ({props, context}) {
    const {avatarScale, circularAvatars} = mergeTheme(context.uiTheme)
    const {size = 32, circle = circularAvatars, ...rest} = props

    const scaledSize = avatarScale && avatarScale[size]
      ? avatarScale[size]
      : size

    return (
      <Base
        tag='img'
        class={classes(props.class, 'vui-avatar')}
        sq={scaledSize}
        circle={circle}
        {...rest}
        />
    )
  }
})
