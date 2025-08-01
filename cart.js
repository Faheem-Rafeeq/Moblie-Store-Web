let localData = localStorage.getItem("cartItems")
let data = JSON.parse(localData)
console.log(data);



function renderItems() {
  const div = document.querySelector(`.main-items`);
  div.innerHTML = ''; 

  data.forEach((item, index) => {
      div.innerHTML += `
          <div class="item" id="item-${index}">
              <h3>Brand: ${item.name}</h3>
              <h3>Price: $${item.price}</h3>
              <button onclick="decrease(${index})" class="btn3"> - </button> 
              <span id="quantity-${index}">${item.quantity}</span>   
              <button onclick="increase(${index})" class="btn3"> + </button> 
          </div>
      `;
  });

  updateTotalAmount(); 
}

function decrease(index) {
  if (data[index].quantity > 0) {
      data[index].quantity -= 1;
      updateQuantityDisplay(index);
      
      if (data[index].quantity < 1) {
          removeItem(index);
      }
  }
}

function increase(index) {
  data[index].quantity += 1;
  updateQuantityDisplay(index);
}

function updateQuantityDisplay(index) {
  const quantityDisplay = document.querySelector(`#quantity-${index}`);
  quantityDisplay.textContent = data[index].quantity;
  
  updateTotalAmount(); 
}

function removeItem(index) {
  data.splice(index, 1);
  renderItems();
}

function updateTotalAmount() {
  const totalAmountElement = document.querySelector(`.total`);
  const totalAmount = data.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
  }, 0);
  totalAmountElement.textContent = `$${totalAmount}`;
}


 renderItems();
 