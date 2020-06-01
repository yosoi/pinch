import redrawCanvas from "./redrawCanvas.js";

$(document).ready(function() {
  redrawCanvas("canvas-background");
});

$(window).resize(function() {
  redrawCanvas("canvas-background");
});
