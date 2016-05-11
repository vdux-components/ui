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
  t.equal(node.style.borderRadius, '3px', 'borderRadius')

  node = render(<Input name='test' rounded label='some text' />)
  label = node.firstChild
  t.equal(label.getAttribute('for'), 'test', 'label for')
  t.equal(label.textContent, 'some text', 'label content')

  node = render(<Input class='cnt' inputClass='inpt' labelClass='lbl' />)
  t.ok(node.classList.contains('cnt'), 'classList - cnt')
  t.ok(node.firstChild.classList.contains('lbl'), 'classList - labelClass')
  t.ok(node.firstChild.nextSibling.classList.contains('inpt'), 'classList - inputClass')

  t.end()
})

test('<Input/> should work with padding props', t => {
  const {render} = vdux()
  let node, input

  node = render(<Input inputProps={{px: '1px', py: '2px'}} />)
  input = node.firstChild.nextSibling

  t.equal(input.tagName, 'INPUT')
  t.equal(input.style.paddingLeft, '1px', 'paddingLeft')
  t.equal(input.style.paddingRight, '1px', 'paddingRight')
  t.equal(input.style.paddingTop, '2px', 'paddingTop')
  t.equal(input.style.paddingBottom, '2px', 'paddingBottom')

  t.end()
})
