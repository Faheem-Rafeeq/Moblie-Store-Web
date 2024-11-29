const phones = [
    { brand: 'Samsung', model: 'Galaxy S23', price: 799 },
    { brand: 'Apple', model: 'iPhone 14', price: 999 },
    { brand: 'Oppo', model: 'Find X5 Pro', price: 1099 },
    { brand: 'BlackBerry', model: 'KEY2', price: 649 },
    { brand: 'Huawei', model: 'P50 Pro', price: 899 },
    { brand: 'Vivo', model: 'X80 Pro', price: 999 },
    { brand: 'Google', model: 'Pixel 7', price: 599 },
    { brand: 'Xiaomi', model: 'Mi 12 Pro', price: 999 },
    { brand: 'Sony', model: 'Xperia 1 IV', price: 1299 },
    { brand: 'OnePlus', model: '10 Pro', price: 899 },
    { brand: 'LG', model: 'Velvet', price: 499 },
    { brand: 'Nokia', model: 'G50', price: 299 },
    { brand: 'Realme', model: 'GT 2 Pro', price: 749 },
    { brand: 'Motorola', model: 'Edge 30 Pro', price: 899 },
    { brand: 'Asus', model: 'ROG Phone 6', price: 999 },
    { brand: 'HTC', model: 'Desire 21 Pro', price: 399 },
    { brand: 'Tecno', model: 'Camon 18', price: 249 },
    { brand: 'ZTE', model: 'Axon 20', price: 399 },
    { brand: 'Philips', model: 'Xenium E168', price: 149 },
    { brand: 'Alcatel', model: '1B', price: 129 },
    { brand: 'Honor', model: 'Magic 4', price: 899 }

  ];

const div = document.querySelector(`.main-items`);



// Items Rendering part


phones.map((items , index )=>{
div.innerHTML += `<div id="items">
    <h3>Brand : ${items.brand} ${items.model}</h3>
    <h3>Price : $${items.price} </h3>
    <button onclick = "addToCart(${index})" class="btn">Add To cart</button>`



})


// Add to cart scene part2

let cartItems = []

function addToCart(index){
  let indexNumber = cartItems.indexOf(phones[index]);
if (indexNumber !== -1) {

cartItems[indexNumber].quantity += 1 ;

console.log(cartItems)
  
} else {
  phones[index].quantity = 1 
  cartItems.push(phones[index])
  console.log(cartItems)

}


Swal.fire({
title: "Great !",
text: "Item added to cart successfully!",
icon: "success",
});

}




// Local Storage Scene Part 3
const btn = document.querySelector(`.btn2`)

btn.addEventListener("click" , checkout);

function checkout(){
localStorage.setItem(`cartItems` , JSON.stringify(cartItems))
window.location.href = `cart.html`;
} 
