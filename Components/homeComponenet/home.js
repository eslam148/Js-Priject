var wraper = document.getElementsByClassName("wraper")[0];
// console.log(bgimage);
// var arr_images = [];
// for (let i = 0; i < bgimage.length; i++) {
//   arr_images.push(bgimage[i]);
// }
// console.log(arr_images);
let count = 0;
setInterval(() => {
  wraper.style.transform = `translateX(-${100 * count}%)`;
  count++;
  if (count == 3) {
    count = 0;
  }
}, 3000);

// =========== fetch cards data =========

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
      for (let i = 0; i < data.length; i++) {
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

// =========== up arrow ==========
let arrow = document.querySelector(".up_arrow");

// function uparrow(){

// }
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    arrow.style.display = "none";
  } else {
    arrow.style.display = "inline";
  }
});
