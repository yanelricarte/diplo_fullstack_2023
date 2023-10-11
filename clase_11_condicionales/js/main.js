/** Clase 11: Condicionales en js */

// IF elseif else
/* let numero = 15;
if (numero > 3) {
    console.log("El número es mayor a 3");
    } else if (numero === 3) {
    console.log("El numero es igual a 3");
    } else {
    console.log("El número es menor a 3");
    }

    //Operador condicional ternario
    // se llama así porque utiliza 3 operadores dentro de la misma sentencia
    // es un Else resumido

    // Sin operador ternario 

    let edad = 20;
    let esMayorEdad;


    if (edad > 18){
        esMayorEdad = true;
    } else{
        esMayorEdad = false;
    }
    console.log('¿Es mayor de edad?'+esMayorEdad);



    // con operador Ternario 

let esMayorEdad = edad > 18 ? true : false;
console.log('¿Es mayor de edad?'+esMayorEdad);


let nombre = "Pablo";
let edad = 16;

edad >= 18 
?console.log(nombre + " es mayor de edad") 
:console.log(nombre + " no es mayor edad"); 

//Arrays

let diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
console.log(diasSemana[0]);
console.log(diasSemana.length);



// SWITCH
let powerRanger = "Bl";

switch (powerRanger) {
  case "Red":
    console.log("Red Ranger! Jason.");
    break;
  case "Blue":
    console.log("Blue Ranger! Billy.");
    break;
  case "Black":
    console.log("Black Ranger! Zack.");
    break;
  case "Pink":
    console.log("Pink Ranger! Kimberly.");
    break;
  case "Yellow":
    console.log("Yellow Ranger! Trini.");
    break;
  default:
    console.log("No sos Power Ranger");
}

console.log(new Date().getDay());

let numeroDia = new Date().getDay();

switch (numeroDia) {
    case 1:
        dia = "lunes";
        break;
    case 2:
        dia = "martes";
        break;
    case 3:
        dia = "miércoles";
        break;
    case 4:
        dia = "jueves";
        break;
    case 5:
        dia = "viernes";
        break;
    case 6:
        dia = "sábado";
        break;
    default: 
    dia = "domingo";
}
console.log("Hoy es "+dia);
*/
// Consigna
// Usando el método  prompt pedile al usuario que ingrese un número. 

// Definí 3 caminos:
// Si el número es mayor a 10.
// Si el número es menor o igual a 10.
// Si no es un número.

// En cada camino, usá el método document.write para dejar un mensaje según la elección.


let numeroUsuario = parseInt (prompt('Ingresa un número'))

if(numeroUsuario > 10){
    document.write('El número ingresado es mayor a 10')
} else if(numeroUsuario <=10){
    document.write('El número ingresado es igual o menor a 10')
} else{
    document.write('Lo ingresado no es un número')
}