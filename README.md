# ObservableHQ Viewer 

This project makes it simple to preview an [Observablehq](https://observablehq.com/) notebook outside Observablehq UI.

## Usage

1. #### `https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK`
1. #### `https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2`
1. #### `https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2&fullwidth=1`


#### Examples



### [`https://observablehq-viewer.radamar.workers.dev/@fil/synchronized-projections`](https://observablehq-viewer.radamar.workers.dev/@fil/synchronized-projections)

from [`@fil/synchronized-projections`](https://observablehq.com/@fil/synchronized-projections)

### [`https://observablehq-viewer.radamar.workers.dev/@mbostock/voronoi-stippling`](https://observablehq-viewer.radamar.workers.dev/@mbostock/voronoi-stippling)

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

### [`https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart`](https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart)


or the whole notebook

### [`https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race`](https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race)



### `https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2`



or multiple cells

https://observablehq-viewer.radamar.workers.dev/@radames/hello-d3fc-webgl?cells=title,chartEl

### Full Width

Pass `fullwidth=1` param to render the cells on 100% of viewport, disabling `max-width: 64rem` that Observablehq UI defaults.

#### Example


### [`https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart&fullwidth=1`](https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart&fullwidth=1)


or the whole notebook

### [`https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?fullwidth=1`](https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?fullwidth=1)


#### TODOS
 - link back to original notebook on Observablehq
 - notebook author information on preview
 - change page title to notebook title (fetch title from observablehq api)
