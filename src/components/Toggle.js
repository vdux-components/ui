/**
 * Imports
 */

import element from 'vdux/element'
import Checkbox from './Checkbox'
import Block from './Block'
import Flex from './Flex'
import Base from './Base'

/**
 * <Checkbox/>
 */

function render ({props, children}) {
  return (
    <Checkbox btn={ToggleUi} {...props} />
  )
}

function ToggleUi ({props}) {
  const {checked, label, contWidth = '15%', tWidth = 40} = props
  const tHeight = tWidth * .55

  return (
    <Flex align='start center' wide>
      <Block flex={contWidth}>
        <Block
          boxShadow='inset 4px 4px 10px rgba(#000, 0.2), inset 1px 1px 0 rgba(#000, 0.25), 1px 1px 0 rgba(#FFF, 0.5)'
          bg={checked ? 'green' : 'red'}
          transition='background-color .2s'
          w={tWidth}
          h={tHeight}
          relative
          pill>
          <Block
            circle={tHeight + 2}
            absolute
            left={checked ? -2 : (tWidth - tHeight - 4)}
            top='-1'
            bg='white'
            boxShadow='0 0 5px rgba(#000, .3), 0 8px 6px rgba(#000, .1)'
            pointer
            transition='all .2s'/>
        </Block>
      </Block>
      {label}
    </Flex>
  )
}

/**
 * Exports
 */

export default {
  render
}
