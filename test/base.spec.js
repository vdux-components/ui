/**
 * Imports
 */

import {Base, defaultTheme} from '../src'
import element from 'vdux/element'
import vdux from 'vdux/dom'
import test from 'tape'

/**
 * Tests
 */

test.only('<Base/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='white'/>)
  t.equal(node.style.color, 'rgb(255, 255, 255)')

  node = render(<Base px={1} />)
  t.equal(node.style.paddingLeft, defaultTheme.scale[1] + 'px')
  t.equal(node.style.paddingRight, defaultTheme.scale[1] + 'px')

  node = render(<Base mt={1} />)
  t.equal(node.style.marginTop, defaultTheme.scale[1] + 'px')
  t.equal(node.style.marginBottom, '')

  node = render(<Base circle={true} />)
  t.equal(node.style.borderRadius, '99999px')

  node = render(<Base rounded={true} />)
  t.equal(node.style.borderRadius, defaultTheme.borderRadius + 'px')

  node = render(<Base pill={true} />)
  t.equal(node.style.borderRadius, '99999px')

  node = render(<Base tag='a'/>)
  t.equal(node.tagName, 'A')

  node = render(<Base>test</Base>)
  t.equal(node.innerText, 'test')

  node = render(<Base wide />)
  t.equal(node.style.width, '100%')

  node = render(<Base tall />)
  t.equal(node.style.height, '100%')

  t.end()
})

test('<Base/> doesnt render extraneous attributes in the DOM', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='white' />)
  t.equal(node.getAttribute('color'), null)

  t.end()
})

test('<Base/> allows restyling via context', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='white' />)
  t.equal(node.style.color, 'rgb(255, 255, 255)')

  const baseTheme = {
    colors: {
      white: 'rgb(251, 251, 251)'
    }
  }

  node = render(<Base color='white' />, {baseTheme})
  t.equal(node.style.color, baseTheme.colors.white)
  t.end()
})
