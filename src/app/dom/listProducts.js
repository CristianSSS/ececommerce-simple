
    export const drawListProducts= (productos) =>{

        const fragmento = document.createDocumentFragment();
        const seccion = document.querySelector(".seccion-productos");


        productos.forEach(producto => {
        
            let article = document.createElement("article");
            let img = document.createElement("img");
            let hr = document.createElement("hr");
            let span = document.createElement("span");
            let h2 = document.createElement("h2");
            let h3 = document.createElement("h3");


            article.classList.add("card-producto");


            img.classList.add("card-producto__img");
            img.setAttribute("src",`${producto.image}`);
            img.setAttribute("alt",`${producto.title}`);

            span.classList.add("card-producto__precio");
            span.textContent =`$ ${producto.price}`;

            h2.classList.add("card-producto__categoria");
            h2.textContent = `${producto.category}`

            h3.classList.add("card-producto__title");
            h3.setAttribute("title",`$ ${producto.title}`);
            h3.textContent = `${producto.title}`;

            article.appendChild(img, hr, span, h2,h3);
            article.appendChild(hr);
            article.appendChild(span);
            article.appendChild(h2);
            article.appendChild(h3);

            fragmento.appendChild(article);

        });


        seccion.appendChild(fragmento);
    }
