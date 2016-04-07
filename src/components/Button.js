/**
 * Imports
 */

import {highlightColor, getThemeProps} from '../util'
import element from 'vdux/element'
import Tooltip from './Tooltip'
import Block from './Block'
import omit from '@f/omit'
import Icon from './icon'

/**
 * Constants
 */

const getProps = getThemeProps(['scale', 'colors'])
const filterProps = omit(['bgColor', 'color', 'inverted', 'type', 'text', 'noselect', 'highlight'])

/**
 * Button
 */

function render ({props, children}) {
  const {$theme, type = 'button', inverted = true, icon, highlight} = props
  let {text, color = 'white', bgColor = 'primary'} = props

  const {ttUi: TtUi = Tooltip, tooltip, ttPlacement = 'top', ttShown} = props
  const {scale = {}, colors = {}} = $theme

  if (icon) {
    text = <Icon baseStyle={{fontSize: 'inherit'}} name={icon} />
    bgColor = 'transparent'
  }

  const tt = tooltip && (
    <TtUi show={ttShown} placement={ttPlacement}>
      {tooltip}
    </TtUi>
  )

  return (
    <Block
      tag='button'
      class={[props.class, 'vui-button']}
      baseStyle={getStyle(props)}
      color={color}
      bgColor={highlight ? highlightColor(bgColor, colors) : bgColor}
      type={type}
      inverted={inverted}
      pointer
      {...filterProps(props)}>
      {text || children}
      {tt}
    </Block>
  )
}

/**
 * Compute base styles
 */

function getStyle ({icon, noselect}) {
  return {
    position: 'relative',
    overflow: 'visible',
    cursor: 'pointer',
    textAlign: 'center',
    padding: icon ? 0 : null,
    margin: 0,
    border: 0,
    userSelect: noselect ? 'none' : null,
    textDecoration: 'none'
  }
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
