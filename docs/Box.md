# Box

Flexbox layout cell (ported to vdux with some modifications from [reflexbox](https://github.com/jxnblk/reflexbox).

## Usage

You can use `<Box/>` in conjunction with the `<Flex/>` component to achieve flexbox based layouts:

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

## <Box/> - props

  * `flex` - Boolean|Number. Sets `display: flex`.
  * `...<Base/> props` - All the props you can pass to [base](https://github.com/vdux-components/base).
