 /* /  / Definimos una función que se ejecutará cada 1000 ms (1 segundo)
    function intervalFunction() {
        console.log("¡Este mensaje se mostrará cada segundo!");
    }
    
    // Usamos setInterval para llamar a la función cada segundo
    const intervalId = setInterval(intervalFunction, 1000);
    
    // Para detener el intervalo después de un tiempo específico (por ejemplo, 5 segundos):
    setTimeout(() => {
        clearInterval(intervalId);
        console.log("El intervalo se ha detenido después de 5 segundos.");
    }, 5000);


    //Definimos una funcíon que se ejecutará despues de 3000 ms}
function timeoutFunction(){
        console.log("Este mensaje se mostrará después de 3 segundos")
    }

    const timeoutId = setTimeout( timeoutFunction, 3000 )
    

    // Ejemplo setInterval


    function mostrarHora(){
        let reloj = document.getElementById("reloj");
        let hora = new Date();
        reloj.innerHTML = hora.toLocaleTimeString();    
        }

        let cronometro = setInterval( mostrarHora, 1000)


        

        let texto = document.getElementById("texto");
        console.log(texto)

        texto.innerHTML = "otra cosa";
    
        console.dir(document.body) 

    let porTag = document.getElementsByTagName("h1");
            console.log(porTag)

        let porClase = document.getElementsByClassName("parrafo");
            console.log(porClase.innerHTML)
        
            let porId = document.getElementById("texto");
            console.log(porId.innerHTML)*/ 

// ---Ejemplo SELECT DINAMICO

const categorias = [];
let entrada = prompt ("Ingresar categoria \n  (Escribir 'ESC' para salir)")

//Si la entrada es distinta a 'ESC' en cada repetición cargar una categoria

while (entrada.toUpperCase() != "ESC"){
    //Incluir la categoria en el array
    categorias.push(entrada.toLocaleUpperCase());
    //Solicitamos una nueva categoria
    entrada = prompt("Ingresar categoria \n (Escribir 'ESC' para salir)")
}
console.log(categorias)

//Obtenemos el elemento

let miSelect = document.getElementById("select");
for (const categoria of categorias){
    miSelect.innerHTML += "<option>" + categoria + "</option>";
}