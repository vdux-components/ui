/**
 * Imports
 */

import element from 'vdux/element'
import Button from './Button'
import Block from './Block'
import Icon from './Icon'
import Flex from './Flex'
import Base from './Base'
import Text from './Text'

/**
 * IconButton component
 */

function render ({props, children}) {
  const {divider = true, img, icon, iconSize = '25px', h = '43px', ...btnProps} = props
  const pic = img
    ? <Base tag='img' sq={iconSize} mr='6px' src={img} />
    : <Icon name={icon} sq={iconSize} mr='6px' />

  return (
    <Button class={[props.class, 'vui-icon-button']} rounded h={h} px='5px' {...btnProps}>
      <Flex align='start center' tall>
        {pic}
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
