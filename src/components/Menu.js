/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import Block from './Block'
import omit from '@f/omit'
import Flex from './Flex'
import map from '@f/map'

/**
 * Constants
 */

const getProps = getThemeProps(['scale'])
const filterProps = omit(['spacing', 'itemStyle', 'itemProps', 'class'])

/**
 * Menu component
 */

function render ({props, children}) {
  const {itemStyle, itemProps = {}, $theme} = props

  return (
    <Flex {...filterProps(props)} class={[props.class, 'vui-menu']}>
      {
        map(child => <Block {...itemProps} baseStyle={getBaseItemStyle(props, $theme)} style={itemStyle}>{child}</Block>, children)
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
