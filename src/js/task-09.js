function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const $body = document.querySelector("body");
const $btn = document.querySelector("button");
const $colorInfo = document.querySelector("span");

const changeColor = (ev) => {
  const color = getRandomHexColor();
  $colorInfo.textContent = color.toString();
  $body.setAttribute("style", "background-color:" + color);
  
}

$btn.addEventListener("click", changeColor);