/**
 * Imports
 */

import {component, element} from 'vdux'
import {mergeTheme} from '../util'
import Block from './Block'
import omit from '@f/omit'
import Flex from './Flex'
import map from '@f/map'

/**
 * Constants
 */

const filterProps = omit(['spacing', 'itemProps', 'class'])

/**
 * Menu component
 */

export default component({
  render ({props, children, context}) {
    const {itemProps = {}, spacing, column} = props
    const {scale = []} = mergeTheme(context.uiTheme)
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
})
