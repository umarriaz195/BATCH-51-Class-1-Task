interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, modelName: string, options: Record<string, any>): Car {
    const car: Car = {
      manufacturer,
      modelName,
      ...options,
    };
  
    return car;
  }
  
  const myCar = createCar("Toyota", "Camry", { color: "Blue", hasSunroof: true });
  const myCar2 = createCar("Honda", "Accord", { color: "Red", hasSunroof: false });
  
  console.log(myCar);
  console.log(myCar2);
  