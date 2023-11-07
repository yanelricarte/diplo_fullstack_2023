import './App.css'
import Footer from './componentes/footer/Footer'
import Header from './componentes/header/Header'
import Seccion from './componentes/seccion/Seccion'

function App() {

  return (
      <div className="container">
    <Header />
      <main>
      <Seccion/>
      </main>
      <Footer/>

      </div>

  )
}

export default App
