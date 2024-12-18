let allproduct;
function get_url(url) {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .then((data) => {
      // console.log(data[0].name);
      allproduct = data;
      runderCard(data);
        // console.log(card_div);
      })
      .catch((error) => {
        console.log("Data from json file is corrupted!!");
      });
    }
    
    
let card_div = document.querySelector("section.card");
console.log(card_div);

//get_url("http://localhost:3000/products");



function addToCart(i){
 let cart = localStorage.getItem("cart") ? localStorage.getItem("cart") : localStorage.setItem("cart", "[]");

 cart = JSON.parse(cart);
 console.log(cart)

 let result = cart.find((item) => item.id == allproduct[i].id)
 if(result){
  cart.map((item) => {
    if(item.id == allproduct[i].id){
      item.count += 1;
    }
  })
 }else{
  allproduct[i].count = 1;
  cart.push(allproduct[i]);
 }
 localStorage.setItem("cart", JSON.stringify(cart))
}
function filter(filter = 1){
  console.log(filter==1)
  if(filter == 1){
    card_div.innerHTML = "";
    get_url("http://localhost:3000/products");
  }else if(filter == 2){
    console.log(filter)
    card_div.innerHTML = "";
    console.log(allproduct)
    let data = allproduct.filter((item) => item.type == "fruit");
    console.log(data);
    runderCard(data);
  }else if(filter == 3){
    card_div.innerHTML = "";
    let data = allproduct.filter((item) => item.type == "vegetable");
    runderCard(data);
    
  }
}
filter();
function singleProduct(i){
  localStorage.setItem("product", JSON.stringify(allproduct[i]));
  window.location.href = "#product";
}
function runderCard(data){
  for (let i  = 0; i < data.length; i++) {
    let card = `<div > 
        <img onclick="singleProduct(${i})" src="/Components/assets/img/products/${data[i].images}"/>
        <p>${data[i].name}</p>
        <div class="price">
          <span class="light_small_font">Per Kg</span>
          <p>${data[i].price}$</p>
        </div>
        <button onclick="addToCart(${i})" class="shop">
          <i class="fa-solid fa-cart-shopping"></i>Add to Card
        </button>
      </div>`;
      card_div.innerHTML += card;
    }
}