# Flex

Flexbox layout container (ported to vdux with some modifications from [reflexbox](https://github.com/jxnblk/reflexbox).

## Usage

You can use `<Flex/>` in conjunction with the `<Box/>` component to achieve flexbox based layouts:

```javascript
import {Flex, Box} from 'vdux-layout'

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

  * `justify` - `start/end/center/space-around/space-between`. Sets `justifyContent` style property.
  * `align` - `start/end/stretch/center/baseline`. Sets `alignItems` style property.
  * `auto` - Boolean. Sets `flex: 1 1 auto`
  * `wrap` - Boolean. Sets `flex-wrap: wrap`
  * `column` - Boolean. Defaults to false, which means row.
  * `gutter` - Set negative left/right margins to compensate for `<Box />` padding.
  * `...<Base/> props` - All the props you can pass to [base](https://github.com/vdux-components/base).

## License

MIT
