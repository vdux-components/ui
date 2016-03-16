/**
 * Imports
 */

import {Button} from '../src'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Button/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Button>test</Button>)
  t.equal(node.getAttribute('type'), 'button')
  t.equal(node.tagName, 'BUTTON')

  node = render(<Button icon='search' />)
  t.equal(node.tagName, 'BUTTON')
  t.equal(node.firstChild.tagName, 'MD-ICON')

  t.end()
})
