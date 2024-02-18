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
