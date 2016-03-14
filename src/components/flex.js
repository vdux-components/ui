/**
 * Imports
 */

import defaultTheme from '../default-theme'
import element from 'vdux/element'
import pick from '@f/pick'
import omit from '@f/omit'
import Base from './base'

/**
 * Prop filtering
 */

const themeProps = ['scale']
const filterProps = omit([
  'justify',
  'gutter',
  'column',
  '$theme',
  'align',
  'wrap',
  'flex'
])

/**
 * getProps
 */

function getProps (props, context = {}) {
  const {baseTheme = {}} = context
  props.$theme = pick(themeProps, baseTheme, defaultTheme)
  return props
}

/**
 * Flex container component
 */

function render ({props, children}) {
  const {gutter, $theme} = props
  const {scale} = $theme
  const extras = {}

  if (gutter) {
    extras.mx = -(scale && scale[gutter] ? scale[gutter] : gutter)
  }


  return (
    <Base baseStyle={getStyle(props)} {...extras} {...filterProps(props)}>
      {children}
    </Base>
  )
}

/**
 * Helpers
 */

function getStyle ({justify, align, column, wrap, flex}) {
  const result = {display: 'flex'}

  if (align) {
    const [justify, alignItems] = align.split(' ')
    if (justify) result.justifyContent = flexify(justify)
    if (align) result.alignItems = flexify(alignItems)
  }

  if (column) result.flexDirection = 'column'
  if (wrap) result.flexWrap = 'wrap'
  if (flex) {
    if (flex === true) result.flex = '1 1 auto'
    else {
      const n = parseInt(flex)

      if (!isNaN(n)) {
        result.flex = `1 1 ${n}`

        if (!column) {
          result.maxWidth = n + '%',
          result.maxHeight = '100%'
        } else {
          result.maxHeight = n + '%'
          result.maxWidth = '100%'
        }
      }
    }
  }

  return result
}

function flexify (str) {
  return str === 'start' || str === 'end'
    ? 'flex-' + str
    : str
}

/**
 * Exports
 */

export default {
  getProps,
  render
}
