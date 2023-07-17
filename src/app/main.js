import Products from "./api/products_api.js";
import {drawListProducts} from "./dom/listProducts.js"

import ajax from "./helpers/ajax.js";

import urls from "./helpers/api.js";

const producto = new Products();


// producto.getAllProducts()
// .then(data =>{

//     console.log(data)
//     drawListProducts(data);
// })


ajax({
    url:urls.SITE,
    success:(data)=>{
        drawListProducts(data);
    }
})
