const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah',
    },
    dog: {
      apellido: "test 123",
    }
  };
  

  const dogApellido = adventurer.dog?.apellido;
  console.log(dogApellido);

  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // Expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // Expected output: undefined