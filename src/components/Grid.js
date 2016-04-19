/**
 * Imports
 */

import element from 'vdux/element'
import reduce from '@f/reduce'
import Flex from './flex'
import map from '@f/map'

/**
 * Grid
 */

function render ({props, children}) {
  const {itemsPerRow = 4, columnAlign, rowAlign, ...restProps} = props
  const columns = toColumns(children, itemsPerRow)

  return (
    <Flex {...restProps} align={rowAlign}>
      {
        map(items => <Flex column align={columnAlign}>{items}</Flex>, columns)
      }
    </Flex>
  )
}

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

/**
 * Exports
 */

export default {
  render
}

