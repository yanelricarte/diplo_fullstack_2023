import PropTypes from "prop-types";
import Pocion from "./Pocion";

const ListaDePociones = ({ pociones, completarPocion, eliminarPocion }) => {
    return (
        <div>
        <h2> Inventario de Pociones </h2>
        {pociones.map((pocion) => (
            <Pocion
            key={pocion.id}
            pocion={pocion}
            completarPocion={completarPocion}
            eliminarPocion={eliminarPocion}
            />
        ))}
        </div>
    );
    };

    ListaDePociones.propTypes = {
    pociones: PropTypes.array.isRequired,
    completarPocion: PropTypes.func.isRequired,
    eliminarPocion: PropTypes.func.isRequired,
};

export default ListaDePociones;
