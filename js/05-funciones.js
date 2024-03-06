//funciones flecha

let saludo = nombre => console.log("hola "+ nombre)
saludo("pedro");

let saludo2 = (nombre, apellido) => console.log(`hola ${nombre} ${apellido}`) ;
saludo2("Daniela", "Sanchez")

let saludo3 = (nombre, apellido, edad) => {
    let msg = edad >= 18 ? "soy mayor de edad" : "soy menor de edad"
    return `hola ${nombre} ${apellido} ${msg}`;
}
console.log(saludo3("Daniela", "Sanchez", 12))