function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const $boxes = document.querySelector("#boxes");
const $create = document.querySelector("button[data-create]");
const $destroy = document.querySelector("button[data-destroy]");
const $input = document.querySelector("input");

const fragment = document.createDocumentFragment();

const createBoxes = () => {
  for (let i = 0; i < $input.value; i++) {
    const $div = document.createElement("div");
    const color = getRandomHexColor();
    const size = 30 + (10 * i);

    $div.setAttribute("style", "background:"+ color+"; height:"+size+"px; width:"+size+"px");
  fragment.append($div);
  }
  $boxes.append(fragment);
}

const destroyBoxes = () => {
  while ($boxes.firstChild)
  {
    $boxes.removeChild($boxes.firstChild);
    }
}

$create.addEventListener("click", createBoxes);
$destroy.addEventListener("click", destroyBoxes);
