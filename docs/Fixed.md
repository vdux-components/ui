# Fixed

Fixed position renderer for nav bars and other things you want to stay in position while the user scrolls.

## Usage

Render nav bars in different positions:

```javascript
function Nav () {
  return (
    <Fixed top>
      <Flex>
        {
          navItems.map(item => <a href={item.url}>{item.name}</a>)
        }
      </Flex>
    </Fixed>
  )
}
```

## API - props

  * `top` - Boolean. Fix it to the top of the screen (sets `top: 0`)
  * `bottom` - Boolean. Fix it to the bottom of the screen (sets `bottom: 0`)
  * `left` - Boolean. Fix it to the left side of the screen (sets `left: 0`)
  * `right` - Boolean. Fix it to the right side of the screen (sets `right: 0`)
  * `z` - Set the z-index.

## License

MIT
