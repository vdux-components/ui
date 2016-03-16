# Flex

Flexbox layout container (ported to vdux with some modifications from [reflexbox](https://github.com/jxnblk/reflexbox).

## Usage

You can use `<Flex/>` in conjunction with the `<Box/>` component to achieve flexbox based layouts:

```javascript
import {Flex, Box} from 'vdux-ui'

function render ({props}) {
  const {items} = props

  return (
    <Flex justify='space-between' align='center'>
      {
        items.map(item =>
          <Box auto>
            <Tile item={item} />
          </Box>
        )
      }
    </Flex>
  )
}
```

## API - props

  * `align` - Sets `justifyContent` and `alignItems`. You separate the two with a space, with `justifyContent` coming first. E.g. `space-around center`.
  * `flex` - Boolean|Number. If `true`, sets `flex: 1 1 auto`. Otherwise accepts a percentage as a number, and sets `flex: 1 1 n%` accordingly.
  * `wrap` - Boolean. Sets `flex-wrap: wrap`
  * `column` - Boolean. Defaults to false, which means row.
  * `gutter` - Set negative left/right margins to compensate for `<Box />` padding.
  * `...<Base/> props` - All the props you can pass to [base](https://github.com/vdux-components/base).

## License

MIT
