import PropTypes from "prop-types";
import imagenes from './imagenes';



function Casa(props){
    console.log('Ruta de la imagen:', imagenes[props.imagen]);

    return(
        <section className="seccion">
        <h2> {props.nombre}</h2>
        <p> {props.valores}</p>
        <p> {props.animal}</p>
        <p> {props.director}</p>
        <p> {props.ubicacion}</p>
        <img src={imagenes[props.imagen]} alt={props.nombre}/>


        </section>
    )
}

Casa.propTypes = {
    nombre: PropTypes.string.isRequired,
    valores: PropTypes.string,
    animal: PropTypes.string,
    color: PropTypes.string,
    director: PropTypes.string,
    ubicacion: PropTypes.string,
    imagen: PropTypes.string,

};


export default Casa;