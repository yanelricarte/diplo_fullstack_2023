document.addEventListener("DOMContentLoaded", function () {
    // Array para almacenar la lista de superhéroes
    const superheroes = ['Spider-Man', 'Batman', 'Superman'];

    // Función para mostrar la lista de superhéroes en el DOM
    const renderHeroList = () => {
        const heroList = document.getElementById("hero-list");
        heroList.innerHTML = ''; // Borra el contenido anterior de la lista

        // Recorre el array de superhéroes y crea elementos de lista para cada uno
        superheroes.forEach((hero, index) => {
            const listItem = document.createElement("li");
            listItem.className = "hero-item"; // Aplica la clase "hero-item"

            // Crea una imagen para el superhéroe
            const heroImage = document.createElement("img");
            // Genera la ruta de la imagen basada en el nombre del superhéroe
            heroImage.src = `img/${hero.toLowerCase().replace(" ", "-")}.jpg`;
            heroImage.alt = hero;
            listItem.appendChild(heroImage);

            // Agrega el nombre del superhéroe
            const heroName = document.createElement("span");
            heroName.textContent = hero;
            listItem.appendChild(heroName);

            // Agrega el botón "Eliminar"
            const deleteButton = document.createElement("span");
            deleteButton.className = "delete-hero";
            deleteButton.dataset.index = index; // Almacena el índice en un atributo personalizado
            deleteButton.textContent = "x";
            listItem.appendChild(deleteButton);

            heroList.appendChild(listItem); // Agrega el elemento de lista al DOM
        });

        updateHeroCount(); // Actualiza el contador de superhéroes
    };

    // Función para agregar un superhéroe a la lista
    const addHero = () => {
        const heroInput = document.getElementById("hero-input");
        const newHero = heroInput.value;

        if (newHero) {
            superheroes.push(newHero); // Agrega el nuevo superhéroe al array
            heroInput.value = ""; // Limpia el campo de entrada
            renderHeroList(); // Vuelve a mostrar la lista actualizada
        }
    };

    // Función para eliminar un superhéroe de la lista
    const deleteHero = (index) => {
        superheroes.splice(index, 1); // Elimina el superhéroe del array
        renderHeroList(); // Vuelve a mostrar la lista actualizada
    };

    // Función para actualizar el contador de superhéroes
    const updateHeroCount = () => {
        const heroCount = document.getElementById("hero-count");
        const count = superheroes.length;
        heroCount.textContent = `Total de Superhéroes: ${count}`; // Actualiza el contenido del contador
    };

    // Agregamos eventos

    // Evento para el botón "Agregar"
    const addHeroButton = document.getElementById("add-hero");
    addHeroButton.addEventListener("click", addHero);

    // Evento para el campo de entrada (permite agregar superhéroes presionando Enter)
    const heroInput = document.getElementById("hero-input");
    heroInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            addHero();
        }
    });

    // Evento para la lista de superhéroes (permite eliminar superhéroes haciendo clic en "Eliminar")
    const heroList = document.getElementById("hero-list");
    heroList.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-hero")) {
            const index = event.target.getAttribute("data-index"); // Obtiene el índice almacenado en el atributo personalizado
            deleteHero(index); // Llama a la función para eliminar el superhéroe
        }
    });

    // Inicialmente, renderizamos la lista de superhéroes
    renderHeroList();
});
