/**
 * Imports
 */

import Position from 'vdux-position'
import element from 'vdux/element'
import {classes} from '../util'
import Block from './Block'

/**
 * Constants
 */

const width = '6px'

/**
 * Tooltip
 */

function render ({props, children}) {
  const {placement = 'top', space = 0, color = 'white', show, bgColor = 'black', ...restProps} = props
  const margin = {}

  if (placement === 'top') margin.mt = '-3px'
  else if (placement === 'bottom') margin.mb = '-3px'
  else if (placement === 'right') margin.mr = '-3px'
  else if (placement === 'left') margin.ml = '-3px'

  return (
    <Position placement={placement} space={space} disable={!show}>
      <Block
        absolute
        userSelect='none'
        {...margin}
        py={width}
        top='-10000px'
        opacity={show ? 1 : 0}
        transition='opacity .15s linear'
        z='tooltip'
        class={classes(props.class, 'vui-tooltip')}>
        <Block
          absolute
          sq={0}
          borderColor='transparent'
          borderStyle='solid'
          {...getArrowStyle(placement, bgColor)}
          class='vui-tooltip-arrow' />
        <Block class='vui-tooltip-inner' fs='xxs' py={6} px={9} maxWidth={200} rounded bgColor={bgColor} whiteSpace='nowrap' color='white' {...restProps}>
          {children}
        </Block>
      </Block>
    </Position>
  )
}


/**
 * Compute base styles
 */

function getArrowStyle (placement, color) {
  switch (placement) {
    case 'top':
      return {
        bottom: 0,
        left: '50%',
        marginLeft: `-${width}`,
        borderWidth: `${width} ${width} 0`,
        borderTopColor: color,
        marginTop: '-3px'
      }
    case 'bottom':
      return {
        top: 0,
        left: '50%',
        marginLeft: `-${width}`,
        borderWidth: `0 ${width} ${width}`,
        borderBottomColor: color
      }
    case 'right':
      return {
        top: '50%',
        right: '100%',
        marginTop: `-${width}`,
        borderWidth: `${width} ${width} ${width} 0`,
        borderRightColor: color
      }
    case 'left':
      return {
        top: '50%',
        left: '100%',
        marginTop: `-${width}`,
        borderWidth: `${width} 0 ${width} ${width}`,
        borderLeftColor: color
      }
    default:
      throw new Error('Unknown tooltip placement: "' + placement + '"')
  }
}

/**
 * Exports
 */

export default {
  render
}
