# Flex

Flexbox layout cell (ported to vdux with some modifications from [reflexbox](https://github.com/jxnblk/reflexbox).

## Usage

You can use `<Box/>` in conjunction with the `<Flex/>` component to achieve flexbox based layouts:

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

## <Box/> - props

  * `auto` - Boolean. Sets `flex: 1 1 auto`.
  * `flex` - Boolean. Sets `display: flex`.
  * `col` - Number. Sets width/flex-basis on a 12 column grid.
  * `...<Base/> props` - All the props you can pass to [base](https://github.com/vdux-components/base).
