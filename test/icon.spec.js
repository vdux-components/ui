/**
 * Imports
 */

import element from 'vdux/element'
import vdux from 'vdux/dom'
import {Icon} from '../src'
import test from 'tape'

/**
 * Tests
 */

test('<Icon/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Icon name='search' />)
  t.equal(node.innerText, 'search')
  t.equal(node.tagName, 'MD-ICON')
  t.ok(node.classList.contains('material-icons'))

  node = render(<Icon name='search' />, {uiTheme: {iconTag: 'icon', iconClass: 'iconcls'}})
  t.equal(node.innerText, 'search')
  t.equal(node.tagName, 'ICON')
  t.ok(node.classList.contains('iconcls'))

  t.end()
})
