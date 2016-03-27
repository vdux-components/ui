/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import Block from './block'
import pick from '@f/pick'
import omit from '@f/omit'
import Flex from './flex'
import map from '@f/map'

/**
 * Constants
 */

const themeProps = ['scale']
const filterProps = omit(['spacing', 'itemStyle'])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {uiTheme = {}} = context
  props.$theme = pick(themeProps, uiTheme, defaultTheme)
  return props
}

/**
 * Menu component
 */

function render ({props, children}) {
  const {itemStyle, $theme} = props

  return (
    <Flex class={[props.class, 'vui-menu']} {...filterProps(props)}>
      {
        map(child => <Block baseStyle={getBaseItemStyle(props, $theme)} style={itemStyle}>{child}</Block>, children)
      }
    </Flex>
  )
}

/**
 * Child item styles
 */

function getBaseItemStyle ({spacing, column}, {scale = []}) {
  const margin = scale[spacing] ? scale[spacing] : spacing

  return column
    ? {marginBottom: margin}
    : {marginRight: margin}
}

/**
 * Exports
 */

export default {
  render,
  getProps
}
