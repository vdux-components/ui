/**
 * Imports
 */

import element from 'vdux/element'
import {Flex} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Flex/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Flex auto/>)
  t.equal(node.style.display, 'flex')
  t.equal(node.style.flex, '1 1 auto')

  node = render(<Flex column align='start end' />)
  t.equal(node.style.flexDirection, 'column')
  t.equal(node.style.justifyContent, 'flex-start')
  t.equal(node.style.alignItems, 'flex-end')

  t.end()
})
