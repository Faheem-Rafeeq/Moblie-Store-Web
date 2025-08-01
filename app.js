const div = document.querySelector(`.main-items`);


const phones = [
  { id: 1, category: "Mobile", name: "iPhone 13", brand: "Apple", price: 1000, stock: 25, rating: 4.8, isAvailable: true, imageUrl: "https://productimages.hepsiburada.net/s/777/375-375/110000766674504.jpg" },
  { id: 2, category: "Mobile", name: "Galaxy S21", brand: "Samsung", price: 950, stock: 30, rating: 4.7, isAvailable: true, imageUrl: "https://propakistani.pk/price/wp-content/uploads/2022/01/Samsung-Galaxy-S21-Ultra-5G-Price-1.png" },
  { id: 3, category: "Mobile", name: "OnePlus 9", brand: "OnePlus", price: 700, stock: 20, rating: 4.5, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNfll3IMJpNcgqu44yjiSW6FPMs5S1OQ0YaQ&s" },
  { id: 4, category: "Mobile", name: "Pixel 5", brand: "Google", price: 800, stock: 15, rating: 4.6, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDNAfxmP04S8r1dqb9dlrw7N9-AH9HkFOjA&s" },
  { id: 5, category: "Mobile", name: "Xperia 5", brand: "Sony", price: 750, stock: 18, rating: 4.7, isAvailable: true, imageUrl: "https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-5-iii-02.jpg" },
  { id: 6, category: "Mobile", name: "Redmi Note 10", brand: "Xiaomi", price: 300, stock: 45, rating: 4.4, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YhHqyUvEsDiIup6rQqcfyyTvFweEc1_j4A&s" },
  { id: 7, category: "Mobile", name: "Nokia G20", brand: "Nokia", price: 250, stock: 40, rating: 4.2, isAvailable: true, imageUrl: "https://i.cdn.newsbytesapp.com/images/l63520210705102119.jpeg" },
  { id: 8, category: "Mobile", name: "Oppo A54", brand: "Oppo", price: 300, stock: 35, rating: 4.3, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2YwUM9FKWdaXiVCEdzKd3yHJq7aGXVbQAmA&s" },
  { id: 9, category: "Mobile", name: "Realme 8", brand: "Realme", price: 280, stock: 25, rating: 4.4, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzSM8-71vAW5XqoUx5VKLtlVrk_Y6xZv0BYw&s" },
  { id: 10, category: "Mobile", name: "Vivo Y20", brand: "Vivo", price: 230, stock: 40, rating: 4.1, isAvailable: true, imageUrl: "https://propakistani.pk/price/wp-content/uploads/2022/02/vivo-Y20s-G-price.png" },
  { id: 11, category: "Mobile", name: "Huawei P30", brand: "Huawei", price: 600, stock: 10, rating: 4.5, isAvailable: true, imageUrl: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/list-image/phones/p30-lite/p30lite-black.png" },
  { id: 12, category: "Mobile", name: "Galaxy Z Flip", brand: "Samsung", price: 1200, stock: 12, rating: 4.8, isAvailable: true, imageUrl: "https://eezepc.com/wp-content/uploads/2024/09/Samsung-Galaxy-Z-Flip-6-Blue.webp" },
  { id: 13, category: "Mobile", name: "iPhone SE", brand: "Apple", price: 400, stock: 30, rating: 4.6, isAvailable: true, imageUrl: "https://gadgetclub.pk/cdn/shop/files/pre-owned-apple-iphone-se-16gb-space-grey_1_1.jpg?v=1715328259" },
  { id: 14, category: "Mobile", name: "Pixel 4a", brand: "Google", price: 350, stock: 20, rating: 4.5, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpe3KCFYBzYkAAxKf-6Ggf_Lwt8r9Jr3UYfw&s" },
  { id: 15, category: "Mobile", name: "Moto G Power", brand: "Motorola", price: 250, stock: 50, rating: 4.3, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKBzsIZ0aaJdxp8j8Ju7LdH8VJnnWUHAg8Q&s" },
  { id: 16, category: "Mobile", name: "Asus ROG Phone 5", brand: "Asus", price: 999, stock: 10, rating: 4.7, isAvailable: true, imageUrl: "https://www.asus.com/media/odin/websites/global/News/yoow9azyyl2ursju/ROGPhone5Ultimate_GroupPhoto_012.png" },
  { id: 17, category: "Mobile", name: "Galaxy Note 20", brand: "Samsung", price: 1000, stock: 8, rating: 4.6, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ctWRtTFZF_t_fya8cVPaoEap9iQcL8CqjKq5Uei1h--fozznPD-ezligcI0IufDVbkw&usqp=CAU" },
  { id: 18, category: "Mobile", name: "Xiaomi Mi 11", brand: "Xiaomi", price: 650, stock: 15, rating: 4.7, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLwCZvnegNy0jzd53dkuzit5lErN0v8HE6Q&s" },
  { id: 19, category: "Mobile", name: "LG Velvet", brand: "LG", price: 700, stock: 20, rating: 4.4, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTywVuJD2LwaPZ9BgCG2PYyQtm8tvEzwVbJw&s" },
  { id: 20, category: "Mobile", name: "Nokia 7.2", brand: "Nokia", price: 300, stock: 22, rating: 4.3, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9vXr23hMFqMminCVfC4TgZKM5PLUckbAAA&s" },
  { id: 21, category: "Mobile", name: "Honor 20", brand: "Honor", price: 500, stock: 30, rating: 4.5, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0WmMo2Y98gpDv2QJTSM9nJzAkTXfiAQ4HQ&s" },
  { id: 22, category: "Mobile", name: "OnePlus Nord", brand: "OnePlus", price: 450, stock: 25, rating: 4.6, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbAb6mpXBX7zoyVcf-gP5A_5EHgBQPrgMpsw&s" },
  { id: 23, category: "Mobile", name: "Sony Xperia 1 II", brand: "Sony", price: 1100, stock: 10, rating: 4.7, isAvailable: true, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWK3p0KX5W1hNTkZ8_svxrBIVykO5RY-oiAQ&s" },
  { id: 24, category: "Mobile", name: "Galaxy A52", brand: "Samsung", price: 500, stock: 40, rating: 4.6, isAvailable: true, imageUrl: "https://www.zdnet.com/a/img/resize/715ce794cb82efe9aa5d407a286591f3b3dee5ef/2021/03/17/7c835df8-ff8c-4f10-9bbe-a7976bf399aa/a52-1.jpg?auto=webp&width=1280" },
  { id: 25, category: "Mobile", name: "Oppo Find X3", brand: "Oppo", price: 950, stock: 15, rating: 4.7, isAvailable: true, imageUrl: "https://www.oppo.com/content/dam/oppo/product-asset-library/find-x3-series/weu-hima/v2/assets/hima-hero.png" },
];




// step 2 add logic to shuffle this array of objcts]


function shuffleArray(arr) {
  let shuffled = [...arr]

  for (i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]


  }

  return shuffled
}

const shuffledItem = shuffleArray(phones);
console.log(shuffledItem)


// Items Rendering part


shuffledItem.map((items, index) => {
  div.innerHTML += `
    <div id="items">
      <img src="${items.imageUrl}" alt="${items.brand} ${items.name}">
      <hr />
      <h3 style="color: #4f46e5; font-weight: 600;">${items.name}</h3>
      <p>Brand: ${items.brand}</p>
      <p style="color: red; font-weight: bold;">$${items.price}</p>
      <button onclick="addToCart(${index})" class="btn">Add to Cart</button>
    </div>
  `;
});



// Add to cart scene part2

let cartItems = []

function addToCart(index) {
  let indexNumber = cartItems.indexOf(phones[index]);
  if (indexNumber !== -1) {

    cartItems[indexNumber].quantity += 1;

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

btn.addEventListener("click", checkout);

function checkout() {
  localStorage.setItem(`cartItems`, JSON.stringify(cartItems))
  window.location.href = `cart.html`;
} 
