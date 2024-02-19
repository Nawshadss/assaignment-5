function getElementId(id) {
  return document.getElementById(id);
}

function getelementClass(clas) {
  return document.querySelectorAll(clas);
}

function setElement(element, valu) {
  element.innerText = valu;
}
function setBgcolor(e) {
  e.target.classList.add("clicked");
  console.log(e.target);
}

function enableApply() {
  const applyButton = getElementId("apply");
  applyButton.removeAttribute("disabled");
}
// function setAttibe(e) {
//   let elemnt = e.target;
// }
function appenElement(ticketPrice, e) {
  let element = getElementId("dynamic-price");
  let div = document.createElement("div");
  div.innerHTML = `<p>${e.target.innerText}</p>
  <p>economy</p>
  <p class="dynamicPrice">${ticketPrice}</p>`;
  div.classList.add("flex", "justify-between");
  element.appendChild(div);
}
let count = 0;
function appen(e) {
  count = count + 1;
  console.log(count);
  const ticketPrice = parseFloat(getElementId("TicketPrice").innerText);
  appenElement(ticketPrice, e);
  setTotal();
  if (count === 4) {
    enableApply();
  }
  setBgcolor(e);
}

function setTotal() {
  let dynamicPrice = getelementClass(".dynamicPrice");
  let total = 0;
  console.log(dynamicPrice);
  for (const price of dynamicPrice) {
    total = total + parseInt(price.innerText);
  }
  const totalValueElement = getElementId("totalPrice");
  setElement(totalValueElement, total);

  const grandtotal = getElementId("grandPrice");

  setElement(grandtotal, total);
}

console.log("helo2");
