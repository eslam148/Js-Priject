//david work

   function navscroll(wind){
var bg_nav = document.getElementById("nav");

      if (wind.scrollY > 0) {
        bg_nav.style= "background-color: rgba(0, 0, 0, 0.88);height:10vh;transition:0.6s;padding-top:5px;";
      } else {
        bg_nav.style = "background-color:transparent;transition:0.6s;";
      }
}

window.addEventListener("scroll",()=>{navscroll(this)})