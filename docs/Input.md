# Input

Input field component

## Usage

Generate input components with some of the boilerplate (input container, label, error message) handled for you. Use it like this:

```javascript
function FirstNameField () {
  return (
    <Input onChange={updateFirstName} rounded label='First name' invalid={false} />
  )
}
```

## API - props

  * `rounded` - Boolean|String. Set roundedness.
  * `invalid` - Boolean. Whether the input is in a valid state
  * `label` - String|VNode. The contents of the label you want. You can also specify this as the children of the input node.
  * `name` - String. Name of the input
  * `message` - String|VNode. A message to show (e.g. a validation error)
  * `containerStyle` - Style object to be applied to the input container
  * `labelStyle` - Style object to be applied to the label
  * `containerProps` - Props to pass to the container element
  * `border` - Boolean. Indicates whether or not the input should have a border.
  * `classes` - Object. If you want to set classes on any of the elements you may do so here. This object can have three properties:

    * `container` - Container class
    * `label` - Label class
    * `input` - Input class

    Each of these properties may be an array/object describing multiple class names to add/remove.

## API - children

  The children of the input will be used as the `label` prop. This is just an alternate syntax for specifying label, there is no other difference.

## License

MIT
