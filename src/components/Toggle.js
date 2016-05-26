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
  const {checked, label, contWidth = '15%', tWidth = 42, squished} = props
  const tHeight = tWidth * .55
  const delta = 5

  return (
    <Flex align='start center' wide>
      <Block flex={contWidth}>
        <Block
          bg={checked ? 'green' : 'rgba(0,0,0,.2)'}
          transition='background-color .2s'
          w={tWidth}
          h={tHeight}
          relative
          boxSizing='content-box'
          border='2px solid transparent'
          borderColor={checked && 'green'}
          pill>
          <Block
            boxShadow='0px 1px 5px rgba(#000, .3)'
            w={squished ? tHeight + delta : tHeight}
            transition='all .2s'
            h={tHeight}
            absolute
            bg='white'
            pointer
            circle
            left={
                checked
                  ? squished ? tWidth - tHeight - delta :  tWidth - tHeight
                  : 0
              }
            />
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
