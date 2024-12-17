let cart = localStorage.getItem("cart");
let totalPrice = 0;
if(cart){
    cart = JSON.parse(cart);
    let tbody = document.getElementById("tbody");
    cart.map((item,i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>
                        <button class="btn-remove">X</button>
                    </td>
                    <td>
                        <img class="cart-image" src="/Components/assets/img/products/${item.images[0]}"alt="">
                    </td>
                    <td>${item.name}</td>
                    <td>$${item.price}	</td>
                    <td>
                        <input min="1" onchange="changeCount(event, ${i})" value="${item.count}"  class="count-input" type="number" name="" id="">
                    </td>
                    <td>${(item.count* item.price).toFixed(2)}</td>   
        `
        totalPrice += (item.count* item.price) 
        tbody.appendChild(tr);
    })
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}
function changeCount(event, i){
   totalPrice = totalPrice - (cart[i].price *cart[i].count) + event.target.value * cart[i].price;
   cart[i].count = event.target.value;
   document.getElementById("total-price").innerText = totalPrice.toFixed(2);
}
