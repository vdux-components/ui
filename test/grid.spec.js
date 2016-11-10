/**
 * Imports
 */

import {element} from 'vdux'
import times from '@f/times'
import {Grid} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Grid/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Grid>{times(100, i => <span>{i}</span>)}</Grid>)

  t.equal($$('.vui-flex-row').length, 1)
  t.equal($$('.vui-flex-column').length, 4)
  t.equal($$('.vui-flex-column')[0].childNodes.length, 100 / 4)

  t.end()
})

/**
 * Helpers
 */

function $$ (selector) {
  return document.querySelectorAll(selector)
}
