import './Seccion.css';
import hogwarts from '../../assets/img/hogwarts.jpg';
import Boton from '../boton/Boton';



function Seccion(){
    const handlerClicEnBoton = () => {
        alert('hiciste click en el boton ')
    }
    return(
        <section className="seccion">
        <h2> Información sobre Hogwarts </h2>
        <p> La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde los jóvenes magos y brujas aprenden a dominar sus poderes </p>
        <img src= {hogwarts} alt='Hogwarts'/>
        
        <Boton texto="Ingresar" />

        <Boton color="pink" texto="Saber más" onClick={handlerClicEnBoton}/>


        </section>
        

    )

}

export default Seccion;