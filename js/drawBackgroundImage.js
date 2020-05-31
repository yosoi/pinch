function main(canvasId) {
  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");

  // draw background
  context.fillStyle = "#134074";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // draw planet
  context.beginPath();
  context.arc(0, canvas.width*2 + canvas.height/3, canvas.width * 2, 0, 2 * Math.PI);
  context.fillStyle = "#71a9f7";
  context.fill();

  // var c = document.getElementById(canvasId);
  // var ctx = c.getContext("2d");
  //
  // // Create gradient
  // var grd = ctx.createLinearGradient(0, 0, c.width, 0);
  // grd.addColorStop(0, "dark gray");
  // grd.addColorStop(1, "gray");
  //
  // // Fill with gradient
  // ctx.fillStyle = grd;
  // ctx.fillRect(0, 0, c.width, c.height);
}

function drawBackground(canvas, context) {

}

function drawPlanet(context) {

}

export default main;
