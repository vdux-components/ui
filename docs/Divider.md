# Divider

Horizontal rule divider, useful for separating groups of menu items.

## Usage

```javascript
function render () {
  return (
    <Menu>
      <div>Account Settings</div>
      <div>Reset Password</div>
      <Divider/>
      <div>Billing</div>
      <div>Upgrade Account</div>
      <Divider/>
      <div>Logout</div>
    </Menu>
  )
}
```

## API - props

  * `color` - The color of the divider. Defaults to the `divider` color in your themes color map.

## Theming

  Your color map may specify a `divider`, which will be used as the default divider color (which you can always override with the `color` prop if you want).

## License

MIT
