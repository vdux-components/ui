/**
 * Imports
 */

import {ModalBody, defaultTheme} from '../src'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Modal/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<ModalBody/>)
  t.equal(node.tagName, 'DIV', 'tagName')
  t.equal(node.style.height, '75%', 'height')
  t.equal(node.style.width, '100%', 'width')
  t.equal(node.style.bgColor, defaultTheme.white)

  t.end()
})
