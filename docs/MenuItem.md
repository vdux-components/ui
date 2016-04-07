# MenuItem

MenuItem component for nesting inside of the [Menu](https://github.com/vdux-components/ui/tree/master/docs/Menu.md) component.

## Usage

```javascript
import {Menu, MenuItem} from 'vdux-ui'

function SearchButton ({props}) {
  return (
    <Menu>
      <MenuItem onClick={navigate('/search')}>Search</MenuItem>
      <MenuItem onClick={navigate('/profie')}>Profile</MenuItem>
    </Menu>
  )
}
```

## API - props

  * `bgColor` - Sets the background color. Defaults to 'primary'
  * `text` - An alternative to passing `children`
  * `icon` - An icon name, to be rendered inside of an `<Icon/>` component as the inner contents of the button
  * `highlight` - Boolean. Changes the background color to be either slightly lighter or slightly darker (if the color is 'dark', it gets lighter, if the color is 'light' it gets darker). Useful for implementing hover effects.

## License

MIT
