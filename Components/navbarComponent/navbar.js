 loginUser = JSON.parse(localStorage.getItem("user")) ;
 if(loginUser){
    let user = document.getElementById("login");
    user.href ="";
    user.innerHTML = loginUser.name
    let userdata = document.getElementById("userdata");
    let signout =  document.createElement("a")
    signout.href="#"
    signout.innerHTML = "SignOut"
    signout.addEventListener("click",()=>{
      user.href ="#logIn";
      user.innerHTML = 'Sing In'
      localStorage.clear();
      signout.remove();
    })
    userdata.append(signout)
}
 
function navscroll(wind){
var bg_nav = document.getElementById("nav");

      if (wind.scrollY > 0) {
        bg_nav.style= "background-color: rgba(0, 0, 0, 0.88);height:10vh;transition:0.6s;padding-top:5px;";
      } else {
        bg_nav.style = "background-color:transparent;transition:0.6s;";
      }
}

window.addEventListener("scroll",()=>{navscroll(this)})

setInterval(()=>{
  let cart = JSON.parse(localStorage.getItem("cart"))
  if(cart){
    let cart_count = document.getElementById("cart_count")
    cart_count.innerHTML = cart.length
  }
},100)