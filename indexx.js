const classElements = getelementClass(".bookseat");
console.log("heloe");
console.log(classElements.length);
for (const element of classElements) {
  element.addEventListener("click", appen);
}

window.addEventListener("load", setDefaultSeat);

function setDefaultSeat() {
  const seatAvailable = getElementId("seat-available");
  const totalSeat = getelementClass(".bookseat").length;
  setElement(seatAvailable, totalSeat);
}

function apply() {
  const coupn = getElementId("coupon").value;
  console.log(coupn);
  const discount = getElementId("discount");

  const totalPrice = parseInt(getElementId("totalPrice").innerText);
  let grandTotal = getElementId("grandPrice");
  if (coupn === "NEW15") {
    let valu = totalPrice - (totalPrice * 15) / 100;
    setElement(grandTotal, valu);
    discount.innerText = (totalPrice * 15) / 100;
    hideCoupn();
  } else if (coupn === "Couple 20") {
    let valu = totalPrice - (totalPrice * 20) / 100;
    setElement(grandTotal, valu);
    discount.innerText = (totalPrice * 20) / 100;
    hideCoupn();
  } else {
    alert("wronge coupn");
  }
}

function showNext(e) {
  const valu = parseInt(e.target.value);
  if (typeof valu === "number" && count > 0) {
    const nextbutton = getElementId("nextbutton");
    nextbutton.removeAttribute("disabled");
  }
}
