//desstructuracion

/* nos permite extraer datos de objetos, arrays, strings en variables */

let frutas = ["manzana1", "pera2", "naranja3", "sandia4"];

/* destructuring de array se crea por indice del array */
let [manzana, pera, naranja, sandia] = frutas;

console.log(manzana)
console.log(pera)
console.log(naranja)
console.log(sandia)


/* destructuring de objetos se crea key del objeto */
let persona = {
    nombre: 'pedro',
    edad: 30,
    altura: 1.60,
    pais: 'Mexico',
}

let {nombre, altura, pais} = persona;


console.log(nombre)
console.log(altura)
console.log(pais)


function mostraUsuario({nombre, apellido = 'desconocido', ciudad = 'Barcelona'}){
    console.log(nombre, apellido, ciudad);
}


mostraUsuario({nombre: 'Pedro', ciudad: 'CDMX'}) // output Pedro desconocido CDMX