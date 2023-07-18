import App from "./App.js";
import { Header } from "./components/Header.js";

const body = document.getElementById("body");
body.appendChild(Header());

window.addEventListener("DOMContentLoaded",App)

window.addEventListener("hashchange",App)
    
    


    





