/**
 * Imports
 */

import {component, element} from 'vdux'
import Checkbox from './Checkbox'
import Block from './Block'
import Flex from './Flex'

/**
 * <Toggle/>
 */

export default component({
  render ({props, children}) {
    return (
      <Checkbox btn={ToggleUi} {...props} />
    )
  }
})

/**
 * <ToggleUi/>
 */

function ToggleUi ({props}) {
  const {checked, label, tWidth = 42, squished, labelProps = {}, toggleProps = {}} = props
  const tHeight = tWidth * 0.55
  const delta = 5

  return (
    <Flex align='start center' wide>
      <Block>
        <Block
          bg={checked ? 'green' : 'rgba(0,0,0,.2)'}
          transition='background-color .2s'
          w={tWidth}
          h={tHeight}
          mr
          relative
          boxSizing='content-box'
          border='2px solid transparent'
          borderColor={checked && 'green'}
          pill
          {...toggleProps}>
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
                  ? squished ? tWidth - tHeight - delta : tWidth - tHeight
                  : 0
              }
            />
        </Block>
      </Block>
      <Block {...labelProps}>
        {label}
      </Block>
    </Flex>
  )
}
