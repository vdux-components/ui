/**
 * Imports
 */

import {component, element} from 'vdux'
import Tooltip from './Tooltip'

/**
 * <ErrorTip/>: An error message styled tooltip
 */

export default component({
  render ({props}) {
    const {message, ...rest} = props

    return (
      <Tooltip
        fs='xxs'
        p='0px 20px'
        lh='30px'
        bgColor='error'
        space={10}
        maxWidth='none'
        {...rest}>
        {message}</Tooltip>
    )
  }
})
