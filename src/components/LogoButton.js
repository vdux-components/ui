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
  const {divider = true, logo, logoSize = '25px', height = '43px', ...btnProps} = props

  return (
    <Button rounded height={height} px='5px' {...btnProps}>
      <Flex align='center center' height='100%'>
        <Base tag='img' square={logoSize} mr='6px' src={logo} />
        {
          divider === true
            ? <Block height='100%' borderLeft='rgba(52, 52, 52, 0.08)' />
            : divider
        }
        <Text mx='5px'>
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
