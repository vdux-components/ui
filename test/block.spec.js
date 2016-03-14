/**
 * Imports
 */

import element from 'vdux/element'
import {Block} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Block/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Block border />)
  t.equal(node.style.borderStyle, 'solid')

  node = render(<Block />)
  t.equal(node.style.borderStyle, '')

  node = render(<Block borderTop />)
  t.equal(node.style.borderTopStyle, 'solid')

  node = render(<Block borderTop='#FCFCFC' />)
  t.equal(node.style.borderTopStyle, 'solid')
  t.equal(node.style.borderTopColor, 'rgb(252, 252, 252)')
  t.equal(node.style.borderWidth, '1px')

  t.end()
})
