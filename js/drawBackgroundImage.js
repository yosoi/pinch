function main(canvasId) {
  let canvas = document.getElementById(canvasId);
  let context = canvas.getContext("2d");
  context.fillStyle = "magenta";
  context.fillRect(0, 0, canvas.width, canvas.height);
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

export default main;
