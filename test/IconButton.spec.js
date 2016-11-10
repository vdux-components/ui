/**
 * Imports
 */

import {element} from 'vdux'
import {IconButton} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<IconButton/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<IconButton img='test/img.jpg' />)
  t.equal($('img').getAttribute('src'), 'test/img.jpg')
  t.equal($('.vui-icon-button'), node)

  node = render(<IconButton icon='person' />)
  t.equal($('.vui-icon').innerText, 'person')

  t.end()
})

/**
 * Helpers
 */

function $ (selector) {
  return document.querySelector(selector)
}
