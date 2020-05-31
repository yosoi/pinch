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
}

export default main;
