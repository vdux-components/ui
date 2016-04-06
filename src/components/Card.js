/**
 * Imports
 */

import {getThemeProps} from '../util'
import element from 'vdux/element'
import omit from '@f/omit'
import Base from './Base'

/**
 * Constants
 */

const getProps = getThemeProps(['cardShadow', 'colors'])

/**
 * Card component
 */

function render ({props, children}) {
  const {$theme} = props

  return (
    <Base class={[props.class, 'vui-card']} baseStyle={getStyle(props, $theme)} {...props}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({width}, {colors, cardShadow}) {
  const result = {
    color: colors.text ? colors.text : null,
    background: colors.white,
    marginTop: 14,
    boxShadow: cardShadow
  }

  if (width !== undefined) result.width = width
  return result
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
