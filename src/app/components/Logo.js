export function Logo(){
    const $logo = document.createElement("a");
    $logo.href="#/";

    $logo.innerHTML=`
    <img class="header__logo" src="https://images.vexels.com/media/users/3/137627/isolated/preview/012f7bd53633f5a6e78e60ea08948c55-logotipo-de-infinito-minimalista.png" alt="logo">
    `
    
    return $logo;
            
        
}