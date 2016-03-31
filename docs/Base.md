# base

Low-level [presentational](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.lb1ox895i) UI component, inspired heavily (read: copied entirely) from [rebass](https://github.com/jxnblk/rebass).

## Usage

This is not intended for direct use in application code. It's intended to be used as a low-level component consumed by other reusable UI components, though you're free to use it directly if you want as well.

## API

`<Base/>` provides a variety of styling-related props:

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
import {Base} from 'vdux-ui'

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

  * `absolute`
  * `fixed`
  * `relative`

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

### Size

  * `wide` - Sets `width: 100%`
  * `tall` - Sets `height: 100%`
  * `sq` - Set width/height simultaneously
  * `w` - Set width. Uses `scale` theme property.
  * `h` - Set height. Uses `scale` theme property.

### Miscellaneous

  * `fs` - Font size. Sets the `font-size` css property. This will also be used to select line heights from your `lineHeightScale` theme property, if they share a key. However, you can always explicitly override this by passing an `lh` prop.
  * `ellipsis` - Boolean. Sets `text-overflow: ellipsis`.
  * `clear` - Boolean|String. If `true` sets `clear: both`. Otherwise sets the clear attribute to the value passed.
  * `cursor` - String. Set cursor.
  * `pointer` - Boolean - shorthand for `cursor='pointer'`.
  * `transition` - String. Set `transition` style.

### baseStyle

If you are creating a reusable component and you want to add custom style properties, you should use the `baseStyle` prop to add your style, and then forward the `style` prop, which will supercede anything in `baseStyle` or anything set by the `<Base/>` component itself.

## License

MIT
