/* Settings */
var width = 640,
    height = 640,
    strokeWidth = width / 55, /* 2/3 of the horizontal wordmark's stroke width */
    graticuleStepX = 90 / 2,  /* horizontal lines every 45deg */
    graticuleStepY = 90 / 3,  /* vertical lines every 30deg */
    pitch = 0,
    yaw = 0,
    roll = 0;

/* Get URL params if passed */
var searchParams = new URLSearchParams(window.location.search);
if (searchParams.has('yaw')) {
  yaw = searchParams.get('yaw');
}
if (searchParams.has('roll')) {
  roll = searchParams.get('roll');
}

/* Define projection */
var projection = d3.geoAzimuthalEquidistant()
    .scale(100)
    .rotate([yaw, pitch, roll])
    .translate([width / 2, height / 2])
    .precision(.1)

var path = d3.geoPath()
    .projection(projection);

var graticule = d3.geoGraticule()
  .stepMinor([graticuleStepX,graticuleStepY])
  .extentMinor([[ -180,-90 + graticuleStepY],[180,90.01 - graticuleStepY]])

var svg = d3.select("#emblem").append("svg")
    .attr("version", "1.1")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("xmlns", "http://www.w3.org/2000/svg")
    .attr("fill", "none")

/* Write SVG */
svg.append("path")
  .datum({type: "Sphere"})
  .attr("class", "sphere")
  .attr("stroke", "black")
  .attr("stroke-width", strokeWidth)
  .attr("d", path);

svg.append("path")
  .datum(graticule)
  .attr("class", "graticule")
  .attr("stroke", "black")
  .attr("stroke-width", strokeWidth)
  .attr("d", path);

function downloadSVG(container) {
  const innerHtml = container.innerHTML;
  const blob = new Blob([innerHtml.toString()]);
  const element = document.createElement("a");
  element.download = "ICF-Emblem_yaw-" + yaw + "_roll-" + roll + ".svg";
  element.href = window.URL.createObjectURL(blob);
  element.click();
  element.remove();
}