const price = 999;

fixedPrice = document.querySelector("#price");
fixedPrice.innerHTML = price;

function calculate() {
  quantity = document.querySelector("#quantity");
  showQuantity = document.querySelector("#show-quantity");
  showQuantity.innerHTML = quantity.value;
  total = Number(quantity.value) * Number(price);
  totalPrice = document.querySelector("#total-price");
  totalPrice.innerHTML = total;


  
    function changeBackground() {
        let color = document.querySelector("#color").value;
        document.querySelector("#show-color").style.backgroundColor = color;
    }
    changeBackground();

}



