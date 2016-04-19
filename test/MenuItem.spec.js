/**
 * Imports
 */

import {highlight} from '../src/util'
import element from 'vdux/element'
import {MenuItem} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<MenuItem/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<MenuItem>test</MenuItem>)
  t.equal(node.tagName, 'DIV', 'tagName')
  t.equal(node.style.margin, '0px', 'margin')
  t.equal(node.style.textDecoration, 'none', 'textDecoration')

  t.end()
})

test('<MenuItem/> should highlight its background color', t => {
  const {render} = vdux()

  const prev = render(<MenuItem />).style.backgroundColor
  const next = render(<MenuItem highlight />).style.backgroundColor

  // Normalize the strings because highlight returns an 'rgba'
  // string whereas next.style.backgroundColor will be 'rgb' since we
  // aren't using opacity
  t.equal(next.slice(3, -1) + ', 1)', highlight(prev).slice(4), 'highlight backgroundColor')
  t.end()
})
