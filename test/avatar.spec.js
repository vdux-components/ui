/**
 * Imports
 */

import test from 'tape'
import vdux from 'vdux/dom'
import {Avatar} from '../src'
import element from 'vdux/element'

/**
 * Tests
 */

test('<Avatar/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Avatar src='/images/cat.jpg' />)
  t.equal(node.tagName, 'IMG', 'tagName')
  t.equal(node.getAttribute('src'), '/images/cat.jpg', 'src')
  t.equal(node.style.width, '32px', 'width')
  t.equal(node.style.height, '32px', 'height')
  t.equal(node.style.borderRadius, '99999px', 'borderRadius')

  node = render(<Avatar circle={false} src='/images/cat.jpg' />)
  t.equal(node.style.borderRadius, '', 'borderRadius - (circle=false)')

  const uiTheme = {
    avatarScale: [
      10,
      20,
      30
    ]
  }

  node = render(<Avatar size={1} src='/images/cat.jpg' />, {uiTheme})
  t.equal(node.style.width, '20px', 'width - scaled')

  t.end()
})
