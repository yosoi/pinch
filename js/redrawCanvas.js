import drawBackgroundImage from "./drawBackgroundImage.js";
import resizeCanvas from "./resizeCanvas.js";

function main(canvasId) {
  resizeCanvas(canvasId);
  drawBackgroundImage(canvasId);
}

export default main;
