/**
 * Imports
 */

import element from 'vdux/element'
import vdux from 'vdux/dom'
import {Box} from '../src'
import test from 'tape'

/**
 * Tests
 */

test('<Box/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Box flex />)
  t.equal(node.style.flex, '1 1 auto')

  node = render(<Box flex='35%' />)
  t.equal(node.style.flex, '1 1 35%')

  t.end()
})
