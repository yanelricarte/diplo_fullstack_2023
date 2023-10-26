  // Clase para representar una mascota
  class Mascota {
    constructor(nombre) {
        this.nombre = nombre;
        this.adoptada = false;
    }

    // Método para marcar una mascota como adoptada
    adoptar() {
        this.adoptada = true;
    }
}

// Función para agregar una nueva mascota a la lista
function agregarMascota() {
    const inputMascota = document.getElementById("nuevaMascota");
    const nombreMascota = inputMascota.value.trim();

    if (nombreMascota !== "") {
        const nuevaMascota = new Mascota(nombreMascota);

        // Crear un elemento de lista y aplicar estilos según el estado
        const elementoLista = document.createElement("li");
        elementoLista.textContent = nuevaMascota.nombre;
        if (nuevaMascota.adoptada) {
            elementoLista.classList.add("adoptada");
        }

        // Agregar un evento de clic para marcar/adoptar la mascota
        elementoLista.addEventListener("click", function () {
            nuevaMascota.adoptar();
            elementoLista.classList.add("adoptada");
        });

        // Agregar la mascota a la lista
        const listaMascotas = document.getElementById("listaMascotas");
        listaMascotas.appendChild(elementoLista);

        // Limpiar el campo de entrada
        inputMascota.value = "";
    }
}

// Obtener el botón para agregar mascotas
const botonAgregarMascota = document.getElementById("agregarMascota");

// Agregar un evento de clic al botón para agregar mascotas
botonAgregarMascota.addEventListener("click", agregarMascota);