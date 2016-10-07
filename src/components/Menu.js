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
const filterProps = omit(['spacing', 'itemProps', 'class'])

/**
 * Menu component
 */

function render ({props, children}) {
  const {itemStyle, itemProps = {}, $theme, spacing, column} = props
  const {scale = []} = $theme
  const margin = scale[spacing] ? scale[spacing] : spacing
  const baseItemStyle = {[column ? 'marginBottom' : 'marginRight']: margin}

  return (
    <Flex {...filterProps(props)} class={[props.class, 'vui-menu']}>
      {
        map(child => <Block {...baseItemStyle} {...itemProps}>{child}</Block>, children)
      }
    </Flex>
  )
}

/**
 * Exports
 */

export default {
  render,
  getProps
}
