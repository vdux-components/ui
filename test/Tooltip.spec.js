/**
 * Imports
 */

import element from 'vdux/element'
import {Tooltip} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Tooltip/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Tooltip />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '-10000px')

  node = render(<Tooltip show={true} />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '-16px')

  t.end()
})

test('<Tooltip/> should use theme colors for the arrow', t => {
  const {render} = vdux()
  let node

  node = render(<Tooltip show={true} bgColor='blue' />)
  t.equal($('.vui-tooltip-arrow').style.borderTopColor, 'rgb(0, 136, 238)')

  t.end()
})

/**
 * Helpers
 */

function $ (selector) {
  return document.querySelector(selector)
}
