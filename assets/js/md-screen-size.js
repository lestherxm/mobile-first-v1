window.addEventListener('resize', validateScreenSize);

function validateScreenSize() {
    let ancho = window.innerWidth; // Obtiene el ancho de la ventana
    let elemento = document.querySelector('.tbl-commissions'); 

    if (ancho >= 930) { 
        elemento.classList.remove('hide-element');
    } else {
        elemento.classList.add('hide-element'); 
    }
}

validateScreenSize();