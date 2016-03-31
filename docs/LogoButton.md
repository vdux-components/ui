# LogoButton

Button enhanced with the ability to add a small image on the lefthand side, along with an optional divider.

## Usage

Useful for OAuth login buttons and similar types of things, e.g.

```javascript
function render () {
  return (
    <LogoButton logo='images/google_plus.png'>
      Login with Google
    </LogoButton>
  )
}
```

## API - props

  * `logo` - The image you want to use.
  * `divider` - Defaults to true. Whether or not to include a vertical dividing line between the image and the text.

## License

MIT
