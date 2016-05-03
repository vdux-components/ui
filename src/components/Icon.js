/**
 * Imports
 */

import {mergeTheme} from '../util'
import element from 'vdux/element'
import Text from './Text'

/**
 * getProps
 */

function getProps (props, {uiTheme = {}}) {
  props.$theme = mergeTheme(uiTheme)
  return props
}

/**
 * Icon
 */

function render ({props}) {
  const {
    $theme,
    name,
    iconTag = $theme.iconTag,
    iconClass = $theme.iconClass,
    ...restProps
  } = props

  let cls = [iconClass, 'vui-icon']
  if (props.class) {
    if (Array.isArray(props.class)) cls = cls.concat(props.class)
    else cls.push(props.class)
  }

  return (
    <Text tag={iconTag} {...restProps} class={cls}>
      {props.name}
    </Text>
  )
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
