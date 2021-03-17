const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.google.com');
  link.innerText = "Go to Google ";

const para = document.querySelector("p");
console.log(para.getAttribute("class"));
para.setAttribute("class", "myClass");

//Changing style

//how to find all the available methods in the console (javascript camelCase way)
console.log(para.style);

// !!! this method will overwrite (replace) any style atribute the element have
para.setAttribute("style", "color: green");
//this is the better method (is appending the style to the existing css)
para.style.color = "green";
para.style.fontSize = "24px";

//Remove a style
title.style.fontSize = "";
