/**
 * Imports
 */

import {element} from 'vdux'
import vdux from 'vdux/dom'
import {Text} from '../src'
import test from 'tape'

/**
 * Tests
 */

test('<Text/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Text bold capitalize>test</Text>)
  t.equal(node.innerText, 'Test', 'innerText')
  t.equal(node.style.textTransform, 'capitalize', 'textTransform')
  t.equal(node.style.fontWeight, 'bold', 'bold')

  const uiTheme = {fonts: {code: 'monospace'}}
  node = render(<Text fontFamily='code'>test</Text>, {uiTheme})
  t.equal(node.style.fontFamily, 'monospace', 'fontFamily')

  t.end()
})
