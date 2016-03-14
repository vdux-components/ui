# ui

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Collection of [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.lb1ox895i) vdux components inspired by React's [rebass](https://github.com/jxnblk/rebass).

## Installation

    $ npm install vdux-ui

## Philosophy

All of the components in vdux-ui are stateless and largely logicless. They are pure functions of their arguments (and your contextual theme). This makes them easy to test and easy to think about.

## UI Components

  * [Avatar](https://github.com/vdux-components/ui/tree/master/docs/Avatar.md) - Simple circular (by default) component for rendering a user's avatar
  * [Block](https://github.com/vdux-components/ui/tree/master/docs/Block.md) - Renders a box with some default padding/margin and optional borders
  * [Text](https://github.com/vdux-components/ui/tree/master/docs/Text.md) - Render text according to your theme and some convenience options
  * [Fixed](https://github.com/vdux-components/ui/tree/master/docs/Fixed.md) - Render a fixed position container.
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

### Miscellaneous

  * `wide` - Sets `width: 100%`
  * `tall` - Sets `height: 100%`
  * `fs` - Font size. Sets the `font-size` css property. Will grab values from the `fontScale` theme property if available.
  * `ellipsis` - Boolean. Sets `text-overflow: ellipsis`.

But you may also pass any valid color string and it will be passed on through if there is no corresponding key in the theme's color map.

## License

MIT
