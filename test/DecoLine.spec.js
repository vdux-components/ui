/**
 * Imports
 */

import element from 'vdux/element'
import {DecoLine} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<DecoLine/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<DecoLine />)
  t.equal(node.style.borderTop, '1px solid rgba(0, 0, 0, 0.2)')
  t.equal(node.style.borderBottom, '1px solid rgba(255, 255, 255, 0.2)')

  t.end()
})
