# Avatar

Circular (or not) avatar component

## Usage

Use it to render avatars.

```javascript
<Avatar src='/images/cat.jpg' />
```

## API - props

  * `src` - URL of the image
  * `circle` - Defaults to true. Makes it a circle.
  * `size` - Defaults to 32. Sets width/height simultaneously.

## Theming

Avatar makes use of two themable properties, configurable in the context key `uiTheme`.

  * `circularAvatars` - Boolean. Defaults to true. If you set it to false, your avatars will default to being square.
  * `avatarScale` - Array of sizes. If you use this, you can set a scale for your avatars that your `size` prop may index into.

## License

MIT
