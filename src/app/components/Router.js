import ajax from "../helpers/ajax.js";
import api from "../helpers/api.js";
import CardProducto from "./CardProducto.js";

export function Router(){

    const root = document.getElementById("root");
    const location = window.location;

    let {hash} = location

   
    if(hash === "" || hash === "#"){

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
       
    }else if(hash === "#perfil"){

        

    }




}