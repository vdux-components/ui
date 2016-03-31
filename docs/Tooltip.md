# Tooltip

Stateless tooltip component.

## Usage

Tooltip will absolutely position itself relative to its nearest relatively positioned container according to the `placement` prop when `show` is true:

```javascript
function render () {
  return (
    <Button>
      My Button
      <Tooltip placement='right' show={hovering}>
        This is what my button does
      </Tooltip>
    </Button>
  )
}
```

## API - props

  * `placement` - `top/left/bottom/right`. Where you want it to be relative to its container.
  * `space` - How far away from its container.
  * `show` - Whether or not the tooltip is currently visible

## License

MIT
