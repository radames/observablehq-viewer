const index = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/light.min.css">
    <title>Observablehq viewer</title>
</head>

<body><h1 id="observablehq-viewer">ObservableHQ Viewer</h1>
<p>This project makes it simple to preview an <a href="https://observablehq.com/">Observablehq</a> notebook outside Observablehq UI.</p>
<h2 id="usage">Usage</h2>
<ol>
<li><h4 id="httpsobservablehq-viewerradamarworkersdevusernotebook"><code>https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK</code></h4>
</li>
<li><h4 id="httpsobservablehq-viewerradamarworkersdevusernotebookcellscellname1cellname2"><code>https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2</code></h4>
</li>
<li><h4 id="httpsobservablehq-viewerradamarworkersdevusernotebookcellscellname1cellname2fullwidth1"><code>https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2&amp;fullwidth=1</code></h4>
</li>
</ol>
<h4 id="examples">Examples</h4>
<h3 id="httpsobservablehq-viewerradamarworkersdevfilsynchronized-projections"><a href="https://observablehq-viewer.radamar.workers.dev/@fil/synchronized-projections"><code>https://observablehq-viewer.radamar.workers.dev/@fil/synchronized-projections</code></a></h3>
<p>from <a href="https://observablehq.com/@fil/synchronized-projections"><code>@fil/synchronized-projections</code></a></p>
<h3 id="httpsobservablehq-viewerradamarworkersdevmbostockvoronoi-stippling"><a href="https://observablehq-viewer.radamar.workers.dev/@mbostock/voronoi-stippling"><code>https://observablehq-viewer.radamar.workers.dev/@mbostock/voronoi-stippling</code></a></h3>
<p>from <a href="https://observablehq.com/@mbostock/voronoi-stippling"><code>@mbostock/voronoi-stippling</code></a></p>
<h3 id="named-cells">Named Cells</h3>
<p>You can target only interesting cells and let code cells out of your preview. You will need named cells</p>
<pre><code class="language-js">
cellName = {

}</code></pre>
<h4 id="example">Example</h4>
<p>Take this <a href="https://observablehq.com/@johnburnmurdoch/bar-chart-race">https://observablehq.com/@johnburnmurdoch/bar-chart-race</a></p>
<p>Here you can preview only the cell names <code>chart</code> </p>
<h3 id="httpsobservablehq-viewerradamarworkersdevjohnburnmurdochbar-chart-racecellschart"><a href="https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart"><code>https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart</code></a></h3>
<p>or the whole notebook</p>
<h3 id="httpsobservablehq-viewerradamarworkersdevjohnburnmurdochbar-chart-race"><a href="https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race"><code>https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race</code></a></h3>
<h3 id="httpsobservablehq-viewerradamarworkersdevusernotebookcellscellname1cellname2-1"><code>https://observablehq-viewer.radamar.workers.dev/USER/NOTEBOOK?cells=cellname1,cellname2</code></h3>
<p>or multiple cells</p>
<p><a href="https://observablehq-viewer.radamar.workers.dev/@radames/hello-d3fc-webgl?cells=title,chartEl">https://observablehq-viewer.radamar.workers.dev/@radames/hello-d3fc-webgl?cells=title,chartEl</a></p>
<h3 id="full-width">Full Width</h3>
<p>Pass <code>fullwidth=1</code> param to render the cells on 100% of viewport, disabling <code>max-width: 64rem</code> that Observablehq UI defaults.</p>
<h4 id="example-1">Example</h4>
<h3 id="httpsobservablehq-viewerradamarworkersdevjohnburnmurdochbar-chart-racecellschartfullwidth1"><a href="https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart&amp;fullwidth=1"><code>https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?cells=chart&amp;fullwidth=1</code></a></h3>
<p>or the whole notebook</p>
<h3 id="httpsobservablehq-viewerradamarworkersdevjohnburnmurdochbar-chart-racefullwidth1"><a href="https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?fullwidth=1"><code>https://observablehq-viewer.radamar.workers.dev/@johnburnmurdoch/bar-chart-race?fullwidth=1</code></a></h3>
<h4 id="todos">TODOS</h4>
<ul>
<li>link back to original notebook on Observablehq</li>
<li>notebook author information on preview</li>
<li>change page title to notebook title (fetch title from observablehq api)</li>
</ul>
</body>

</html>`;

export default index;
