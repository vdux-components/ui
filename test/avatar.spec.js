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
  t.equal(node.tagName, 'IMG')
  t.equal(node.getAttribute('src'), '/images/cat.jpg')
  t.equal(node.style.width, '32px')
  t.equal(node.style.height, '32px')
  t.equal(node.style.borderRadius, '99999px')

  node = render(<Avatar circle={false} src='/images/cat.jpg' />)
  t.equal(node.style.borderRadius, '')

  const baseTheme = {
    avatarScale: [
      10,
      20,
      30
    ]
  }

  node = render(<Avatar size={1} src='/images/cat.jpg' />, {baseTheme})
  t.equal(node.style.width, '20px')

  t.end()
})
