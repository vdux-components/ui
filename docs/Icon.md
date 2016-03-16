# Icon

Render icons using the icon font of your choice

## Usage

In order to use this, you'll need to include a stylesheet and an icon font in your project. The default theme is setup to work with the material design icon font. To make that work, just drop this into the head of your page:

`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />`

If you want to use your own font, you can configure the `iconTag` and `iconClass` theme properties appropriately.

```javascript
import {Icon} from 'vdux-ui'

function SearchButton
  return (
    <button>
      <Icon name='search' />
    </button>
  )
}
```

## API - props

  * `name` - String - The name of the icon
  * `...<Text/> props` - The rest of the props are forwarded to the Text component.

## License

MIT
