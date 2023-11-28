import { useState, useEffect } from 'react';

    const PersonajesFavoritos = () => {
     // Estado para almacenar la lista de personajes favoritos
    const [personajesFavoritos, setPersonajesFavoritos] = useState(() => {
        // Inicializar el estado con los datos almacenados en localStorage
        const personajesGuardados = localStorage.getItem('personajesFavoritos');
        return personajesGuardados ? JSON.parse(personajesGuardados) : [];
    });

    // Estado para almacenar el nuevo personaje que se está ingresando
    const [nuevoPersonaje, setNuevoPersonaje] = useState('');

    // Efecto secundario para guardar datos en localStorage cuando 'personajesFavoritos' cambia
    useEffect(() => {
        localStorage.setItem('personajesFavoritos', JSON.stringify(personajesFavoritos));
    }, [personajesFavoritos]);

    // Manejador de cambio para actualizar el estado 'nuevoPersonaje' cuando se escribe en el input
    const handleChange = (e) => {
        setNuevoPersonaje(e.target.value);
    };

    // Manejador de tecla para agregar un nuevo personaje cuando se presiona la tecla Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && nuevoPersonaje.trim() !== '') {
        // Validar si el personaje ya existe antes de agregarlo
        if (!personajesFavoritos.includes(nuevoPersonaje)) {
            // Agregar un nuevo personaje a la lista
            setPersonajesFavoritos([...personajesFavoritos, nuevoPersonaje]);
            // Limpiar el estado del nuevo personaje después de agregarlo
            setNuevoPersonaje('');
        } else {
            console.log('¡Este personaje ya está en la lista!');
        }
        }
    };

    return (
        <div className="container">
        <h1 className="title">Mis Favoritos de Harry Potter</h1>
        <label htmlFor="inputPersonaje" className="label">
            Ingresa un personaje favorito:
            </label>
            <input
            type="text"
            id="inputPersonaje"
            value={nuevoPersonaje}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="input"
            placeholder='Agregá a tu personaje favorito'
            />
            <ul className="list">
            {personajesFavoritos.map((personaje, index) => (
                <li key={index} className="listItem">
                {personaje}
                </li>
            ))}
            </ul>
        </div>
    );
    };

    export default PersonajesFavoritos;
