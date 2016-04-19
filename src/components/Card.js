/**
 * Imports
 */

import element from 'vdux/element'
import {classes} from '../util'
import Base from './Base'

/**
 * Card component
 */

function render ({props, children}) {
  return (
    <Base
      color='text'
      bgColor='white'
      boxShadow='card'
      {...props}
      class={classes(props.class, 'vui-card')}>
      {children}
    </Base>
  )
}

/**
 * Exports
 */

export default {
  render
}
