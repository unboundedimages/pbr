window.onload = import("/js/app.js").then(x => {
  console.log(x.myCar);
  x.myCar.addElements();
  x.addElement();
  // setTimeout(() => {
  //   // x.myCar.addElements();
  //   x.addElement();
  // }, 3000);
  console.log(x);
  const createElms = function createElms() {
    const element = document.getElementById("p1");
    const fragment = document.createDocumentFragment();
    //   const myTemplateLiteral = `<div>This is popping</div>`;
    //   let container = document.getElementById("learning");
    //   //   alert("dalj;ldsfkj");
    //   container.innerHTML = myTemplateLiteral;

    const divy = document.createElement("div");
    divy.className = "test";
    divy.textContent = "This is a test!";
    fragment.appendChild(divy);
    element.appendChild(fragment);
    console.log(fragment);
  };
  createElms();
});
import * as makeCard from "/js/makeCard.js";
console.log(makeCard.make_Card_Attribs);
