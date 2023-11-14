import Pocion from "./Pocion";



const ListaDePociones = ({ pociones, completarPocion }) =>{
    return(
        <div>
            <h2> Inventario de Pociones </h2>
            {pociones.map((pocion) =>(
                <Pocion 
                    key={Pocion.id}
                    pocion={pocion}
                    completarPocion={completarPocion}
                />

            ) )}
        </div>
    )
}


export default ListaDePociones;