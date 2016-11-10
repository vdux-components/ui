/**
 * Imports
 */

import trigger from '@f/trigger-event'
import {element} from 'vdux'
import {Modal} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Modal/> should work', t => {
  const {render, subscribe} = vdux()
  let node

  node = render(<Modal onDismiss={() => t.pass()} />)
  const off = subscribe(() => ({}))

  t.plan(2)
  trigger(node, 'click')
  trigger(node, 'keypress', {which: 27})

  t.end()
  off()
})
