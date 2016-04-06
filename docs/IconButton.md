# IconButton

Button enhanced with the ability to add a small image or icon on the lefthand side, along with an optional divider.

## Usage

Useful for OAuth login buttons and similar types of things, e.g.

```javascript
function render () {
  return (
    <IconButton img='images/google_plus.png'>
      Login with Google
    </IconButton>
  )
}
```

## API - props

  * `icon` - The name of the icon you want to use, will be rendered with `<Icon/>`
  * `img` - If specified, use an image instead of an `<Icon/>`
  * `iconSize` - The size of the icon (square)
  * `divider` - Defaults to true. Whether or not to include a vertical dividing line between the image and the text.

## License

MIT
