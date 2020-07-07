# ObservableHQ Viewer 

This project makes it simple to preview an [Observablehq](https://observablehq.com/) notebook outside Observablehq UI.

## Usage

1. #### `https://observablehq-viewer.glitch.me/USER/NOTEBOOK`
1. #### `https://observablehq-viewer.glitch.me/USER/NOTEBOOK?cells=cellname1,cellname2`
1. #### `https://observablehq-viewer.glitch.me/USER/NOTEBOOK?cells=cellname1,cellname2&fullwidth=1`


#### Examples



### [`https://observablehq-viewer.glitch.me/@fil/synchronized-projections`](https://observablehq-viewer.glitch.me/@fil/synchronized-projections)

from [`@fil/synchronized-projections`](https://observablehq.com/@fil/synchronized-projections)

### [`https://observablehq-viewer.glitch.me/@mbostock/voronoi-stippling`](https://observablehq-viewer.glitch.me/@mbostock/voronoi-stippling)

from [`@mbostock/voronoi-stippling`](https://observablehq.com/@mbostock/voronoi-stippling)


### Named Cells

You can target only interesting cells and let code cells out of your preview. You will need named cells

```js

cellName = {
  
}
```
#### Example

Take this https://observablehq.com/@johnburnmurdoch/bar-chart-race

Here you can preview only the cell names `chart` 

### [`https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?cells=chart`](https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?cells=chart)


or the whole notebook

### [`https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race`](https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race)



### `https://observablehq-viewer.glitch.me/USER/NOTEBOOK?cells=cellname1,cellname2`



or multiple cells

https://observablehq-viewer.glitch.me/@radames/hello-d3fc-webgl?cells=title,chartEl

### Full Width

Pass `fullwidth=1` param to render the cells on 100% of viewport, disabling `max-width: 64rem` that Observablehq UI defaults.

#### Example


### [`https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?cells=chart&fullwidth=1`](https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?cells=chart&fullwidth=1)


or the whole notebook

### [`https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?fullwidth=1`](https://observablehq-viewer.glitch.me/@johnburnmurdoch/bar-chart-race?fullwidth=1)


#### TODOS
 - link back to original notebook on Observablehq
 - notebook author information on preview
 - change page title to notebook title (fetch title from observablehq api)
