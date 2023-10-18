/**Ejemplo funciones y dom */

//Función para mostrar u ocultar elementos con una clase específica

function alernarVisibilidad(){
    const elementos = document.getElementsByClassName('claseEjemplo');
    for (const elemento of elementos){
        if (elemento.style.display === 'none'){
            elemento.style.display = 'block'; // si está oculto, lo muestra
        } else{
            elemento.style.display = 'none'; // si esta visible, lo oculta
        }
    }
}

//Función para mostrar u ocultar un elemento con un id especifico
function mostrarOcultarElemento(){
    const elemento = document.getElementById('miElemento');
    elemento.classList.toggle('oculto'); //Alterna la clase 'oculto' para mostrar u ocultar
}

// Asignar funciones a eventos

document.getElementById('mostrarOcultarBtn').addEventListener('click', alernarVisibilidad);
document.getElementById('mostrarOcultarBtn').addEventListener('click', mostrarOcultarElemento);

