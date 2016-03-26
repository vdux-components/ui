/**
 * Imports
 */

import element from 'vdux/element'
import Button from './Button'
import Block from './Block'
import Flex from './Flex'
import Base from './Base'
import Text from './Text'

/**
 * LogoButton component
 */

function render ({props, children}) {
  const {divider = true, logo, logoSize = '25px', h = '43px', ...btnProps} = props

  return (
    <Button rounded h={h} px='5px' {...btnProps}>
      <Flex align='start center' tall>
        <Base tag='img' sq={logoSize} mr='6px' src={logo} />
        {
          divider === true
            ? <Block h='100%' borderLeft='rgba(52, 52, 52, 0.08)' />
            : divider
        }
        <Text mx='auto'>
          {children}
        </Text>
      </Flex>
    </Button>
  )
}

/**
 * Exports
 */

export default {
  render
}
