localStorage.getItem("product");
let product = JSON.parse(localStorage.getItem("product"));
console.log(product);
let templet = `
<div class="prodact-details">
        <div class="gallary">
            <div class="gallary-images">
                <img class="cart-image" src="/Components/assets/img/abt.jpg"alt="">
                <img class="cart-image" src="/Components/assets/img/abt.jpg"alt="">
                <img class="cart-image" src="/Components/assets/img/abt.jpg"alt="">
                <img class="cart-image" src="/Components/assets/img/abt.jpg"alt="">
            </div>
            <div class="main-image">
                <img   src="/Components/assets/img/products/${product.images[0]}"alt="">
            </div>
        </div>
        <div class="product-details">
            <h2>
               ${product.name}
            </h2>
            <h4 class="amount">per KG</h4>
            <h2>$ ${product.price}</h2>
            <p> ${product.description}</p>
            <div class="inputs">
                <input min='1' value='1' class="Quantaty-Number" type="number" name="" id="Quantaty-Number">
                <button onclick="addToCart(${product.id})" class="add-to-cart"><i class="fa-solid fa-cart-shopping"></i> add to cart</button>
            </div>
            
        </div>
    </div>
   


`
document.getElementById("product-contaner").innerHTML = templet;


function addToCart(i){
    let cart = localStorage.getItem("cart") ? localStorage.getItem("cart") : localStorage.setItem("cart", "[]");
    cart = JSON.parse(cart);   
    let result = cart.find((item) => item.id == product.id)
    if(result){
     cart.map((item) => {
       if(item.id == product.id){
        console.log(item.count)
         item.count  = Number(document.getElementById("Quantaty-Number").value) 
       }
     })
    }else{
     product.count = 1;
     cart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(cart))
   }