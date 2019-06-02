// document.body.onload = addElement;

// const addElement = function() {
//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Hi there and greetings!");
//   newDiv.appendChild(newContent);
//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// };

// const addElement = function() {
//   let newDiv = document.createElement("p");
//   let newContent = document.createTextNode("Hi there and greetings!");
//   newDiv.appendChild(newContent);
//   let currentDiv = document.getElementById("p1");
//   currentDiv.append(newDiv);
//   // return currentDiv.append(newDiv);
// };

// addElement();
const myCar = {};
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
myCar.addElements = function addElements() {
  let newDiv1 = document.createElement("p");
  let newContent1 = document.createTextNode("Hi there and greetings!!!");
  newDiv1.appendChild(newContent1);
  let currentDiv1 = document.getElementById("p1");
  let currentDiv = document.getElementById("div1");
  // document.body.insertBefore(newDiv1, currentDiv);
  currentDiv1.append(newDiv1);
};

const addElement = function() {
  let newDiv = document.createElement("p");
  let newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent);
  let currentDiv = document.getElementById("p1");
  currentDiv.append(newDiv);
  return currentDiv.append(newDiv);
};

let someObj = {};

someObj.dog = "crap";

// Create a class for the element
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Always call super first in constructor
    super();

    // constructor definition left out for brevity
    //...
  }
}

// Define the new element
customElements.define("expanding-list", ExpandingList, { extends: "div" });
let expandingList = document.createElement("ul", { is: "expanding-list" });

// export { myCar, addElement };
export { addElement, myCar };
// export { myCar };
