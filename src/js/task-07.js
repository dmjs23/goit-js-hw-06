const $input = document.querySelector("#font-size-control");
const $text = document.querySelector("#text");

$input.addEventListener("input", () => {
    $text.setAttribute("style", "font-Size:"+$input.value.toString()+"px");
})
