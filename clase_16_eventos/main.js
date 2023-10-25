document.addEventListener("DOMContentLoaded", function () {
  // Array para almacenar la lista de superhéroes
    const superheroes = ["Spider-Man", "Batman", "Superman"];

    // Función para mostrar la lista de superhéroes en el DOM
    const renderHeroList = () => {
        const heroList = document.getElementById("hero-list");
        heroList.innerHTML = "";

        superheroes.forEach((hero, index) => {
        const listItem = document.createElement("li");
        listItem.className = "hero-item";

        // Crear una imagen para el superhéroe

        const heroImage = document.createElement("img");
        heroImage.src = `img/${hero.toLowerCase().replace(" ", "-")}.jpg`;
        heroImage.alt = hero;
        // Agregar la imagen como un hijo del elemento de lista
        listItem.appendChild(heroImage);
        //appendChild agrega un nuevo nodo como hijo

        // Agregar el nombre del superhéroe como un hijo del elemento de lista
        const heroName = document.createElement("span");
        heroName.textContent = hero;
        listItem.appendChild(heroName);
        // Agregar el elemento de lista como un hijo del elemento 'hero-list'

        heroList.appendChild(listItem); // Agrega el elemento de lista al DOM
        });
        updateHeroCount(); // Actualiza el contador de superhéroes
    };

    // Función para agregar un superhéroe a la lista
    const addHero = () => {
        const heroInput = document.getElementById("hero-input");
        const newHero = heroInput.value;

        if (newHero) {
        superheroes.push(newHero);
        heroInput.value = "";
        renderHeroList(); // Llama a la función para volver a renderizar la lista
        }
    };

    // Agregar un controlador de eventos al botón para agregar superhéroes
    const addButton = document.getElementById("add-hero");
    addButton.addEventListener("click", addHero);

    // Función para actualizar el contador de superhéroes
    const updateHeroCount = () => {
        const heroCount = document.getElementById("hero-count");
        heroCount.textContent = `Número de superhéroes: ${superheroes.length}`;
    };

    // Llama a la función para mostrar la lista de superhéroes al cargar la página
    renderHeroList();
    });
