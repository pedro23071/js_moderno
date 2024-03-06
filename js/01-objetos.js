

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

//Asignar mas valores
pelicula.pais = "Estados Unidos";
pelicula["duracion"] = "30 minutos"

delete pelicula.pais;
console.log(pelicula)
console.log(pelicula["director"]);


//comprobar si existe el key en el objeto
console.log("titulo" in pelicula)


//iterar sobre el objeto 
for(let propiedad in pelicula){
    let propiedadActual = pelicula[propiedad];
    if( typeof(propiedadActual) !== 'function' && propiedadActual !== null ){
        console.log(pelicula[propiedad])
    }
}