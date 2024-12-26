import { routes } from "./router.js";
 
 
const app = document.getElementById("app");
const scriptcontetn = document.getElementById("scriptConetent");
let currentStylesheet = null;
let currentScript = null;

async function loadComponent(filePath) {
    try {
        const response = await fetch(filePath);
        return await response.text();
    } catch (error) {
        return new Error(error.message);
    }
}
 
function loadStylesheet(cssPath) {
    if (currentStylesheet) {
        currentStylesheet.remove();
    }

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssPath;
    document.head.appendChild(link);
    currentStylesheet = link;
 }

function loadScript(scriptPath) {
     if (currentScript) {
        currentScript.remove();
    }
    const script = document.createElement("script");
    //script.remove()
    script.src = scriptPath;
    
    
    scriptcontetn.append(script);
     
    currentScript = script;
}
async function handleRoute() {
    const hash = window.location.hash.substring(1) || "home";
    const route = routes[hash];

    if (route) {
        const componentHTML = await loadComponent(route.html);
        app.innerHTML = componentHTML;

        if (route.css) {
            loadStylesheet(route.css);
        }
        
        if (route.script) {
            loadScript(route.script);
        }
    }
}
// window.addEventListener("load", loadNavbar);
// window.addEventListener("load", loadFooter);

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

async function loadNavbar() {
    const navbarHTML = await loadComponent("Components/navbarComponent/navbar.html");
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    // loadStylesheet("Components/navbarComponent/navbar.css")
    // loadScript("Components/navbarComponent/navbar.js")
    const navbarCSS = document.createElement("link");
    navbarCSS.rel = "stylesheet";
    navbarCSS.href = "Components/navbarComponent/navbar.css";
    document.head.appendChild(navbarCSS);

    const script = document.createElement("script");
    script.src = "Components/navbarComponent/navbar.js";
    scriptcontetn.append(script);
}
async function loadFooter() {
    const footerHTML = await loadComponent("Components/footerComponent/footer.html");
    app.insertAdjacentHTML("afterend", footerHTML);
    const footerCSS = document.createElement("link");
    
    footerCSS.rel = "stylesheet";
    footerCSS.href = "Components/footerComponent/footer.css";
    document.head.appendChild(footerCSS);

    const script = document.createElement("script");
    script.src = "Components/footerComponent/footer.js";
    scriptcontetn.append(script);
     
}

// let datat;
// function get_url(url) {
//     fetch(url)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         return data;
//       })
//       .then(async (data) => {
//         datat = data;
//       //  const hash = window.location.hash.substring(1) || "home";
//         const route = routes['card'];
//         let temp =  await loadComponent(route.html);
//        // console.log(temp,"/////////");
//         let after =  render(temp)
//        // console.log(after,"///////////////");
//         app.append(after)
//         // console.log(data[0].name);
//         // for (let i  = 0; i < data.length; i++) {
//         //   let card = `<div>
//         //       <img src="/Components/assets/img/products/${data[i].images}"/>
//         //       <p>${data[i].name}</p>
//         //       <div class="price">
//         //         <span class="light_small_font">Per Kg</span>
//         //         <p>${data[i].price}$</p>
//         //       </div>
//         //       <button class="shop">
//         //         <i class="fa-solid fa-cart-shopping"></i>Add to Card
//         //       </button>
//         //     </div>`;
//         //     card_div.innerHTML += card;
//         //   }
//           // console.log(card_div);
//         })
//         .catch((error) => {
//           console.log(error,"Data from json file is corrupted!!");
//         });
//       }
      
      
//   let card_div = document.querySelector("#app");
//   console.log(card_div);
  
//   get_url("http://localhost:3000/products");

// function render(template) {
//     //console.log(datat);
//      for (let key in datat) {
//         let item = datat[key];
//         //console.log(item);
//         for (let key1 in item){
//             const regex = new RegExp(`{{\\s*${key1}\\s*}}`, "g");
//             template = template.replace(regex,  item[key1]);
//         }
       
//     }
//     //console.log(template);
//     // const element = document.createElement("div");
//    // element.className = "component";
//    // element.innerHTML = template;

//     //  for (let event in this.methods) {
//     //     const [eventName, selector] = event.split(" ");
//     //     const target = element.querySelector(selector);
//     //     if (target) {
//     //         target.addEventListener(eventName, this.methods[event].bind(this));
//     //     }
//     // }

//     return template;
// }
