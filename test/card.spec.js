/**
 * Imports
 */

import {Card, defaultTheme} from '../src'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Card/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Card w='20%' />)
  t.equal(node.style.width, '20%')
  t.equal(node.style.boxShadow, 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px')

  t.end()
})
