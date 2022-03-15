const $plus = document.querySelector("button[data-action='increment'");
const $minus = document.querySelector("button[data-action='decrement'");
const $counter = document.querySelector("#value");
let counterValue = 0;

$plus.addEventListener("click", () => {
    counterValue++;
    $counter.textContent = counterValue;
})

$minus.addEventListener("click", () => {
    counterValue--;
    $counter.textContent = counterValue;
})