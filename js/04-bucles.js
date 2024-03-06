let nombres = [
    "pedro",
    "cirse",
    "daniela",
    "daniel"
]

//bucle for 
for(let i = 0; i < nombres.length; i++){
    console.log("bucle for: ",nombres[i])
}

//bucle for of -----  recorre el contenido de los indices 
for(let nombre of nombres){
    console.log("bucle for of: ", nombre);
}

//bicle for in -----  recorre los indices 
for(let index in nombres){
    console.log("bucle for in: ", index, nombres[index])
}


let pelicula = {
    titulo: "space jam",
    genero: "Animacion",
    anio: 1999,
    director: "Test 12",
    mostrar: function(){
        return `
            *** LA PELICULA DE LA SEMANA ***
            Titulo: ${this.titulo}
            Genero: ${this.genero}
            Año: ${this.anio}
            Director: ${this.director}
        `
    },
}


for(let index in pelicula){
    let propiedadActual = pelicula[index];
    if( typeof(propiedadActual) !== 'function' && propiedadActual !== null ){
        console.log("for in de un json: ", pelicula[index])
    }
}


//foreach 
nombres.forEach(function(value_actual, index){
    console.log("foreach: ", index, value_actual)
});


//iterables