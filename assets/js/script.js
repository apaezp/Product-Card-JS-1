const price = 999;
let b = document.querySelector("#button");

fixedPrice = document.querySelector("#price");
fixedPrice.innerHTML = price;

b.addEventListener("click", function() {
total = Number(quantity.value) * Number(price);
totalPrice = document.querySelector("#total-price");
totalPrice.innerHTML = total;
quantity = document.querySelector("#quantity");
showQuantity = document.querySelector("#show-quantity");
showQuantity.innerHTML = quantity.value;


function changeBackground() {
  let color = document.querySelector("#color").value;
  document.querySelector("#show-color").style.backgroundColor = color;
  }
changeBackground();  
});


  






