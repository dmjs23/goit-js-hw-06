const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const fragment = document.createDocumentFragment();
for (let i = 0; i < ingredients.length; i++) {
  const $Li = document.createElement("li");
  $Li.textContent = ingredients[i];
  $Li.classList.add("item");
  fragment.append($Li);
}
const $ul = document.querySelector("ul");
$ul.append(fragment);

