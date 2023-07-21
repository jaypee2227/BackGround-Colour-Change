let btn = document.querySelector("#btnn");
let display = document.getElementById("color-field");

btn.addEventListener("click", changeBGColor);

function changeBGColor() {
  let result = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;

  display.style.backgroundColor = result;
}

const randomNum = () => {
  return Math.floor(Math.random() * 256);
};
