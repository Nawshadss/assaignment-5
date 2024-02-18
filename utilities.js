function getElementId(id) {
  return document.getElementById(id);
}

function getelementClass(clas) {
  return document.querySelectorAll(clas);
}

function setElement(element, valu) {
  element.innerText = valu;
}

function appen(e) {
  const ticketPrice = parseFloat(getElementId("TicketPrice").innerText);
  let element = getElementId("dynamic-price");
  let div = document.createElement("div");
  div.innerHTML = `<p>${e.target.innerText}</p>
  <p>economy</p>
  <p class="dynamicPrice">${ticketPrice}</p>`;
  div.classList.add("flex", "justify-between");
  element.appendChild(div);
  setTotal();
}

function setTotal() {
  let dynamicPrice = getelementClass("dynamicPrice");
  let total = 0;
  console.log(dynamicPrice);
}
setTotal();
console.log("helo2");
