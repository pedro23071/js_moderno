//spread operator

/* El operador de propagación (spread operator) en JavaScript 
se representa con tres puntos consecutivos (...). 
Este operador se utiliza para expandir o descomponer un iterable 
(como un array o un objeto iterable) en sus elementos individuales. 
Su funcionalidad principal es tomar todos los elementos de un iterable y copiarlos en otro iterable 
o utilizarlos como argumentos de una función. */


//copira arrays 
const array1 = [1, 2, 3];
const array2 = [...array1];  // Copia array1 en array2
console.log(array2);         // Resultado: [1, 2, 3]

//Para concatenar arrays
const array3 = [1, 2, 3];
const array4 = [4, 5, 6];
const arrayConcatenado = [...array3, ...array4];    // Concatena array1 y array2
console.log(arrayConcatenado);                      // Resultado: [1, 2, 3, 4, 5, 6]


//Para pasar elementos de un array como argumentos de una función
function suma(a, b, c) {
    return a + b + c;
}
  
const valores = [1, 2, 3];
const resultado = suma(...valores);   // Pasa los elementos de valores como argumentos individuales
console.log(resultado);               // Resultado: 6

//Para copiar objetos
const objeto1 = { a: 1, b: 2 };
const objeto2 = { ...objeto1 };     // Copia objeto1 en objeto2
console.log(objeto2);               // Resultado: { a: 1, b: 2 }


//Para fusionar objetos
const objeto3 = { a: 1, b: 2 };
const objeto4 = { b: 3, c: 4 };
const objetoFusionado = { ...objeto3, ...objeto4 };     // Fusiona los objetos, sobreescribiendo las propiedades si es necesario
console.log(objetoFusionado);                           // Resultado: { a: 1, b: 3, c: 4 }


//rest operator

/* El operador rest se utiliza principalmente en la definición de funciones 
para capturar un número indefinido de argumentos en un solo parámetro. 
Esto permite trabajar con una cantidad variable de argumentos 
de manera más conveniente. */


//Capturar argumentos en una función
function sumar(...numeros) {
    let suma = 0;
    for (let num of numeros) {
      suma += num;
    }
    return suma;
}
  
console.log(sumar(1, 2, 3));          // Resultado: 6
console.log(sumar(1, 2, 3, 4, 5));    // Resultado: 15

//Ignorar algunos elementos de un array

const [primerElemento, segundoElemento, ...restoElementos] = [1, 2, 3, 4, 5];
console.log(primerElemento);    // Resultado: 1
console.log(segundoElemento);   // Resultado: 2
console.log(restoElementos);    // Resultado: [3, 4, 5]
