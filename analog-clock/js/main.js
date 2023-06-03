let canvasLength = 450; // length of entire canvas, you can set any value for this
let radius = canvasLength / 2; // radius of circle is half the length of canvas
let canvas = document.getElementById("canvas");
canvas.height = canvasLength;
canvas.strokeStyle = "#ffffff";
canvas.fillStyle = "#ffffff";
canvas.width = canvasLength;
let ctx = canvas.getContext("2d");
ctx.font = `${0.1 * radius}px Georgia `;
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// complex calculation to determine at what co-ordinates each hand is drawn
function drawHand(ctx, angleInDegrees, r) {
  let a = r * Math.cos((angleInDegrees * Math.PI) / 180);
  let b = r * Math.sin((angleInDegrees * Math.PI) / 180);
  ctx.lineTo(a, b);
}

function drawClock() {
  // clear previous canvas
  ctx.clearRect(0, 0, canvasLength, canvasLength);

  // draw outer circle
  ctx.beginPath();
  ctx.arc(radius, radius, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  // set the center of canvas as 0,0
  ctx.translate(radius, radius);

  // draw numbers 1 to 12 on outer circle
  for (let i = 1; i <= 12; i++) {
    let x = radius * 0.9 * Math.cos(((i * 30 - 90) * Math.PI) / 180);
    let y = radius * 0.9 * Math.sin(((i * 30 - 90) * Math.PI) / 180);
    ctx.fillText(i, x, y);
  }

  // get current time
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  // determine the degree of angle in which each clock hand is there
  let secondsDegrees = (seconds - 15) * 6;
  let minutesDegrees = (minutes - 15) * 6;
  let hoursDegrees = (hours - 3 + minutes / 60) * 30;

  // drawing clock hands
  ctx.beginPath();

  // second hand
  ctx.moveTo(0, 0);
  drawHand(ctx, secondsDegrees, radius * 0.75); // second hand is 0.75 times of radius

  // minute hand
  ctx.moveTo(0, 0);
  drawHand(ctx, minutesDegrees, radius * 0.85); // minute hand is 0.85 times of radius

  // hour hand
  ctx.moveTo(0, 0);
  drawHand(ctx, hoursDegrees, radius * 0.6); // hour hand is 0.6 times of radius

  ctx.stroke();
  ctx.closePath();

  // fill center with dark black color
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
  ctx.translate(-radius, -radius);
}

window.onload = setInterval(drawClock, 1000);
