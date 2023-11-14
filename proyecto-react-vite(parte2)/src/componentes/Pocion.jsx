const Pocion = ({ pocion, completarPocion }) =>{
    const { id, nombre, completada } = pocion;
    
    const completar = () =>{
        completarPocion(id);
    };


    return(
        <div className="pocion">
        <span className={completada ? 'completada' : ''}>{nombre}</span>
        <button onClick={completar}>
            {completada ? 'Pendiente' : 'Completar'}
        </button>

        </div>
    )
}


export default Pocion;