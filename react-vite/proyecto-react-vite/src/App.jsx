import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import Casa from './componentes/Casa';

function App() {
  const casas = [
    {
      nombre: 'Gryffindor',
      valores: 'Coraje, valentía y audacia',
      animal: 'León',
      color: 'Rojo y dorado',
      director: 'Albus Dumbledore',
      ubicacion: 'Torre Gryffindor, Castillo de Hogwarts',
      imagen: 'gryffindor.jpeg',
    },
    {
      nombre: 'Hufflepuff',
      valores: 'Lealtad, paciencia y amistad',
      animal: 'Tejón',
      color: 'Amarillo y negro',
      director: 'Pomona Sprout',
      ubicacion: 'Sótano, Castillo de Hogwarts',
      imagen: 'hufflepuff.jpg',
    },
    {
      nombre: 'Ravenclaw',
      valores: 'Sabiduría, creatividad e inteligencia',
      animal: 'Águila',
      color: 'Azul y bronce',
      director: 'Filius Flitwick',
      ubicacion: 'Torre Ravenclaw, Castillo de Hogwarts',
      imagen: 'ravenclaw.jpeg',
    },
    {
      nombre: 'Slytherin',
      valores: 'Ambición, astucia y determinación',
      animal: 'Serpiente',
      color: 'Verde y plateado',
      director: 'Severus Snape',
      ubicacion: 'Mazmorras, Castillo de Hogwarts',
      imagen: 'slytherin.jpg',
    },
  ];




  return (
      <div className="container">
    <Header />
      <main>
      <Seccion/>
      </main>
      <div>
        {casas.map((casa, index) => (
          <Casa 
            key={index}
            nombre={casa.nombre}
            valores={casa.valores}
            animal={casa.animal}
            color={casa.color}
            ubicacion={casa.ubicacion}
            imagen={casa.imagen}

          />

        ))}
      </div>
      <Footer/>

      </div>

  )
}

export default App
