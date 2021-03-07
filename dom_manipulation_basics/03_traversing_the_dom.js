let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes (this also include a text child, witch is generated by the text editor line breacks)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName; //0 is also a text node
val = list.childNodes[3].nodeType; //3 is the test node

//TYPES OF NODES
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes (THIS IS THE BETTER WAY) (return only the html collection, only the elements)
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hello";
// Children of children
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];

// First child
val = list.firstElementChild;

// Last child
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// Get prev sibling
val = listItem.previousElementSibling;

console.log(val);
