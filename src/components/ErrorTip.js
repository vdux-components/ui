/**
 * Imports
 */

import element from 'vdux/element'
import Tooltip from './Tooltip'

/**
 * <ErrorTip/>: An error message styled tooltip
 */

function render ({props}) {
  const {message, ...rest} = props

  return (
    <Tooltip
      fs='xxs'
      p='0px 20px'
      lh='30px'
      bgColor='error'
      space={10}
      {...rest}>{message}</Tooltip>
  )
}

/**
 * Exports
 */

export default {
  render
}
