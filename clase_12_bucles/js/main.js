/** Clase 12: Bucles en js */

// let frutas = [
//     "Manzana",
//     "Pera",
//     "Frutilla",
//     "Pera",
//     "Mora",
//     "Limón",
//     "Kiwi"
//     ];


// frutas[0].length;
// frutas[1].length;
// frutas[2].length;
// frutas[3].length;
// frutas[4].length;
// frutas[5].length;
// frutas[6].length;

//While

//Incremento
/* let i = 0;
while (i <= 15){
    console.log('El valor de i: ' + i);
    i = i + 1;

}

//Decremento

let numero = 100;

while (numero > 0 ){
    document.write("Te queda de saldo ", numero,'<br>')
    numero = numero - 5;
}

// Do While

let i = 0; 
do {
console.log("Valor de i: ", i);
i = i + 1; 
} while (i < 5);

// Practica while

let pasos = 100;
while (pasos > 0){
    if (pasos === 1){
        document.write(" Solo faltan ", pasos, " paso por caminar. ", "<br>")
    } else{
        document.write(" Solo faltan ", pasos, " pasos por caminar. ", "<br>")

    }
    pasos = pasos -1;
}



// Ciclo FOR 

for( let i = 0; i <= 10; i++){
    alert(i)
}



for (let i = 1; i <= 5; i++ ){

    // Solicitar en cada repeticion un nombre
    let ingresarNombre = prompt('Ingrese un nombre');
    
    // Informar el turno asiganado
        alert ("Turno nro " + i + " Nombre: " +ingresarNombre);
    }


    // Propiedad LENGTH del array
    let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];

for (let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    console.log(fruta + ' tiene ' + fruta.length + ' letras');
}*/


let objetosMagicos = ["Varita", "Libro", "Lechuza", "Caldero"];
objetosMagicos.forEach(function(objetosMagicos){
    console.log("Objeto con ForEach es: ", objetosMagicos);
})


objetosMagicos.forEach((objetosMagicos) =>
    console.log("Objeto con ForEach con funcion flecha: ", objetosMagicos))


    // Map 
objetosMagicos.map(objeto => {  
console.log ("Objeto con map: " + objeto)
}); 


//Map 
const numeros = [1, 2, 3, 4, 5, 6, 10];
const porDos = numeros.map((x) => x * 2);
const porCien = numeros.map((x) => x * 100);


console.log("Por dos ", porDos);
console.log("Por cien ", porCien);

/* El forEach se utiliza para iterar y realizar acciones en los elementos del array original.
El map generar un nuevo array basado en las transformaciones de los elementos del array original*/


//FIND

const encontrado = numeros.find(elemento => elemento > 4);
console.log(encontrado);

const nombres = ["Ana", "Ema", "Juan"];

const nombreEncontrado = nombres.find((elemento) => elemento ==="Ana");

console.log("El nombre encontrado es",nombreEncontrado);





//FILTER

const numMayoresCinco = numeros.filter((n) => 
n >= 5);
console.log(numMayoresCinco);

const palabras = ["manzanas", "banana", "uva", "frutillas", "naranja"];

const palabraBuscada = "na";

const palabrasClave = palabras.filter(
    (palabra) => palabra.includes(palabraBuscada)
    )

    console.log(palabrasClave);

// El método 'includes' verifica si una subcadena o elemento está presente en una cadena o un array. En este caso, se usa para comprobar si "na" está dentro de cada palabra del array 'palabras', y así filtrar las palabras que contienen "na".