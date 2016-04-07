/**
 * Imports
 */

import {highlightColor, getThemeProps} from '../util'
import element from 'vdux/element'
import Block from './Block'
import omit from '@f/omit'
import Icon from './icon'

/**
 * Constants
 */

const getProps = getThemeProps(['scale', 'colors'])
const filterProps = omit(['bgColor', 'color', 'inverted', 'text', 'noselect', 'highlight'])

/**
 * MenuItem
 */

function render ({props, children}) {
  const {$theme, icon, highlight} = props
  const {scale = {}, colors = {}} = $theme
  let {text, color = 'text', bgColor = 'white'} = props

  if (icon) {
    text = <Icon baseStyle={{fontSize: 'inherit'}} name={icon} />
    bgColor = 'transparent'
  }

  return (
    <Block
      class={[props.class, 'vui-menu-item']}
      baseStyle={getStyle(props)}
      color={color}
      bgColor={highlight ? highlightColor(bgColor, colors) : bgColor}
      pointer
      {...filterProps(props)}>
      {text || children}
    </Block>
  )
}

/**
 * Compute base styles
 */

function getStyle ({icon}) {
  return {
    cursor: 'pointer',
    textAlign: 'center',
    padding: icon ? 0 : null,
    margin: 0,
    border: 0,
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
