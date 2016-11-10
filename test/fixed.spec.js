/**
 * Imports
 */

import {element} from 'vdux'
import {Fixed} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Fixed/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Fixed top />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.top, '0px')

  node = render(<Fixed left />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.left, '0px')

  node = render(<Fixed bottom />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.bottom, '0px')

  node = render(<Fixed right />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.right, '0px')

  node = render(<Fixed z={2} />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.zIndex, '2')

  t.end()
})
