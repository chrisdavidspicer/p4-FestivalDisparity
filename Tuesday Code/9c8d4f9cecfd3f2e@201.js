export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# SVG Attempt`
)});
  main.variable(observer()).define(["html","micPath"], function(html,micPath){return(
html`
<svg width=100 height=100 style='border: 1px dashed'>
  <path d='${micPath}' fill='none' stroke='#000' stroke-width=2 transform='translate(50,0)' />
</svg>
<code>100px</code>
`
)});
  main.variable(observer("micPath")).define("micPath", function(){return(
`M 0 25 L -50 85 L -35 100 L 25 50 C 45 50 50 25 38 12 C 25 0 0 5 0 25`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`
<svg viewbox="0 0 width=100 height=100">
  <path d='M0,0 C50,40 50,70 20,100 L0,85 L-20,100 C-50,70 -50,40 0,0'
    fill='none' stroke='#000' stroke-width=2 transform='translate(50,0)' />
</svg>
`
)});
  main.variable(observer()).define(["html"], function(html){return(
html`<svg viewBox="0 0 250 100" style='border:1px solid'>
  <style>
    .small { font: 7px sans-serif; }
  </style>
  <rect x="45" y="55" width="60" height="1" />
  <rect x="145" y="55" width="60" height="1" />
  <text x="62" y="50" class="small">🎸</text>
  <text x="75" y="54.5" class="small">🥁</text>
  <text x="55" y="54.5" class="small">🎹</text>
  <text x="65" y="54.5" class="small">🤘</text>
  <text x="70" y="50.5" class="small">🎤</text>
  
  
</svg>
`
)});
  main.variable(observer()).define(["html","d3","emojis"], function(html,d3,emojis)
{
  const el = html`
    <svg>
      <text />
      <text />
      <text />
      <text />
      <text />
    </svg
`
const svg = d3.select(el)

return svg.selectAll('text').data(emojis)
}
);
  main.variable(observer()).define(["html","d3","emojis"], function(html,d3,emojis)
{
  const svg = html`
    <svg width=400 height=400 style='border: 1px dashed'>
    </svg>
  `
 
  d3.select(svg).selectAll('text')
    .data(emojis).enter().append('text')
    .attr('x', (d, i) => i * 50 + 50)
    .attr('y', 200)
    .text((d) => d)
  
  return svg
}
);
  main.variable(observer("m")).define("m", function(){return(
10
)});
  main.variable(observer("width")).define("width", function(){return(
400
)});
  main.variable(observer("height")).define("height", function(){return(
400
)});
  main.variable(observer("xAxis")).define("xAxis", ["height","margin","d3","x","width"], function(height,margin,d3,x,width){return(
g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
)});
  main.variable(observer("yAxis")).define("yAxis", ["margin","d3","y","height"], function(margin,d3,y,height){return(
g => g
    .attr("transform", `translate(${margin.left},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call(g => g.select(".domain").remove())
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  main.variable(observer("emojis")).define("emojis", function(){return(
['🎤', '🎸', '🥁', '🎹', '🤘']
)});
  return main;
}
