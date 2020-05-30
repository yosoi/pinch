import drawBackgroundImage from "./drawBackgroundImage.js";
import resizeCanvas from "./resizeCanvas.js";

$(document).ready(function() {
  resizeCanvas("canvas-background");
  drawBackgroundImage("canvas-background");
});
