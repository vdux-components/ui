/**
 * Imports
 */

import element from 'vdux/element'
import {Divider, defaultTheme} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Divider/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Divider />)
  t.equal(node.style.backgroundColor, 'rgb(17, 17, 17)')

  node = render(<Divider color='rgb(18, 18, 18)' w='36%' />)
  t.equal(node.style.backgroundColor, 'rgb(18, 18, 18)')
  t.equal(node.style.width, '36%')

  t.end()
})
