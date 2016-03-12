/**
 * Imports
 */

import element from 'vdux/element'
import vdux from 'vdux/dom'
import {Text} from '../src'
import test from 'tape'

/**
 * Tests
 */

test('<Text/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Text bold={true} transform='capitalize'>test</Text>)
  t.equal(node.innerText, 'Test')
  t.equal(node.style.textTransform, 'capitalize')
  t.equal(node.style.fontWeight, 'bold')

  const baseTheme = {fonts: {code: 'monospace'}}
  node = render(<Text font='code'>test</Text>, {baseTheme})
  t.equal(node.style.fontFamily, 'monospace')

  t.end()
})
