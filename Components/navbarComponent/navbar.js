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
      localStorage.clear();
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