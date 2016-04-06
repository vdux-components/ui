/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Text from './text'

/**
 * Constants
 */

const getProps = getThemeProps(['iconTag', 'iconClass'])
const filterProps = omit(['name'])

/**
 * Icon
 */

function render ({props}) {
  const {$theme} = props
  const {iconTag, iconClass} = $theme

  return (
    <Text tag={iconTag} {...props} class={[iconClass, 'vui-icon', props.class]}>
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
