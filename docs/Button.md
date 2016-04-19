# Button

Simple button component

## Usage

Render buttons with icons, text, and tooltips

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
  * `noselect` - Boolean. Set this to true to set `user-select: none`, and prevent the user from selecting the text.
  * `highlight` - Boolean. Changes the background color to be either slightly lighter or slightly darker (if the color is 'dark', it gets lighter, if the color is 'light' it gets darker). Useful for implementing hover effects.
  * `tooltip` - Tooltip message to show
  * `ttPlacement` - Placement of the tooltip (defaults to `top`)
  * `ttUi` - The tooltip component to render, defaults to Tooltip from vdux-ui
  * `ttShown` - Whether or not the tooltip is currently visible

## License

MIT
