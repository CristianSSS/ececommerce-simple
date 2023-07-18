import ajax from "./helpers/ajax.js";
import api from "./helpers/api.js";
import CardProducto from "./components/CardProducto.js";
import { Header } from "./components/Header.js";

export default function App (){

    const root = document.getElementById("root");

    root.appendChild(Header());
    
    ajax({
        url:api.SITE,
        success:(data)=>{

            const fragmento = document.createDocumentFragment();
            const cardsProductos = document.createElement("section");
            cardsProductos.classList.add("seccion-productos");
            
            data.forEach(producto => {
                
                fragmento.appendChild(CardProducto(producto))


            });

            cardsProductos.appendChild(fragmento);

            
            root.appendChild(cardsProductos) ;

        }
    })



}