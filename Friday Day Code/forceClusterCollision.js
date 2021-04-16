// https://observablehq.com/@nbremer/custom-cluster-force-layout@136
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Custom Cluster Force Layout

Trying to recreate the cluster padding between clusters from [this d3.v3 block](https://bl.ocks.org/mbostock/7882658) by Mike Bostock, but then with the new _forceSimulation()_ function that we have since v4.`
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Create some random nodes that belong to 10 groups, where each group is set to have its point of gravity (in the simulation) spread across a circle`
)});
  main.variable(observer("nodes")).define("nodes", ["d3","m"], function(d3,m){return(
d3.range(200).map(() => {
  let i = Math.floor(Math.random() * m) //the cluster id
  let r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * 12
  let focusX = 110 * Math.cos(i / m * Math.PI * 2)
  let focusY = 110 * Math.sin(i / m * Math.PI * 2)
  let dataPoint = {cluster: i, r: r, x: focusX, y: focusY, focusX: focusX, focusY: focusY}
 
  return dataPoint
})
)});
  main.variable(observer()).define(["md"], function(md){return(
md`Next define the simulation with the custom _forceClusterCollision_ function and see how the clusters have more padding between them than the padding between the inner-cluster circles.

**In this hacked version, the variable that defines the cluster has to be named _cluster_!**`
)});
  main.variable(observer("svg")).define("svg", ["d3","DOM","width","height","nodes","color","forceClusterCollision"], function(d3,DOM,width,height,nodes,color,forceClusterCollision)
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
      .style("fill", d => color(d.cluster))

  ////////////////////////////////////////////////////////////
  ////////////////////// Run simulation //////////////////////
  ////////////////////////////////////////////////////////////
  
  const simulation = d3.forceSimulation()
        // .force("collide", d3.forceCollide().radius(d => d.r + 1) .strength(0.8)) //Original collide function
        //Instead use the custom collide function
        .force("collide", forceClusterCollision()
               .radius(d => d.r + 1)
               .strength(0.8)
               .clusterPadding(10) //new setting - important, the cluster id of the data has to be named "cluster"
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
  main.variable(observer()).define(["md"], function(md){return(
md`The _forceClusterCollision_ function that is basically the original _forceCollision_ function with a few changes and addition (all marked I think). Also, I only managed to figure out the required changes because of Mike's [original collide code](https://bl.ocks.org/mbostock/7882658) in the d3.v3 version.`
)});
  main.variable(observer("forceClusterCollision")).define("forceClusterCollision", ["d3"], function(d3){return(
function forceClusterCollision() {
  let nodes
  let radii
  let strength = 1
  let iterations = 1
  let clusterPadding = 0 //addition

  function radius(d) { return d.r }
  function x(d) { return d.x + d.vx }
  function y(d) { return d.y + d.vy }
  function constant(x) { return function() { return x } }
  function jiggle() { return 1e-6 } //change - PLEASE no Math.random() in there ಥ﹏ಥ
  // function jiggle() { return (Math.random() - 0.5) * 1e-6 }

  function force() {
    let i
    let n = nodes.length
    let tree
    let node
    let xi
    let yi
    let ri
    let ri2

    for (let k = 0; k < iterations; ++k) {
      tree = d3.quadtree(nodes, x, y).visitAfter(prepare)
      for (i = 0; i < n; ++i) {
        node = nodes[i]
        ri = radii[node.index]
        ri2 = ri * ri
        xi = node.x + node.vx
        yi = node.y + node.vy
        tree.visit(apply)
      }//for i
    }//for k

    function apply(quad, x0, y0, x1, y1) {
      let data = quad.data
      let rj = quad.r
      let r = ri + rj + clusterPadding //change
      if (data) {
        if (data.index > node.index) {
          let x = xi - data.x - data.vx
          let y = yi - data.y - data.vy
          let l = x * x + y * y
          r = ri + rj + (node.cluster !== quad.data.cluster ? clusterPadding : 0) //addition

          if (l < r * r) {
            if (x === 0) x = jiggle(), l += x * x
            if (y === 0) y = jiggle(), l += y * y
            l = (r - (l = Math.sqrt(l))) / l * strength
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj))
            node.vy += (y *= l) * r
            data.vx -= x * (r = 1 - r)
            data.vy -= y * r
          }//if
        }//if
        return
      }//if
        return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r
      }//apply
    }//force

    function prepare(quad) {
      if (quad.data) return quad.r = radii[quad.data.index];
      for (let i = quad.r = 0; i < 4; ++i) {
        if (quad[i] && quad[i].r > quad.r) {
          quad.r = quad[i].r
        }//if
      }//for i
    }

    function initialize() {
      if (!nodes) return;
      let i, n = nodes.length, node
      radii = new Array(n)
      for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes)
    }

    force.initialize = function (_) {
      nodes = _
      initialize()
      return force
    }

    force.iterations = function (_) {
      return arguments.length ? (iterations = +_, force) : iterations
    }

    //I wish strength could be a function of the node as well...
    force.strength = function (_) {
      return arguments.length ? (strength = +_, force) : strength
    }

    force.radius = function (_) {
      return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), force) : radius
    }
    
    //addition - the actual pixels of padding
    force.clusterPadding = function (_) {
      return arguments.length ? (clusterPadding = +_, force) : clusterPadding
    }

    return force
  }
)});
  main.variable(observer()).define(["md"], function(md){return(
md`---

## Appendix`
)});
  main.variable(observer("m")).define("m", function(){return(
10
)});
  main.variable(observer("color")).define("color", ["d3","m"], function(d3,m){return(
d3.scaleSequential(d3.interpolateSinebow).domain([0,m-1])
)});
  main.variable(observer("width")).define("width", function(){return(
500
)});
  main.variable(observer("height")).define("height", ["width"], function(width){return(
width
)});
  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("d3@5")
)});
  return main;
}
