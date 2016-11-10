/**
 * Imports
 */

import {component, element} from 'vdux'
import reduce from '@f/reduce'
import Flex from './Flex'
import map from '@f/map'

/**
 * <Grid/>
 */

export default component({
  render ({props, children}) {
    const {itemsPerRow = 4, columnAlign, rowAlign, ...restProps} = props
    const columns = toColumns(children, itemsPerRow)

    return (
      <Flex align={rowAlign} {...restProps}>
        {
          map(items => <Flex column align={columnAlign}>{items}</Flex>, columns)
        }
      </Flex>
    )
  }
})

/**
 * Helpers
 */

function toColumns (items, n) {
  return reduce((memo, item, i) => {
    if (!memo[i % n]) memo.push([])
    memo[i % n].push(item)
    return memo
  }, [], items)
}
