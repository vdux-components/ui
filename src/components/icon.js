/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Text from './text'

/**
 * Constants
 */

const themeProps = ['iconTag', 'iconClass']
const filterProps = omit(['name'])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

/**
 * Icon
 */

function render ({props}) {
  const {$theme} = props
  const {iconTag, iconClass} = $theme

  return (
    <Text tag={iconTag} {...props} class={[iconClass, props.class]}>
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
