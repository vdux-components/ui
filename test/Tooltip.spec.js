/**
 * Imports
 */

import element from 'vdux/element'
import {Tooltip} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Tooltip/> should work', t => {
  const {render, subscribe} = vdux()
  let node

  node = render(<Tooltip />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '-10000px')

  node = render(<Tooltip show={true} />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '-24px')

  t.end()
})
