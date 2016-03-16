# Card

Rectangular box with a border and shadow.

## Usage

You can use this to render a tiled feed and other such things:

```javascript
function Feed ({props}) {
  const {items} = props

  return (
    <Flex column>
      {
        items.map(item => <Card><Item item={item} /></Card>)
      }
    </Flex>
  )
}
```

## API - props

  * `width` - Set the width of the card.

## Theme props

  * `textColor` - Default color of text within your card.
  * `cardShadow` - Default shadow to be applied to your card.

## License

MIT
