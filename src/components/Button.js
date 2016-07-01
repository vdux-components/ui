/**
 * Imports
 */

import element from 'vdux/element'
import Tooltip from './Tooltip'
import {classes} from '../util'
import Spinner from './Spinner'
import Block from './Block'
import Text from './Text'
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
    busy, ttSpace, darkSpinner,
    ...restProps
  } = props

  if (icon) {
    text = <Icon fontSize='inherit' name={icon} />
    if (props.bgColor === undefined) {
      bgColor = 'transparent'
    }
  }

  if (busy && restProps.disabled === undefined) {
    restProps.disabled = true
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
      <Block relative>
        <Text hidden={busy} align='center center'>{text || children}</Text>
        <Spinner dark={darkSpinner} absolute={{top: 0, bottom: 0, left: 0, right: 0}} m='auto' hide={!busy} />
      </Block>
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
