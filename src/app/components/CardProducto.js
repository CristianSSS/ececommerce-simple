
export default function CardProducto(props){

    const $cardProducto = document.createElement("article");
    $cardProducto.classList.add("card-producto");

    $cardProducto.innerHTML=`
    <img class="card-producto__img" src="${props.image}" alt="producto">

    <hr>

    <span class="card-producto__precio">$ ${props.price} </span>

    <h2 class="card-producto__categoria">${props.category}</h2>

    <h3 class="card-producto__title" title="${props.title}">${props.title}</h3>

    `;

    return $cardProducto;

}