import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './componentes/footer/Footer';
import Header from './componentes/header/Header';
import Seccion from './componentes/seccion/Seccion';
import ListaCasas from './componentes/casas/ListaCasas';
import Menu from './componentes/menu/Menu';
import GestionPociones from './componentes/pociones/GestionPociones';
import ListaPersonajes from './componentes/personajes/ListaPersonajes';
import DetallePersonaje from './componentes/personajes/DetallePersonaje'
import PersonajesFavoritos from './componentes/personajes/PersonajesFavoritos';


function App() {
  


  return (
    <Router>
      <div className="container">
    <Header />
    <Menu />
      <main>
      <Routes>
        <Route path='/' element={<Seccion />} />
        <Route path='/pociones' element={<GestionPociones />} />
        <Route path='/casas' element={<ListaCasas />} />
        <Route path='/favorito' element={<PersonajesFavoritos />} />
        <Route path='/personajes' element={<ListaPersonajes />} />
        <Route path='/DetallePersonaje/:id' element={<DetallePersonaje />} />


      </Routes>
            </main>
      
      <Footer/>

      </div>
      </Router>

  )
}

export default App
