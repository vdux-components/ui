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

test('<Base/> should work', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='white'/>)
  t.equal(node.style.color, 'rgb(255, 255, 255)')

  node = render(<Base bgColor='black'/>)
  t.equal(node.style.backgroundColor, 'rgb(17, 17, 17)')

  node = render(<Base px='s' />)
  t.equal(node.style.paddingLeft, defaultTheme.scale.s + 'px')
  t.equal(node.style.paddingRight, defaultTheme.scale.s + 'px')

  node = render(<Base mt='s' />)
  t.equal(node.style.marginTop, defaultTheme.scale.s + 'px')
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

  node = render(<Base fs='10px' />)
  t.equal(node.style.fontSize, '10px')

  node = render(<Base fs={0} />, {uiTheme: {fontScale: [10]}})
  t.equal(node.style.fontSize, '10px')

  node = render(<Base ellipsis />)
  t.equal(node.style.textOverflow, 'ellipsis')
  t.equal(node.style.whiteSpace, 'nowrap')
  t.equal(node.style.overflow, 'hidden')

  node = render(<Base inverted theme='blue' />)
  t.equal(node.style.color, 'rgb(255, 255, 255)')
  t.equal(node.style.backgroundColor, 'rgb(0, 136, 238)')

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

  const uiTheme = {
    colors: {
      white: 'rgb(251, 251, 251)'
    }
  }

  node = render(<Base color='white' />, {uiTheme})
  t.equal(node.style.color, uiTheme.colors.white)
  t.end()
})

test('<Base/> supports positioning attributes', t => {
  const {render} = vdux()
  let node

  node = render(<Base absolute='top left' />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.left, '0px')
  t.equal(node.style.top, '0px')

  node = render(<Base absolute='top 10px left' />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '10px')
  t.equal(node.style.left, '0px')

  node = render(<Base absolute='top 10px left 15px' />)
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.top, '10px')
  t.equal(node.style.left, '15px')

  node = render(<Base relative='top left' />)
  t.equal(node.style.position, 'relative')
  t.equal(node.style.top, '0px')
  t.equal(node.style.left, '0px')

  node = render(<Base fixed='top left' />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.top, '0px')
  t.equal(node.style.left, '0px')

  node = render(<Base fixed />)
  t.equal(node.style.position, 'fixed')
  t.equal(node.style.top, '')
  t.equal(node.style.left, '')

  node = render(<Base absolute={{right: 1}} />, {uiTheme: {scale: [4, 8]}})
  t.equal(node.style.position, 'absolute')
  t.equal(node.style.right, '8px')
  t.equal(node.style.left, '')

  t.end()
})

test('<Base/> clear', t => {
  const {render} = vdux()
  let node

  node = render(<Base clear />)
  t.equal(node.style.clear, 'both')

  node = render(<Base clear='left' />)
  t.equal(node.style.clear, 'left')

  t.end()
})

test('<Base/> transition/cursor/pointer', t => {
  const {render} = vdux()
  let node

  node = render(<Base transition='all 0.15s' />)
  t.equal(node.style.transition, 'all 0.15s')

  node = render(<Base cursor='pointer' />)
  t.equal(node.style.cursor, 'pointer')

  node = render(<Base pointer />)
  t.equal(node.style.cursor, 'pointer')

  t.end()
})
