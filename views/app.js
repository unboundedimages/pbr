const makeSomething = () => {
  alert("doink");
  const fragment = document.createDocumentFragment();

  const newEl = document.createElement("div");
  newEl.className = "testing policeBlue";
  newEl.textContent = "seriously son!";
  fragment.appendChild(newEl);
};
makeSomething();
