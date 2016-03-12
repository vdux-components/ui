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

  node = render(<Box auto />)
  t.equal(node.style.flex, '1 1 auto')

  node = render(<Box flex />)
  t.equal(node.style.display, 'flex')

  node = render(<Box col={2} />)
  t.equal(node.style.width, '16.6667%')

  t.end()
})
