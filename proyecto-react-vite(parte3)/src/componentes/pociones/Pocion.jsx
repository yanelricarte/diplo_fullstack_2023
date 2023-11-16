import PropTypes from "prop-types";

const Pocion = ({ pocion, completarPocion, eliminarPocion }) => {
    const { id, nombre, completada } = pocion;

    const completar = () => {
        completarPocion(id);
    };

    const eliminar = () => {
        eliminarPocion(id);
    };

    return (
        <div className="pocion">
        <span className={completada ? 'completada' : ''}>{nombre}</span>
        <button onClick={completar}>
            {completada ? 'Pendiente' : 'Completar'}
        </button>
        <button onClick={eliminar}>Eliminar</button>
        </div>
    );
    };

    // Utiliza 'propTypes' (con 'p' minúscula)
    Pocion.propTypes = {
    pocion: PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        completada: PropTypes.bool.isRequired,
    }),
    completarPocion: PropTypes.func.isRequired,
    eliminarPocion: PropTypes.func.isRequired,
    };

    export default Pocion;
