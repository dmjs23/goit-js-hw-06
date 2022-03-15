let elements = document.querySelectorAll("h2");
let elements2 = document.querySelectorAll("ul");

console.log("Number of categories: "+elements2[0].childElementCount);
for (let i = 0; i < elements.length; i++) {
    console.log("Category: "+elements[i].innerText);
    console.log("Elements: "+elements2[i+1].childElementCount);
}


