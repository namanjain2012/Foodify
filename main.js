var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: "#next",
    prevEl: "#prev",
  },
});

//ACCESSING ELEMENTS OF HTML

// We want that when we click on shopping bag then the cart tab opens

const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeBtn = document.querySelector(".close-btn");

const cardList = document.querySelector(".card-list");
const cartList = document.querySelector(".cart-list");
const cartTotal = document.querySelector(".cart-total");
const cartValue = document.querySelector(".cart-value");
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const bars = document.querySelector(".fa-bars");

//EVENT LISTENERS

//Showing cart when bag was clicked
cartIcon.addEventListener("click", () =>
  cartTab.classList.add("cart-tab-active")
);
//Hiding cart when close button is clicked
closeBtn.addEventListener("click", (e) =>{
  e.preventDefault();
  cartTab.classList.remove("cart-tab-active")
});

//Adding functionality to hamburger icon
hamburger.addEventListener("click",()=>mobileMenu.classList.toggle("mobile-menu-active"));
hamburger.addEventListener("click",()=>bars.classList.toggle("fa-xmark"));

//All the products go into this array from products.json
let productList = [];
let cartProduct = [];


const updateTotals = () => {

  let totalPrice = 0;
  let totalQuantity = 0; // It is for quantity icon on shopping bag

  document.querySelectorAll(".item").forEach(item => {
    const quantity = parseInt(item.querySelector(".quantity-value").textContent);
    const price = parseFloat(item.querySelector(".item-total").textContent.replace("$",""));
    totalPrice += price;
    totalQuantity += quantity;
  });

  cartTotal.textContent = `$${(totalPrice).toFixed(2)}`;
  cartValue.textContent = totalQuantity;

}

// Function to display cards dynamically
const showCards = () => {

  productList.forEach((product) => {
    //Now we will create the html code for item cards through js

    // We only create the outer most div(That is .order-card) using createElement() and put the rest of the html code inside innerHTML property of outer most div
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    orderCard.innerHTML = `
      <div class="card-image">
        <img src="${product.image}">
      </div>
      <h4>${product.name}</h4>
      <h4 class="price">${product.price}</h4>
      <a href="#" class="btn card-btn">Add to Cart</a> 
    `;
    //We add "card-btn" class in the above anchor tag👆 so that we can access it because "btn" is applied on many elements in the html code

    cardList.appendChild(orderCard);

    // Now Adding functionality to "Add to Cart" Button in item card

    // we use orderCard variable to access the "Add to Cart" button
    const cardBtn = orderCard.querySelector(".card-btn");

    //Applying Event Listener to each "Add to Cart" button
    cardBtn.addEventListener("click", (e) => {
      e.preventDefault(); // Stops page reloading
      addToCart(product);
    });
  });
};

const addToCart = (product) => {

  //Checking whether a product is already in cart or not
  
  // const existingProduct = cartProduct.find(item => item.id === product.id);  SIR APPROACH
  const existingProduct = cartProduct.includes(product); // MY APPROACH
  if(existingProduct){
    alert("Item is already in cart, press + to increase it's quantity");
    return;
  }
  cartProduct.push(product);
  let quantity = 1;

  //We use parseFloat because price comes as string and we use .replace() so that we can store only the value of product not the symbol like "$"
  let price = parseFloat(product.price.replace("$",""));

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");

  cartItem.innerHTML = `
    <div class="item-image">
      <img src="${product.image}">
    </div>

    <div class="detail">
      <h4>${product.name}</h4>
      <h4 class="item-total">${product.price}</h4>
    </div>
    <div class="flex stick-right">
      <a href="#" class="quantity-btn minus">
        <i class="fa-solid fa-minus"></i>
      </a>
      <h4 class="quantity-value">${quantity}</h4>
      <a href="#" class="quantity-btn plus">
        <i class="fa-solid fa-plus"></i>
      </a>
    </div>
  `;

  cartList.appendChild(cartItem);
  updateTotals();

  const plusBtn = cartItem.querySelector(".plus");
  const quantityValue = cartItem.querySelector(".quantity-value");
  const itemTotal = cartItem.querySelector(".item-total");

  const minusBtn = cartItem.querySelector(".minus");

  //Applying functionality to + button in cart
  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `$${(price*quantity).toFixed(2)}`; // toFixed() is used to limit digits after decimal
    updateTotals();
  });

  //Applying functionality to - button in cart
  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(quantity > 1){
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `$${(price*quantity).toFixed(2)}`; // toFixed() is used to limit digits after decimal
      updateTotals();
    }
    else{
      cartItem.classList.add("slide-out");
      setTimeout(()=>{
        cartItem.remove();
        cartProduct = cartProduct.filter(item => item.id !== product.id);
        updateTotals();
      },300);
    }
  });

};

const initApp = () => {
  fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
      productList = data;
      showCards();
    });
};

initApp();
