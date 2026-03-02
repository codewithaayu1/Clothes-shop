function placeOrder(){

let customer=document.getElementById("cname").value;
let address=document.getElementById("caddress").value;
let phone=document.getElementById("cphone").value;

if(customer=="" || address=="" || phone==""){
alert("Please fill all details");
return;
}

let message = "🛍️ *New Order - Aayu Brand* %0A%0A";
message += "👤 Name: " + customer + "%0A";
message += "📍 Address: " + address + "%0A";
message += "📞 Phone: " + phone + "%0A%0A";
message += "🛒 Order Details:%0A";

cart.forEach(item=>{
message += "• " + item.name + " - ₹" + item.price + "%0A";
});

message += "%0AThank you for shopping with Aayu Brand!";

let whatsappNumber = "917520947031"; 
let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

window.open(url, "_blank");

localStorage.removeItem("cart");
}
