//NODE LIST
//methods supported: .item() / .entries() / .forEach() / .keys() / .values()
// 1) querySelector

//grabs the firs p tag in the document
const element = document.querySelector("p");

//the one with the class "error"
const element = document.querySelector(".error");

//a div with a class of error
const element = document.querySelector("div.error");


//query multiple elements
//all p tags
const elements = document.querySelectorAll("p");
  elements.forEach(element => {
    console.log(element);
  })
//all error classes elements
const elements = document.querySelectorAll(".error");

//HTML COLLECTION
//methods supported: .item() / .namedItem() / NOT forEach
// 2) getElementById
const element = document.getElementById("page-title");
// 3) getElementsByClassName (all the elements with the same class name)
const errors = document.getElementsByClassName("error");
//4) getElementsByTagName
const elements = document.getElementsByTagName("p");
console.log(elements);
console.log(elements[1]);
