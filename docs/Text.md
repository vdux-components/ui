# Text

Text rendering component

## Usage

Use this as a convenience for rendering text. It gives you a nice shorthand for common text-rendering style changes.

```javascript
function render () {
  return (
    <Text bold transform='capitalize'>
      this is some text
    </Text>
  )
}
```

## API - props

  * `font` - Font family. Checks the `fonts` key in your base theme, and if it exists, indexes into it. If something is found, it will use that font, otherwise it'll use the literal value.
  * `bold` - Boolean. Whether or not to bold the text.
  * `italic` - Set font style to italic.
  * `weight` - Font weight. Will check for `weightScale` in your theme and if found, will index into it using this prop. If nothing is found in the theme, the literal value will be used.
  * `lh` - Line-height. Checks for `lineHeightScale` in your theme and indexes into it if possible, otherwise uses the literal.
  * `fs` - Font size. Sets the `font-size` css property.

## Theming

The `<Text/>` component can also be themed by setting the following properties in the `baseTheme` key of your context:

  * `fonts` - A map of keys to font family names. E.g. `{code: 'monospace', ornate: 'serif'}`.
  * `weightScale` - A keyed map of font weights. Can be an object with named keys or a simple array that you index into.
  * `lineHeightScale` - Same as the others, but with line heights.

## License

MIT
