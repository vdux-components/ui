/**
 * Imports
 */

import element from 'vdux/element'
import {LogoButton} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<LogoButton/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<LogoButton logo='test/img.jpg' />)
  t.equal($('img').getAttribute('src'), 'test/img.jpg')
  t.equal($('.vui-logo-button'), node)

  t.end()
})

/**
 * Helpers
 */

function $ (selector) {
  return document.querySelector(selector)
}
