/**
 * Imports
 */

import {component, element} from 'vdux'
import {mergeTheme} from '../util'
import Text from './Text'

/**
 * <Icon/>
 */

export default component({
  render ({props, context}) {
    const theme = mergeTheme(context.uiTheme)
    const {
      name,
      iconTag = theme.iconTag,
      iconClass = theme.iconClass,
      ...restProps
    } = props

    let cls = [iconClass, 'vui-icon']
    if (props.class) {
      if (Array.isArray(props.class)) cls = cls.concat(props.class)
      else cls.push(props.class)
    }

    return (
      <Text tag={iconTag} {...restProps} class={cls}>
        {name}
      </Text>
    )
  }
})
