export function Menu(){

    const $nav = document.createElement("nav");

    $nav.classList.add("nav");

    $nav.innerHTML=`
    <menu class="menu">

    <li class="menu__li">

        <a class="li__a" href="/#">
            Inicio
        </a>

    </li>

    <li class="menu__li">

        <a class="li__a" href="/#productos">
            Productos
        </a>

    </li>
    
    <li class="menu__li">

        <a class="li__a" href="/#perfil">
            Perfil
        </a>

    </li>

    <li class="menu__li menu__li--carrito">

        <a class="li__a" href="/#carrito">
            Carrito
        </a>

    </li>
</menu>
    `;


    return $nav;



}