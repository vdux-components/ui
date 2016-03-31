# ui

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Collection of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.lb1ox895i) vdux components inspired by React's [rebass](https://github.com/jxnblk/rebass).

## Installation

    $ npm install vdux-ui

## Philosophy

All of the components in vdux-ui are stateless and largely logicless. They are pure functions of their arguments (and your contextual theme). This makes them easy to test and easy to think about.

## UI Components

  * [Avatar](https://github.com/vdux-components/ui/tree/master/docs/Avatar.md) - Circular (by default) component for rendering a user's avatar
  * [Block](https://github.com/vdux-components/ui/tree/master/docs/Block.md) - Box with some default padding/margin and optional borders
  * [Button](https://github.com/vdux-components/ui/tree/master/docs/Button.md) - Just a button
  * [Card](https://github.com/vdux-components/ui/tree/master/docs/Card.md) - Block with shadow and some extra styling.
  * [Divider](https://github.com/vdux-components/ui/tree/master/docs/Divider.md) - Dividers for menus
  * [DecoLine](https://github.com/vdux-components/ui/tree/master/docs/DecoLine.md) - Semi-transparent decorative line to put on top of visually rich backgrounds (similar to divider, but looks nicer on top of photos).
  * [Dropdown](https://github.com/vdux-components/ui/tree/master/docs/Dropdown.md) - Relatively positioned dropdown container.
  * [DropdownMenu](https://github.com/vdux-components/ui/tree/master/docs/DropdownMenu.md) - Dropdown menu component
  * [Fixed](https://github.com/vdux-components/ui/tree/master/docs/Fixed.md) - Fixed position container.
  * [Grid](https://github.com/vdux-components/ui/tree/master/docs/Grid.md) - Grid, useful for pinterest-style tile feeds, etc.
  * [Icon](https://github.com/vdux-components/ui/tree/master/docs/Icon.md) - Font-based icon component
  * [LogoButton](https://github.com/vdux-components/ui/tree/master/docs/LogoButton.md) - Button with an image in it (useful for OAuth style buttons).
  * [Menu](https://github.com/vdux-components/ui/tree/master/docs/Menu.md) - Horizontal/vertical menus with spacing of menu items
  * [Text](https://github.com/vdux-components/ui/tree/master/docs/Text.md) - Render text according to your theme and some convenience options
  * [Tooltip](https://github.com/vudx-components/ui/tree/master/docs/Tooltip.md) - Stateless tooltip component
  * [Base](https://github.com/vdux-components/ui/tree/master/docs/Base.md) - The base component out of which all other vdux-ui components are made. Use this to create your own reusable components.

## Layout

  * [Flex](https://github.com/vdux-components/ui/tree/master/docs/Flex.md) - A flexbox container component. Use it for rendering rows/columns.
  * [Box](https://github.com/vdux-components/ui/tree/master/docs/Box.md) - Goes inside your flexbox container.

## Theming

vdux-ui uses the `uiTheme` key in context to find its theme. It will look for theme properties here first, and secondly in its [default theme](https://github.com/vdux-components/ui/tree/master/src/default-theme.js). So you can do:

```javascript
import myTheme from './my-theme'

render(<App state={state} />, {uiTheme: myTheme})
```

To override any of the default theming options or add your own.

## Common options

The following are options provided by the `<Base />` component and as such are available when using any vdux-ui component:

### Rounding

You may pass:

  * `circle=true` as a prop and you'll get a circular element (i.e. `borderRadius=99999px`)
  * `pill=true` is an alias for circle
  * `rounded=true` sets borderRadius to `borderRadius` from your theme

### Padding/margin

Padding and margin are specified by indexing into the `scale` array of your theme. Each padding/margin property accepts an index into that array, like this:

`<Base px={1} />` -> `<div style='padding-left: 4px; padding-right: 4px'></div>`

You may specify p or m for each of these, but for simplicity i'll just write it out for padding:

  * `p` - Pad all sides
  * `px` - Pad the x-axis (i.e. left/right)
  * `py` - Pad the y-axis (i.e. top/bottom)
  * `pt` - Pad the top
  * `pl` - Pad the left side
  * `pr` - Pad the right side
  * `pb` - Pad the bottom

### Colors

You can also specify colors in your theme, and then reference those colors by name in the `color` and `bgColor` props. E.g.

```javascript
import Base from 'vdux-base'

function render ({props}) {
  return <Base color='red'>{props.errorMessage}</Base>
}
```

And then in the root of your file:

```javascript
const {render} = vdux()

render(<App/>, {uiTheme: {colors: myColors}})
```

But you may also pass any valid color string and it will be passed on through if there is no corresponding key in the theme's color map.

### Positioning

Positioning attributes, inspired by [nib's position mixin](http://nibstyl.us/docs/#position) allow you an expressive shorthand for specifying different types of positioning.

  * `absolute` - Boolean|String|Object
  * `fixed` - Boolean|String|Object
  * `relative` - Boolean|String|Object

Each take a string of the form `top|bottom [n] left|right [n]`. For example:

```javascript
import {Text} from 'vdux-ui'

function render () {
  return (
    <Text absolute='bottom left'>Invalid username</Text>
  )
}
```

You may also specify them as boolean attributes to solely set the `position` property. E.g.

`<Text relative>Invalid username</Text>`

Lastly, you can use object syntax if you want as well:

`<Text relative={{right: '5px'}}>Invalid username</Text>`

### Miscellaneous

  * `wide` - Sets `width: 100%`
  * `tall` - Sets `height: 100%`
  * `fs` - Font size. Sets the `font-size` css property.
  * `ellipsis` - Boolean. Sets `text-overflow: ellipsis`.
  * `clear` - Boolean|String. If `true` sets `clear: both`. Otherwise sets the clear attribute to the value passed.
  * `cursor` - String. Set cursor.
  * `pointer` - Boolean - shorthand for `cursor='pointer'`.
  * `transition` - String. Set `transition` style.

But you may also pass any valid color string and it will be passed on through if there is no corresponding key in the theme's color map.

## License

MIT
