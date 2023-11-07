
//Arrays

const numeros  = [1, 2, 3, 4, 5];
const porDos   = numeros.map(x => x * 2);   // porDos = [2, 4, 6, 8, 10]
const masCien  = numeros.map(x => x + 100); // masCien = [101, 102, 103, 104, 105]]
const masCien2  = porDos.map(x => x + 100); // masCien2 = [102, 104, 106, 108, 110]


console.log(numeros)
console.log(porDos)
console.log(masCien)
console.log(masCien2)


const nombres = ["Ana", "Ema", "Juan", "Elia"];
const lengths = nombres.map(nombre => nombre.length);//lengths = [3, 3, 4, 4]