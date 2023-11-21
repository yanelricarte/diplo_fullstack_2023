import { Link } from "react-router-dom";


// npm i react-router-dom


const Menu = () => {

    return(
<nav>
    <ul>
        <li> <Link to="/"> Inicio </Link></li>
        <li> <Link to="/pociones"> Pociones </Link></li>
        <li> <Link to="/casas"> Casas </Link></li>
        <li> <Link to="/personajes"> Personajes </Link></li>


    </ul>
</nav>
    )
}




export default Menu;