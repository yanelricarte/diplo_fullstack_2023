
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function DetallePersonaje() {

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [personaje, setPersonaje] = useState({});
    
        useEffect(() => {
        fetch(`https://hp-api.onrender.com/api/character/${id}`)
            .then((response) => response.json())
            .then((data) => {
            setPersonaje(data[0]); 
            setLoading(false);
            })
            .catch((error) => {
            console.error(error);
            setLoading(false);
            });
        }, [id]);
    
        if (loading) {
        return <div>Cargando...</div>;
        } else {
        return (
            <div>
            
            <h2>Detalle Personaje</h2>
            <p>Nombre: {personaje.name}</p>
            <p>Casa: {personaje.house}</p>
            <p>Especie: {personaje.species}</p>
            <p>Patronus: {personaje.patronus}</p>
            <img src={personaje.image}/>
            </div>
        );
        }
    }
    
    export default DetallePersonaje;