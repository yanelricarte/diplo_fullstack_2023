import PropTypes from "prop-types";
import "./Boton.css";

function Boton(props) {
    const estilosBoton = {
        backgroundColor: props.color,
    };

    return (
        <div>
            <button className="boton" style={estilosBoton} onClick={props.onClick}>
                {props.texto}
            </button>
        </div>
    );
}

Boton.propTypes = {
    color: PropTypes.string,
    texto: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Boton;
