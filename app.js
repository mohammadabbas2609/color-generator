const btn = document.querySelector("button");
const display = document.querySelector(".rgbcode");

function generatedColor() {
  return Math.round(Math.random() * 255);
}

function changeBackground() {
  display.style.display = "block";

  const red = generatedColor();
  const green = generatedColor();
  const blue = generatedColor();

  const color = `rgb(${red},${green},${blue})`;
  document.body.style.backgroundColor = color;

  display.textContent = color;
}
