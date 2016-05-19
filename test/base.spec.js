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

test('<Base/> supports color props', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='white'/>)
  t.equal(node.style.color, 'rgb(255, 255, 255)', 'color')

  node = render(<Base bgColor='black'/>)
  t.equal(node.style.backgroundColor, 'rgb(17, 17, 17)', 'bgColor')

  t.end()
})

test('<Base/> supports padding props', t => {
  const {render} = vdux()
  let node

  node = render(<Base px='s' />)
  t.equal(node.style.paddingLeft, defaultTheme.scale.s + 'px', 'px - paddingLeft')
  t.equal(node.style.paddingRight, defaultTheme.scale.s + 'px', 'px - paddingRight')

  node = render(<Base py='s' />)
  t.equal(node.style.paddingTop, defaultTheme.scale.s + 'px', 'py - paddingTop')
  t.equal(node.style.paddingBottom, defaultTheme.scale.s + 'px', 'py - paddingBottom')

  t.end()
})

test('<Base/> supports margin props', t => {
  const {render} = vdux()
  let node

  node = render(<Base mt='s' />)
  t.equal(node.style.marginTop, defaultTheme.scale.s + 'px', 'mt - marginTop')
  t.equal(node.style.marginBottom, '', 'mt - marginBottom (unset)')

  t.end()
})

test('<Base/> supports rounding', t => {
  const {render} = vdux()
  let node

  node = render(<Base circle={true} />)
  t.equal(node.style.borderRadius, '9999px', 'circle prop')

  node = render(<Base rounded={true} />)
  t.equal(node.style.borderRadius, defaultTheme.borderRadius + 'px', 'rounded prop')

  node = render(<Base pill={true} />)
  t.equal(node.style.borderRadius, '9999px', 'pill prop')

  t.end()
})

test('<Base/> supports alternate tags', t => {
  const {render} = vdux()
  let node

  node = render(<Base tag='a'/>)
  t.equal(node.tagName, 'A', 'tag prop')

  t.end()
})

test('<Base/> children', t => {
  const {render} = vdux()
  let node

  node = render(<Base>test</Base>)
  t.equal(node.innerText, 'test', 'children')

  t.end()
})

test('<Base/> size props', t => {
  const {render} = vdux()
  let node

  node = render(<Base wide />)
  t.equal(node.style.width, '100%', 'wide')

  node = render(<Base tall />)
  t.equal(node.style.height, '100%', 'tall')

  t.end()
})

test('<Base/> font/text props', t => {
  const {render} = vdux()
  let node

  node = render(<Base fs='10px' />)
  t.equal(node.style.fontSize, '10px', 'fs (fontSize)')

  node = render(<Base fs={0} />, {uiTheme: {fontScale: [10]}})
  t.equal(node.style.fontSize, '10px', 'fs (fontSize - scaled)')

  node = render(<Base ellipsis />)
  t.equal(node.style.textOverflow, 'ellipsis', 'textOverflow - ellipsis')
  t.equal(node.style.whiteSpace, 'nowrap', 'whiteSpace - ellipsis')
  t.equal(node.style.overflow, 'hidden', 'overflow - ellipsis')

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

test('<Base/> supports rgba() colors', t => {
  const {render} = vdux()
  let node

  node = render(<Base color='rgba(blue, 0.5)' />)
  t.equal(node.style.color, 'rgba(0, 136, 238, 0.498039)', 'rgba() color')

  node = render(<Base border='1px solid rgba(blue, 0.5)' />)
  t.equal(node.style.border, '1px solid rgba(0, 136, 238, 0.498039)', 'rgba() within border')

  t.end()
})
