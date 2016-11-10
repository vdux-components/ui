/**
 * Imports
 */

import {component, element} from 'vdux'
import Block from './Block'

/**
 * <ProgressBar/>
 */

export default component({
  render ({props}) {
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
})
