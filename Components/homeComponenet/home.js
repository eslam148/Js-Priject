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
      for (let i  = 0; i < data.length; i++) {
        let card = `<div>
            <img src="/Components/assets/img/products/${data[i].images}"/>
            <p>${data[i].name}</p>
            <div class="price">
              <span class="light_small_font">Per Kg</span>
              <p>${data[i].price}$</p>
            </div>
            <button class="shop">
              <i class="fa-solid fa-cart-shopping"></i>Add to Card
            </button>
          </div>`;
          card_div.innerHTML += card;
        }
        // console.log(card_div);
      })
      .catch((error) => {
        console.log("Data from json file is corrupted!!");
      });
    }
    
    
let card_div = document.querySelector("section.card");
console.log(card_div);

get_url("http://localhost:3000/products");


