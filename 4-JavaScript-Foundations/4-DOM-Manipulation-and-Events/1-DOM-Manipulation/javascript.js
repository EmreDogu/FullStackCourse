const id = document.querySelector("#container");

const element1 = document.createElement("p");
element1.classList.add("redParagraph");
element1.textContent = "Hey I'm red!";
element1.style.backgroundColor = "red";

const element2 = document.createElement("h3");
element2.classList.add("header");
element2.textContent = "I am a blue h3!";
element2.style.backgroundColor = "blue";

const element3 = document.createElement("div");
element2.classList.add("divContainer")
element3.style.borderColor = "black";
element3.style.backgroundColor = "pink";

const element4 = document.createElement("h1");
element4.classList.add("headerInsideOfDiv");
element4.textContent = "I'm in a div!";

const element5 = document.createElement("p");
element5.classList.add("pInsideOfDiv");
element5.textContent = "ME TOO!";

id.appendChild(element1);
id.appendChild(element2);
element3.appendChild(element4);
element3.appendChild(element5);
id.appendChild(element3);