function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const colorBody = document.querySelector("body");

changeColorBtn.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  colorBody.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
