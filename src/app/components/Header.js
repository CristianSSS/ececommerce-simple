import { Menu } from "./Menu.js";
import { Logo } from "./Logo.js";


export function Header(){

    const header = document.createElement("header");
    header.classList.add("header");

    header.appendChild(Logo());
    header.appendChild(Menu());
    
    return header;
}