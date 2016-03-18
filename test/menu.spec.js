/**
 * Imports
 */

import element from 'vdux/element'
import vdux from 'vdux/dom'
import {Menu} from '../src'
import test from 'tape'

/**
 * Tests
 */

test('<Menu/> should work', t => {
  const {render} = vdux()
  let node, wrapper

  node = render(<Menu column spacing='10px'>item1</Menu>)
  wrapper = node.firstChild

  t.equal(node.style.flexDirection, 'column')
  t.equal(wrapper.tagName, 'DIV')
  t.equal(wrapper.style.marginBottom, '10px')

  node = render(<Menu spacing='9px'>item1</Menu>)
  wrapper = node.firstChild

  t.equal(wrapper.tagName, 'DIV')
  t.equal(wrapper.style.marginRight, '9px')

  t.end()
})
