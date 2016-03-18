# DropdownMenu

Menu to be put inside of a dropdown that will get absolutely positioned within the Dropdown container.

## Example

```javascript
function render () {
  return (
    <Dropdown>
      <button>Settings</button>
      <DropdownMenu>
        <li>Change username</li>
        <li>Change password</li>
      </DropdownMenu>
    </Dropdown>
  )
}
```

## API - props

  * `open` - Whether or not the menu is open
  * `top` - Align it with the top edge
  * `right` - Align it with the right edge
  * `column` - Defaults to true. If you pass false, the menu will be laid out horizontally.

## License

MIT
