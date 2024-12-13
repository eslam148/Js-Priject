import { routes } from "./router.js";

const app = document.getElementById("app");
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
    script.remove()
    script.src = scriptPath;
    document.head.appendChild(script);
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

window.addEventListener("hashchange", handleRoute);
window.addEventListener("load", handleRoute);

async function loadNavbar() {
    const navbarHTML = await loadComponent("Components/navbarComponent/navbar.html");
    document.body.insertAdjacentHTML("afterbegin", navbarHTML);
    const navbarCSS = document.createElement("link");
    navbarCSS.rel = "stylesheet";
    navbarCSS.href = "Components/navbarComponent/navbar.css";
    document.head.appendChild(navbarCSS);
}

window.addEventListener("load", loadNavbar);
