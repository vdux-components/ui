/**
 * Imports
 */

import trigger from '@f/trigger-event'
import {DropdownMenu} from '../src'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<DropdownMenu/> should work', t => {
  const {render, subscribe} = vdux()
  let node

  node = render(<DropdownMenu open={true} onDismiss={() => t.pass()} />)
  t.equal(node.style.position, 'absolute')

  const off = subscribe(() => {})

  t.plan(3)
  trigger(node, 'click')
  trigger(node, 'keypress', {which: 27})

  off()
})

test('<DropdownMenu /> should change display when open', t => {
  const {render} = vdux()
  let node

  node = render(<DropdownMenu open={false} />)
  t.equal(node.style.display, 'none')
  node = render(<DropdownMenu open={true} />)
  t.equal(node.style.display, 'flex')

  t.end()
})
