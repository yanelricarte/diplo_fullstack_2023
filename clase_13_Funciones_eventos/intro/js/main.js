/** Clase 13: Funciones */

function saludar(){
    let nombre = prompt('Ingresa tu nombre');
    alert ('Hola '+nombre)
}
/*
function saludar(nombre, apellido, edad){
alert("Hola " + nombre +" "+apellido +" "+edad)    
}

saludar("Harry", 'Potter', 17)

//Valores de retorno

    function multiplicar(num1, num2) {
        const num3 = 10;
        return (num1 + num2) * num3;
    }
    
    let resultado = multiplicar(40, 2);
    console.log(resultado);

    //Ejericio 
    /* Crear una función que reciba el parámetro nombre y que devuelva el largo de ese nombre. 
    Guardar el valor de retorno en una variable y mostrarlo en consola.
    Por ejemplo: si ingresamos “Ana”. El resultado debería ser 3.*/

    // function getLargoNombre (nombre){
    //     return nombre.length;
    // }

    // let nombreLength = getLargoNombre('Hermione');
    // console.log('Cantidad de caracteres: '+nombreLength);

/* 
        function sumarEdad(edad) {
            let num = 1;	
            return edad + num;
        }
        //Acá ya no podemos usar num

console.log(sumarEdad(15)) 
    console.log(num)*/

    let encabezado = document.querySelector('h1');
    console.log(encabezado.innerText)

    let texto = document.querySelector('#texto');
    console.log(texto.innerHTML)
    
    let texto2 = document.querySelector('.texto2');
    console.log(texto2.innerText)