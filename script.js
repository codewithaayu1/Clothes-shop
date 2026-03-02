// PRODUCT DATABASE
let products = JSON.parse(localStorage.getItem("products")) || [];

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY PRODUCTS
function loadProducts(){
const container = document.getElementById("productList");
if(!container) return;

container.innerHTML="";
products.forEach((p,index)=>{
container.innerHTML += `
<div class="product">
<img src="${p.image}" width="100%">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${index})">Add to Cart</button>
</div>
`;
});
}

// ADD PRODUCT (ADMIN)
function addProduct(){
const name=document.getElementById("pname").value;
const price=document.getElementById("pprice").value;
const image=document.getElementById("pimage").value;

products.push({name,price,image});
localStorage.setItem("products",JSON.stringify(products));
alert("Product Added!");
}

// ADD TO CART
function addToCart(i){
cart.push(products[i]);
localStorage.setItem("cart",JSON.stringify(cart));
alert("Added to Cart");
}

// LOAD CART
function loadCart(){
const container=document.getElementById("cartList");
if(!container) return;

container.innerHTML="";
let total=0;

cart.forEach((item,index)=>{
total+=Number(item.price);
container.innerHTML+=`
<p>${item.name} - ₹${item.price}
<button onclick="removeCart(${index})">X</button>
</p>`;
});

document.getElementById("total").innerText="Total: ₹"+total;
}

// REMOVE CART
function removeCart(i){
cart.splice(i,1);
localStorage.setItem("cart",JSON.stringify(cart));
loadCart();
}

// PLACE ORDER
function placeOrder(){
let orders=JSON.parse(localStorage.getItem("orders"))||[];
orders.push({
customer:document.getElementById("cname").value,
address:document.getElementById("caddress").value,
phone:document.getElementById("cphone").value,
cart:cart
});
localStorage.setItem("orders",JSON.stringify(orders));
localStorage.removeItem("cart");
alert("Order Placed!");
window.location="index.html";
}

// LOAD ORDERS (ADMIN)
function loadOrders(){
const container=document.getElementById("orderList");
if(!container) return;

let orders=JSON.parse(localStorage.getItem("orders"))||[];
container.innerHTML="";

orders.forEach(o=>{
container.innerHTML+=`
<div style="background:white;padding:10px;margin:10px 0;">
<h4>${o.customer}</h4>
<p>${o.address}</p>
<p>${o.phone}</p>
<hr>
</div>`;
});
  }
