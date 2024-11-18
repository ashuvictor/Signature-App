const colorPicker = document.getElementById("colorPicker");
const canvasColor = document.getElementById("canvasColor");
const canvas = document.getElementById("myCanvas");
const clearButton = document.getElementById("clearButton");
const saveButton = document.getElementById("saveButton");
const retrieveButton = document.getElementById("retrievButton");
const fontPicker = document.getElementById("fontSize");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Set initial canvas background color
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Update stroke color
colorPicker.addEventListener("change", (e) => {
  ctx.strokeStyle = e.target.value;
});

// Update canvas background color
canvasColor.addEventListener("change", (e) => {
  ctx.fillStyle = e.target.value;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Update line width based on font picker
fontPicker.addEventListener("change", (e) => {
  ctx.lineWidth = parseInt(e.target.value);
});

// Start drawing
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});

// Draw on canvas
canvas.addEventListener("mousemove", (e) => {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

// Stop drawing
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Clear canvas
clearButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = canvasColor.value || "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// Save canvas as image
saveButton.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "signature.png";
  link.href = canvas.toDataURL();
  link.click();
});

// Retrieve saved signature (example - placeholder functionality)
retrieveButton.addEventListener("click", () => {
  alert("Feature to retrieve the saved signature is not yet implemented!");
});
