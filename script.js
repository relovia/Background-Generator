// Selecting the elements from the HTML document
const firstColor = document.querySelector(".first-color");
const secondColor = document.querySelector(".second-color");
const h3 = document.querySelector("h3");
const body = document.getElementById("gradient-background");
const randomBtn = document.getElementById("random");

// Calling the changeBackground function to set the initial background gradient
changeBackground();

// Function to change the background gradient based on the selected colors
function changeBackground() {
  // Setting the background gradient of the body element using the selected colors
  body.style.background = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;

  // Updating the text content of the <h3> element to display the current background gradient
  h3.textContent = body.style.background + ";";
  //   h3.innerText = body.style.background + ";";
  //   h3.innerHTML = body.style.background + ";";
}

// Function to generate a random number between 0 and 255
function randomNumber() {
  return Math.round(Math.random() * 256);
}

// Function to generate random colors and set them as the selected colors
function randomGenerator() {
  // Generating two random RGB colors
  const firstRandomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  const secondRandomColor = `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

  // Setting the generated random colors as the selected colors
  firstColor.value = firstRandomColor;
  secondColor.value = secondRandomColor;

  // Updating the background gradient based on the new selected colors
  changeBackground();
}

// Function to convert RGB color to hexadecimal color
function rgbToHex() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    // Generating a random hexadecimal digit and appending it to the color string
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to generate a random hexadecimal color and set it as the selected colors
function randomColorNumber() {
  return rgbToHex();
}

// Function to set the gradient with random colors
function setGradientRandom() {
  // Generating two random hexadecimal colors
  firstColor.value = randomColorNumber();
  secondColor.value = randomColorNumber();

  // Updating the background gradient based on the new selected colors
  changeBackground();
}

// Adding event listeners to the color inputs and the random button
firstColor.addEventListener("input", changeBackground);
secondColor.addEventListener("input", changeBackground);
randomBtn.addEventListener("click", setGradientRandom);
