fetch('https://jsonplaceholder.typicode.com/posts')
    .then( response => {
        if(!response.ok){
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Hubo un error");
        console.log(error.message);
    })