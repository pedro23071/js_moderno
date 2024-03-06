

let persona =[ 
    {
        nombre: 'pedro',
        edad: 30,
        altura: 1.60,
        pais: 'Mexico',
    },
    {
        nombre: 'Daniela',
        edad: 12,
        altura: 1.60,
        pais: 'Mexico',
    },
    {
        nombre: 'Daniel',
        edad: 3,
        altura: 1.10,
        pais: 'Mexico',
    },
];


let getPerosonas = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(persona);
        }, 300);
    });
}


getPerosonas()
    .then((items) => {
        console.log(items);
    }).catch((error) => {
        // La operación falló
        console.error(error);
    });



/* Las promesas en JavaScript son un objeto que representa el resultado 
eventual (o el fracaso) de una operación asíncrona. 
Las promesas pueden estar en uno de los siguientes estados:

1- Pendiente (Pending): Estado inicial de una promesa. La operación aún no se ha completado.

2- Cumplida (Fulfilled): La operación se completó satisfactoriamente y la promesa 
ahora tiene un valor resultante.

3- Rechazada (Rejected): La operación falló y la promesa tiene un motivo de rechazo, 
es decir, un error que describe por qué falló la operación.

Las promesas ofrecen una forma más limpia y fácil de trabajar con operaciones asíncronas en JavaScript 
en comparación con los callbacks anidados. Aquí tienes un ejemplo básico de cómo crear y usar una promesa: */

// Crear una nueva promesa
let miPromesa = new Promise((resolve, reject) => {
    // Simular una operación asíncrona (por ejemplo, una solicitud HTTP)
    setTimeout(() => {
      // Comprobar si la operación fue exitosa o no
      let exito = true;
      if (exito) {
        // Si la operación fue exitosa, resolvemos la promesa con un valor
        resolve("¡Operación completada satisfactoriamente!");
      } else {
        // Si la operación falló, rechazamos la promesa con un error
        reject("¡Error: la operación falló!");
      }
    }, 2000); // Simulamos una operación que toma 2 segundos
});
  
  // Usar la promesa
miPromesa.then((resultado) => {
    // La operación se completó satisfactoriamente
    console.log(resultado);
}).catch((error) => {
    // La operación falló
    console.error(error);
});