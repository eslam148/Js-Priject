//david work
let bg_nav = document.querySelector("nav");

console.log(bg_nav);
export function navscroll(wind){
      if (wind.scrollY > 0) {
        bg_nav.style.backgroundColor = "rgba(0, 0, 0, 0.774)";
      } else {
        bg_nav.style.backgroundColor = "transparent";
      }
}

