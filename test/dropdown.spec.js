/**
 * Imports
 */

import element from 'vdux/element'
import {Dropdown} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Dropdown/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Dropdown />)
  t.equal(node.style.position, 'relative')

  t.end()
})
