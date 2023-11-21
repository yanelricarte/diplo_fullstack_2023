import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './personajes.css';



function ListaPersonajes(){
    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const BASE_URL = "https://hp-api.onrender.com/api/characters";

        const fetchData = async() => {
            try{
                const response = await fetch(BASE_URL);
                const data = await response.json();
                setPersonajes(data);
                setLoading(false);
            } catch(error){
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    return(
        <div> 
        <h2> Lista Personajes </h2>
        <p> Listado de personajes</p>
        { loading ? (
            <p> Cargando Personajes...</p>
        ) : (
            <div className="contenedor-personajes">
            <ul className="personajes-lista">
            {personajes.map((personaje) =>(
                <li key={personaje.name} className="personaje-item"> 
                <h3> {personaje.name}</h3>
                <p> Casa: {personaje.house}</p>
                <p> Actor: {personaje.actor}</p>
                <div className="contenedor_imagen">
                <img src={personaje.image}/></div>
                <Link to={`/DetallePersonaje/${personaje.id}`}>Ver Detalle</Link>
                </li>
            ))} 
            </ul></div>
        )}
        </div>
    )

}

export default ListaPersonajes;
