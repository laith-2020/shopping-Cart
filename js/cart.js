/* global Cart */
'use strict';
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;
function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
var TBODY = document.getElementById('tbody');
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  TBODY.innerHTML = '';
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // TODO: Find the table body
  for (var i in cart.items) {
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR x
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    var tRow = document.createElement('tr'); 
    var tData1 = document.createElement('td'); 
    var tData2 = document.createElement('td'); 
    var tData3 = document.createElement('td'); 
    tData3.id = i;
    tData3.addEventListener('click', removeItemFromCart);  
    TBODY.appendChild(tRow); 
    tRow.appendChild(tData3);  
    tRow.appendChild(tData1); 
    tRow.appendChild(tData2); 
    tData2.textContent = cart.items[i].product;
    tData1.textContent = cart.items[i].quantity;
    tData3.textContent = 'x'; 
  }
}
function removeItemFromCart(event) {
  cart.removeItem(Number(event.target.id));
  cart.saveToLocalStorage();
  event.stopPropagation();
  clearCart();
  showCart();
  // location.reload(true);
  return;
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}
// This will initialize the page and draw the cart on screen
renderCart();
