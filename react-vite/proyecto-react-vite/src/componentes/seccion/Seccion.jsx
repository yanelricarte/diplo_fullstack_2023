import './Seccion.css';
import hogwarts from '../../assets/img/hogwarts.jpg';



function Seccion(){
    return(
        <section className="seccion">
        <h2> Información sobre Hogwarts </h2>
        <p> La escuela de magia y hechiceria de Hogwarts es un lugar mágico donde los jóvenes magos y brujas aprenden a dominar sus poderes </p>
        <img src= {hogwarts} alt='Hogwarts'/>
        </section>
        

    )

}

export default Seccion;