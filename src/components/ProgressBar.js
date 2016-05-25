/**
 * Imports
 */

import element from 'vdux/element'
import Block from './Block'

/**
 * <ProgressBar/> compoonent
 */

function render ({props}) {
  const {progress = 0, barProps = {}, ...rest} = props

  return (
    <Block overflow='hidden' h={20} mb='1em' bgColor='rgba(black, 0.05)' relative {...rest}>
      <Block
        tall
        bgColor='primary'
        absolute='top 0px left 0px'
        transition='width .6s ease'
        {...barProps}
        w={Math.round(progress) + '%'} />
    </Block>
  )
}

/**
 * Exports
 */

export default {
  render
}
