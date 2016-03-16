/**
 * Imports
 */

import element from 'vdux/element'
import {Input} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Input/> should work', t => {
  const {render} = vdux()
  let node, label, input

  node = render(<Input />)
  input = node.firstChild.nextSibling

  t.equal(input.tagName, 'INPUT')
  t.equal(input.getAttribute('type'), 'text')

  node = render(<Input rounded />)
  input = node.firstChild.nextSibling
  t.equal(input.style.borderRadius, '2px')

  node = render(<Input name='test' rounded label='some text' />)
  label = node.firstChild
  t.equal(label.getAttribute('for'), 'test')
  t.equal(label.textContent, 'some text')

  node = render(<Input classes={{input: 'inpt', label: 'lbl', container: 'cnt'}} />)
  t.ok(node.classList.contains('cnt'))
  t.ok(node.firstChild.classList.contains('lbl'))
  t.ok(node.firstChild.nextSibling.classList.contains('inpt'))

  t.end()
})
