import define1 from "./654a60e85059f34a@136.js";
import define2 from "./a2e58f97fd5e8d7c@568.js";

export default function define(runtime, observer) {
  const main = runtime.module();
  const fileAttachments = new Map([["bookmorewomenLarge.csv",new URL("./files/8e556114141ae212233176a46e12d6d820ac4a7521d0f456cbc099cdca3ceab3faf50a4e749ea34e760b838b2ae0241d717669dc664cae7aa56163c06c2bfafa",import.meta.url)]]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], function(md){return(
md`# Final Notebook`
)});
  main.variable(observer("viewof festRadio")).define("viewof festRadio", ["Radio","data"], function(Radio,data){return(
Radio(data.map(i => i.festival).concat("All Festivals"), {value: "Coachella"})
)});
  main.variable(observer("festRadio")).define("festRadio", ["Generators", "viewof festRadio"], (G, _) => G.input(_));
  main.variable(observer("viewof yearRadio")).define("viewof yearRadio", ["Radio"], function(Radio){return(
Radio(["2020", "2019", "2018"], {value: "2020"})
)});
  main.variable(observer("yearRadio")).define("yearRadio", ["Generators", "viewof yearRadio"], (G, _) => G.input(_));
  main.variable(observer("nodes")).define("nodes", ["d3","chooseFest","matchingFestival","m"], function(d3,chooseFest,matchingFestival,m){return(
d3.range(chooseFest(matchingFestival).femaleA).map(() => {
  let i = Math.floor(Math.random() * m) //the cluster id
  let r = Math.sqrt((5) / m * -Math.log(Math.random())) * 12 + 5
  let focusX = Math.cos(Math.PI * 2)
  let focusY = Math.sin(Math.PI * 2)
  let dataPoint = {cluster: 6, r: r, x: focusX, y: focusY, focusX: focusX, focusY: focusY}
 
  return dataPoint
})
)});
  main.variable(observer("femaleArray")).define("femaleArray", ["d3","chooseFest","matchingFestival"], function(d3,chooseFest,matchingFestival){return(
d3.range(chooseFest(matchingFestival).femaleA)
)});
  main.variable(observer("maleArray")).define("maleArray", ["d3","chooseFest","matchingFestival"], function(d3,chooseFest,matchingFestival){return(
d3.range(chooseFest(matchingFestival).maleA)
)});
  main.variable(observer("svg")).define("svg", ["d3","DOM","width","height","nodes","colorM","forceClusterCollision"], function(d3,DOM,width,height,nodes,colorM,forceClusterCollision)
{
  const svg = d3.select(DOM.svg(width, height))
  
  const g = svg.append("g").attr("transform", `translate(${width/2},${height/2})`)
  
  ////////////////////////////////////////////////////////////
  //////////////////////// Draw nodes ////////////////////////
  ////////////////////////////////////////////////////////////
  
  const node = g.append("g")
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.r)
      .style("fill", (d, i) => colorM(i/10 + 4))

  ////////////////////////////////////////////////////////////
  ////////////////////// Run simulation //////////////////////
  ////////////////////////////////////////////////////////////
  
  const simulation = d3.forceSimulation()
        // .force("collide", d3.forceCollide().radius(d => d.r + 1) .strength(0.8)) //Original collide function
        //Instead use the custom collide function
        .force("collide", forceClusterCollision()
               // .radius(d => d.r + 1)
               // .strength(0.8)
               // .clusterPadding(10) //new setting - important, the cluster id of the data has to be named "cluster"
         )
        .force("x", d3.forceX().x(d => d.focusX).strength(0.2))
        .force("y", d3.forceY().y(d => d.focusY).strength(0.2))
   
  simulation
        .nodes(nodes)
        .on("tick", ticked)
  
  function ticked() {
    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
  }//function ticked
  
  return svg.node()
}
);
  main.variable(observer("matchingFestival")).define("matchingFestival", ["data","festRadio"], function(data,festRadio){return(
data.find(
    (festival) => festival.festival === festRadio
  )
)});
  main.variable(observer()).define(["chooseFest","matchingFestival"], function(chooseFest,matchingFestival){return(
chooseFest(matchingFestival)
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
  main.variable(observer("emojis")).define("emojis", function(){return(
['🎤', '🎸', '🥁', '🎹', '🤘']
)});
  main.variable(observer("data")).define("data", ["d3","FileAttachment"], async function(d3,FileAttachment){return(
d3.csvParse(await FileAttachment("bookmorewomenLarge.csv").text(), d3.autoType)
)});
  main.variable(observer("festivalAvg")).define("festivalAvg", ["d3","data"], function(d3,data){return(
{
  festival: "All Festivals",
  femaleA: Math.round(d3.mean(data.map(i => i.femaleA))),
  maleA: Math.round(d3.mean(data.map(i => i.maleA))),
  femaleB: Math.round(d3.mean(data.map(i => i.femaleB))),
  maleB: Math.round(d3.mean(data.map(i => i.maleB))),
  femaleC: Math.round(d3.mean(data.map(i => i.femaleC))),
  maleC: Math.round(d3.mean(data.map(i => i.maleC)))
}
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
  main.variable(observer("colorF")).define("colorF", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolateRdPu).domain([0,m-1])
)});
  main.variable(observer("colorM")).define("colorM", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolatePuBuGn).domain([0,m-1])
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