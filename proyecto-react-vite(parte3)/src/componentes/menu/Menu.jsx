import { Link } from "react-router-dom";
import './Menu.css';

// npm i react-router-dom


const Menu = () => {

    return(
        <nav className="menu">
        <ul className="menu-list">
            <li className="menu-item">
                <Link to="/" className="menu-link">
                Inicio
                </Link>
            </li>
            <li className="menu-item">
                <Link to="/pociones" className="menu-link">
                Pociones
                </Link>
            </li>
            <li className="menu-item">
                <Link to="/casas" className="menu-link">
                Casas
                </Link>
            </li>
            <li className="menu-item">
                <Link to="/personajes" className="menu-link">
                Personajes
                </Link>
            </li>
            <li className="menu-item">
                <Link to="/favorito" className="menu-link">
                Agrega a tu personaje favorito
                </Link>
            </li>
            </ul>
        </nav>
        );
    }




export default Menu;