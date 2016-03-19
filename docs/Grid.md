# Grid

Grid layout component

## Usage

Use `<Grid/>` to layout a bunch of items as a tiled feed, like this:

```javascript
import {Grid} from 'vdux-ui'

function render ({props}) {
  const {newsFeedItems} = props

  return (
    <Grid columnAlign='start center'>
      {
        newsFeedItems
      }
    </Grid>
  )
}
```

## <Grid/> - props

  * `itemsPerRow` - Number of items you want in each row
  * `rowAlign` - Flexbox align parameter for the rows (e.g. `start center`)
  * `columnAlign` - Flexbox align parameter for the columns
