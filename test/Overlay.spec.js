/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import {Overlay} from '../src'
import element from 'vdux/element'

/**
 * Tests
 */

test('<Overlay/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Overlay />)
  t.equal(node.tagName, 'DIV', 'tagName')
  t.equal(node.style.zIndex, '99999', 'zIndex')

  t.end()
})
