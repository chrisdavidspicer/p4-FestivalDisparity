import define1 from "./a2e58f97fd5e8d7c@567.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["bookmorewomenLarge.csv",new URL("./files/8e556114141ae212233176a46e12d6d820ac4a7521d0f456cbc099cdca3ceab3faf50a4e749ea34e760b838b2ae0241d717669dc664cae7aa56163c06c2bfafa",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
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
  main.variable(observer()).define(["md"], function(md){return(
md`**Showing how SVG elements work**`
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
  main.variable(observer()).define(["md"], function(md){return(
md`**Showing how selectAll works**`
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
  main.variable(observer()).define(["md"], function(md){return(
md`**Mapping 'femaleA' Data to SVG text**`
)});
  main.variable(observer()).define(["html","d3","data","emojis"], function(html,d3,data,emojis)
{
  const svg = html`
    <svg width=800 height=400 style='border: 1px dashed'>
    </svg>
  `
  const femaleArray = d3.range(data[0].femaleA).map(i => String(emojis[Math.floor(Math.random() * 5)]))
  const maleArray = d3.range(data[0].maleA).map(i => String(emojis[Math.floor(Math.random() * 5)]))
  
  d3.select(svg).selectAll('text')
    .data(femaleArray).enter().append('text')
    .attr('x', (d, i) => Math.random() * 100 + (i + 100))
    .attr('y', (d, i) => Math.random() * 100 + (i + 100))
    // .attr('
    .text((d) => d)
  
  d3.select(svg).selectAll('text')
    .data(maleArray).enter().append('text')
    .attr('x', (d, i) => Math.random() * 200 + (i + 400))
    .attr('y', (d, i) => Math.random() * 200 + i)
    // .attr('
    .text((d) => d)
  
  return svg
}
);
  main.variable(observer("assignEmoji")).define("assignEmoji", ["emojis"], function(emojis){return(
function assignEmoji(arr) {
    const emojiPoints = []
    for(const i in arr) {
        emojiPoints.push(emojis[Math.floor(Math.random() * 5)])
    }
    return emojiPoints
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`**Mapping Original Data to Random Dots**`
)});
  main.variable(observer("svg")).define("svg", ["d3","DOM","width","height","data","color"], function(d3,DOM,width,height,data,color)
{ 
  const svg = d3.select(DOM.svg(width, height))
  
  const g = svg.append("g").attr("transform", `translate(${width/4},${height/4})`) 
  let x_loc = 0
  let y_loc = 0
  const node = g.append("g")
    .selectAll('circle')
    .data(data)
    .join("circle")
    .attr("r", d => 5)
    .attr("cx", (d, i) => Math.random() * 100 + i)
    .attr("cy", (d, i) => Math.random() * 100 + i)
    .style("fill", (d, i) => color(i))
  
  return svg.node()
}
);
  main.variable(observer()).define(["md"], function(md){return(
md`**Mapping all keys of 'femaleA' data**`
)});
  main.variable(observer("svg2")).define("svg2", ["d3","DOM","width","height","data"], function(d3,DOM,width,height,data)
{ 
  const svg = d3.select(DOM.svg(width, height))
  
  const g = svg.append("g").attr("transform", `translate(${width/2},${height/2})`) 
  
  const node = g.append("g")
    .selectAll('text')
    .data(data).enter().append('text')
    .attr('x', (d, i) => -250 + i)
    .attr('y', (d, i) => i * 16 - 100)
    .text((d) => d3.range(d.femaleA))
  return svg.node()
}
);
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("bookmorewomenLarge.csv").text(), d3.autoType)
)});
  main.variable(observer()).define(["data"], function(data){return(
data.columns
)});
  main.variable(observer("fullArray")).define("fullArray", ["largeArray","data"], function(largeArray,data){return(
largeArray(data)
)});
  main.variable(observer("largeArray")).define("largeArray", ["d3","emojis"], function(d3,emojis){return(
function largeArray(thisData) {
  const newArray = []
    for(const i in thisData) {
        newArray.push({
            festival: thisData[i]['festival'],
            femaleA: {
                value: thisData[i]['femaleA'],
                point: d3.range(thisData[0].femaleA).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            },
            maleA: {
                value: thisData[i]['maleA'],
                point: d3.range(thisData[0].maleA).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            },
            femaleB: {
                value: thisData[i]['femaleB'],
                point: d3.range(thisData[0].femaleB).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            },
            maleB: {
                value: thisData[i]['maleB'],
                point: d3.range(thisData[0].maleB).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            },
            femaleC: {
                value: thisData[i]['femaleC'],
                point: d3.range(thisData[0].femaleC).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            },
            maleC: {
                value: thisData[i]['maleC'],
                point: d3.range(thisData[0].maleC).map(i => String(emojis[Math.floor(Math.random() * 5)]))
            }
        })
    }
  return newArray
}
)});
  main.variable(observer("emojiMap")).define("emojiMap", ["d3","data","emojis"], function(d3,data,emojis){return(
d3.range(data[0].femaleA).map(i => String(emojis[Math.floor(Math.random() * 5)]))
)});
  main.variable(observer("viewof festRadio")).define("viewof festRadio", ["Radio","data"], function(Radio,data){return(
Radio(data.map(i => i.festival).concat("All Festivals"), {value: "Coachella"})
)});
  main.variable(observer("festRadio")).define("festRadio", ["Generators", "viewof festRadio"], (G, _) => G.input(_));
  main.variable(observer("viewof yearRadio")).define("viewof yearRadio", ["Radio"], function(Radio){return(
Radio(["2020", "2019", "2018"], {value: "2020"})
)});
  main.variable(observer("yearRadio")).define("yearRadio", ["Generators", "viewof yearRadio"], (G, _) => G.input(_));
  main.variable(observer()).define(["festRadio"], function(festRadio){return(
festRadio
)});
  main.variable(observer("newMap")).define("newMap", ["data"], function(data){return(
data.map(i => i.festival)
)});
  main.variable(observer("emojis")).define("emojis", function(){return(
['🎤', '🎸', '🥁', '🎹', '🤘']
)});
  main.variable(observer("m")).define("m", function(){return(
10
)});
  main.variable(observer("width")).define("width", function(){return(
500
)});
  main.variable(observer("height")).define("height", function(){return(
500
)});
  main.variable(observer("margin")).define("margin", function(){return(
{top: 20, right: 30, bottom: 30, left: 40}
)});
  main.variable(observer("color")).define("color", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolateSinebow).domain([0,m-1])
)});
  const child1 = runtime.module(define1);
  main.import("Radio", child1);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3")
)});
  return main;
}
