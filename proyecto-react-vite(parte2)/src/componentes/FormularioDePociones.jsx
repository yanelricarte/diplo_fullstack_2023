import { useState } from 'react';

const FormularioDePociones = ({ agregarPocion }) => {
const [nuevaPocion, setNuevaPocion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nuevaPocion.trim() !== '') {
        agregarPocion(nuevaPocion);
        setNuevaPocion('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={nuevaPocion}
            onChange={(e) => setNuevaPocion(e.target.value)}
            placeholder="Nueva Poción"
        />
        <button type="submit">Agregar</button>
        </form>
    );
    };

export default FormularioDePociones;
