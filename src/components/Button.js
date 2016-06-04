/**
 * Imports
 */

import element from 'vdux/element'
import Tooltip from './Tooltip'
import {classes} from '../util'
import Block from './Block'
import Icon from './Icon'
import Flex from './Flex'

/**
 * Button
 */

function render ({props, children}) {
  let {
    text, bgColor = 'primary', icon,
    ttUi: TtUi = Tooltip, tooltip,
    ttPlacement = 'top', ttShown,
    ttSpace, ...restProps
  } = props

  if (icon) {
    text = <Icon fontSize='inherit' name={icon} />
    if (props.bgColor === undefined) {
      bgColor = 'transparent'
    }
  }

  const tt = tooltip && (
    <TtUi show={ttShown} placement={ttPlacement} space={ttSpace}>
      {tooltip}
    </TtUi>
  )

  return (
    <Block
      tag='button'
      type='button'
      color='white'
      pointer
      overflow='visible'
      textAlign='center'
      padding={icon ? 0 : null}
      m={0}
      rounded
      borderWidth={0}
      userSelect='none'
      textDecoration='none'

      {...restProps}

      bgColor={bgColor}
      class={classes(props.class, 'vui-button')}>
      <Flex align='center center'>
        {text || children}
      </Flex>
      {tt}
    </Block>
  )
}

/**
 * Exports
 */

export default {
  render
}
