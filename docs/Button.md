# Button

Simple button component

## Usage

Render buttons with icons, text, etc..

```javascript
import {Button} from 'vdux-ui'

function SearchButton ({props}) {
  return (
    <Button onClick={navigateTo('/search')} icon='search' />
  )
}
```

## API - props

  * `bgColor` - Sets the background color. Defaults to 'primary'.
  * `type` - Set the button type attribute. Defaults to 'button'
  * `text` - An alternative to passing `children`.
  * `icon` - An icon name, to be rendered inside of an `<Icon/>` component as the inner contents of the button.
  * `inverted` - Defaults to true - if you set it to false, then `color`/`theme` will be flipped.
  * `theme` - Set the color theme (if inverted is true, this is the background color)

## License

MIT
