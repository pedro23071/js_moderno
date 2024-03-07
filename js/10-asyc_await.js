async function fetchData() {
    try {
      // Hacer la solicitud utilizando fetch y esperar la respuesta
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      // Verificar si la respuesta fue exitosa
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      
      // Extraer los datos en formato JSON y esperar a que se completen
      const data = await response.json();
      
      // Hacer algo con los datos recibidos
      console.log(data);
      
      // Retornar los datos si es necesario
      return data;
    } catch (error) {
      // Manejar cualquier error que pueda ocurrir durante la solicitud
      console.error('Se produjo un error:', error);
      // Retornar un valor predeterminado o lanzar una excepción
      throw error;
    }
}


let data = fetchData();
console.log(data);