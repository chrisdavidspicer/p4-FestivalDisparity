import define1 from "./654a60e85059f34a@136.js";
import define2 from "./a2e58f97fd5e8d7c@568.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["bookmorewomenLarge.csv",new URL("./files/8e556114141ae212233176a46e12d6d820ac4a7521d0f456cbc099cdca3ceab3faf50a4e749ea34e760b838b2ae0241d717669dc664cae7aa56163c06c2bfafa",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# The Music Festival Gender Problem`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Major Music festivals have a gender inequality problem. Of all the acts booked, the majority of the artists and band members are male. The following is a representation of the data compiled by [Book More Women](https://www.bookmorewomen.com), comparing all-male acts with acts featuring at least one female or non-binary member.`
)});
  main.variable(observer()).define(["md","viewof festRadio"], function(md,$0){return(
md`Select a festival: ${$0}`
)});
  main.variable(observer()).define(["md","viewof yearRadio"], function(md,$0){return(
md`Select a year: ${$0}`
)});
  main.variable(observer()).define(["md","displayfest","festRadio","yearRadio"], function(md,displayfest,festRadio,yearRadio){return(
md`## ${displayfest(festRadio)}, ${yearRadio}`
)});
  main.variable(observer()).define(["md","chooseFest","matchingFestival","maleYear"], function(md,chooseFest,matchingFestival,maleYear){return(
md`<h4>${chooseFest(matchingFestival)[maleYear]}% (Percentage of All-Male Bands)</h4>`
)});
  main.variable(observer()).define(["md","chooseFest","matchingFestival","femaleYear"], function(md,chooseFest,matchingFestival,femaleYear){return(
md`<h4>${chooseFest(matchingFestival)[femaleYear]}% (Percentage of Bands with One Female or Non-Binary Member)</h4>`
)});
  main.variable(observer()).define(["data"], function(data){return(
data[0].festival
)});
  main.variable(observer()).define(["html","width","height","d3","nodes","forceClusterCollision"], function(html,width,height,d3,nodes,forceClusterCollision)
{
  const svg = html`<svg width=${width} height=${height} style='border: 1px solid'></svg>`
  
  const group = d3.select(svg).append("g")
       .attr("transform", `translate(${width/2},${height/2})`)
  
  const node = group.selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.r)
      .style("fill", d => d.color)
      // .style("stroke", "slategray")
      .style("stroke-width", 1)
      .on("mouseenter", function(d) {
          d3.select(this)
            .style('fill', 'black')
            .style('transition-duration', '0.2s')
        
          group.append('rect')
            .attr('x', 10)
            .attr('y', 10)
            .attr('width', 100)
            .attr('height', 100)
            .style('border-radius', '50px')
      })
      .on('mouseleave', function(d) {
          d3.select(this)
          .style('fill', d => d.color);
      })

  
      group.append('text')
        .text(nodes[0].festival)
        .style('text-anchor', 'middle')
        .attr('x', 0)
        .attr('y', -150)
  
      // group.append('rect')
      //   .attr('x', 0)
      //   .attr('y', -150)
      //   .attr('width', 100)
      //   .attr('height', 100)
      
  
  const simulation = d3.forceSimulation()
        .force("collide", forceClusterCollision()
               .radius(d => d.r + 1)
               .strength(0.8)
               // .clusterPadding(10)
         )
        .force("x", d3.forceX().x(d => d.focusX).strength(.2))
        .force("y", d3.forceY().y(d => d.focusY).strength(.2))
   
  simulation
        .nodes(nodes)
        .on("tick", ticked)
  
  function hovered() {
    node
        .style('fill', 'black')
  }
  
  function ticked() {
    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
  }
  
  return svg
}
);
  main.variable(observer("createTooltip")).define("createTooltip", ["tooltip_w","tooltip_padding"], function(tooltip_w,tooltip_padding){return(
function createTooltip(group) {
  group
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', tooltip_w)
    .attr('height', 80)
    .style('fill', 'black');

  group
    .append('text')
    .attr('id', 'name')
    .attr('x', tooltip_padding)
    .attr('y', 30)
    .style('fill', 'white')
    .style('font-size', '12px')
    .style('font-weight', 'bold');

  group.append('text')
    .attr('id', 'field')
    .attr('x', tooltip_padding)
    .attr('y', 50)
    .style('font-size', '12px')
    .style('text-transform', 'capitalize')
    .style('fill', 'white');
}
)});
  main.variable(observer("tooltip_w")).define("tooltip_w", function(){return(
250
)});
  main.variable(observer("tooltip_padding")).define("tooltip_padding", function(){return(
10
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Data`
)});
  main.variable(observer("festivalAvg")).define("festivalAvg", ["d3","data"], function(d3,data){return(
{
  festival: "All Festivals",
  femaleA: Math.round(d3.mean(data.map(i => i.femaleA))),
  maleA: Math.round(d3.mean(data.map(i => i.maleA))),
  femaleB: Math.floor(d3.mean(data.map(i => i.femaleB))),
  maleB: Math.round(d3.mean(data.map(i => i.maleB))),
  femaleC: Math.round(d3.mean(data.map(i => i.femaleC))),
  maleC: Math.round(d3.mean(data.map(i => i.maleC)))
}
)});
  main.variable(observer("nodes")).define("nodes", ["d3","chooseFest","matchingFestival","femaleYear","m","colorF","maleYear","colorM"], function(d3,chooseFest,matchingFestival,femaleYear,m,colorF,maleYear,colorM){return(
d3.range(chooseFest(matchingFestival)[femaleYear]).map(() => {
  let i = 6
  let r = Math.random() * 10 + 8
  // let focusX = i + 10
  let focusX = Math.cos(i / m * Math.PI * 2) - 50
  // let focusY = 10
  let focusY = Math.sin(Math.PI * 2)
  let color = colorF(d3.randomInt(i,9)())
  let dataPoint = {festival: (chooseFest(matchingFestival).festival), cluster: i, r: r, x: focusX, y: focusY, focusX: focusX, focusY: focusY, color: color}
 
  return dataPoint
}).concat(d3.range(chooseFest(matchingFestival)[maleYear]).map(() => {
  let i = 6
  let r = Math.random() * 10 + 8
  // let focusX = 10
  let focusX = Math.cos(i / m * Math.PI * 2) + 50
  // let focusY = 10
  let focusY = Math.sin(Math.PI * 2)
  let color = colorM(d3.randomInt(i,9)())
  let dataPoint = {festival: (chooseFest(matchingFestival).festival), cluster: i, r: r, x: focusX, y: focusY, focusX: focusX, focusY: focusY, color: color}
 
  return dataPoint
}))
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("bookmorewomenLarge.csv").text(), d3.autoType)
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Variables`
)});
  main.variable(observer("matchingFestival")).define("matchingFestival", ["data","festRadio"], function(data,festRadio){return(
data.find(
    (festival) => festival.festival === festRadio
  )
)});
  main.variable(observer("femaleYear")).define("femaleYear", ["setYear","yearRadio"], function(setYear,yearRadio){return(
`female${setYear(yearRadio)}`
)});
  main.variable(observer("maleYear")).define("maleYear", ["setYear","yearRadio"], function(setYear,yearRadio){return(
`male${setYear(yearRadio)}`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Functions`
)});
  main.variable(observer("displayfest")).define("displayfest", function(){return(
function displayfest(fest){
  if (fest != "All Festivals") {
    return `${fest} Music Festival`
  } else {
  return fest
  }
}
)});
  main.variable(observer("chooseFest")).define("chooseFest", ["matchingFestival","festivalAvg"], function(matchingFestival,festivalAvg){return(
function chooseFest() {
  if (!matchingFestival) {
    return festivalAvg
  } return matchingFestival
}
)});
  main.variable(observer("setYear")).define("setYear", function(){return(
function setYear(yearRadio) {
  switch(yearRadio) {
    case "2020" :
      return "A"
      
    case "2019" :
      return "B"
      
    case "2018" :
      return "C"
  }
}
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Radio Buttons`
)});
  main.variable(observer("viewof festRadio")).define("viewof festRadio", ["Radio","data"], function(Radio,data){return(
Radio(data.map(i => i.festival).concat("All Festivals"), {value: "All Festivals"})
)});
  main.variable(observer("festRadio")).define("festRadio", ["Generators", "viewof festRadio"], (G, _) => G.input(_));
  main.variable(observer("viewof yearRadio")).define("viewof yearRadio", ["Radio"], function(Radio){return(
Radio(["2020", "2019", "2018"], {value: "2020"})
)});
  main.variable(observer("yearRadio")).define("yearRadio", ["Generators", "viewof yearRadio"], (G, _) => G.input(_));
  main.variable(observer()).define(["md"], function(md){return(
md`### Attributes`
)});
  main.variable(observer("colorF")).define("colorF", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolateRdPu).domain([0,m-1])
)});
  main.variable(observer("colorM")).define("colorM", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolateGnBu).domain([0,m-1])
)});
  main.variable(observer("m")).define("m", function(){return(
10
)});
  main.variable(observer("height")).define("height", function(){return(
400
)});
  main.variable(observer("width")).define("width", function(){return(
625
)});
  main.variable(observer()).define(["md"], function(md){return(
md`### Libraries`
)});
  const child1 = runtime.module(define1);
  main.import("forceClusterCollision", child1);
  const child2 = runtime.module(define2);
  main.import("Radio", child2);
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@6")
)});
  return main;
}
