/**
 * Imports
 */

import {highlightColor} from '../src/util'
import element from 'vdux/element'
import {Button} from '../src'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test('<Button/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Button>test</Button>)
  t.equal(node.getAttribute('type'), 'button')
  t.equal(node.tagName, 'BUTTON')

  node = render(<Button icon='search' />)
  t.equal(node.tagName, 'BUTTON')
  t.equal(node.firstChild.tagName, 'MD-ICON')
  t.equal(node.style.backgroundColor, 'transparent')

  t.end()
})

test('<Button/> should highlight its background color', t => {
  const {render} = vdux()

  const prev = render(<Button />).style.backgroundColor
  const next = render(<Button highlight />).style.backgroundColor

  // Normalize the strings because highlightColor returns an 'rgba'
  // string whereas next.style.backgroundColor will be 'rgb' since we
  // aren't using opacity
  t.equal(next.slice(3, -1) + ', 1)', highlightColor(prev).slice(4))
  t.end()
})

test('<Button/> should show tooltip when requested', t => {
  const {render} = vdux()
  let node

  node = render(<Button tooltip='message' />)
  t.equal(node.querySelector('.vui-tooltip').style.opacity, '0')
  node = render(<Button tooltip='message' ttShown />)
  t.equal(node.querySelector('.vui-tooltip').style.opacity, '1')

  t.end()
})
