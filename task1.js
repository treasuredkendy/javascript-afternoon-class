const cars = [
    {
      type: "Toyota",
      model: "Prado TX",
      year: 2022,
      colors: ["blue", "grey", "white"],
      japanese: false,
      details: {
        engine: {
          type: "2.7L I4",
          horsepower: 160
        },
        features: {
          sunroof: true,
          seating: 7
        },
        mileage: 25000
      }
    },
    {
      type: "Honda",
      model: "Civic LX",
      year: 2023,
      colors: ["red", "black", "silver"],
      japanese: true,
      details: {
        engine: {
          type: "1.5L I4",
          horsepower: 110
        },
        features: {
          sunroof: false,
          seating: 5
        },
        mileage: 10000
      }
    },
    {
      type: "Ford",
      model: "Mustang GT",
      year: 2024,
      colors: ["blue", "black", "white"],
      japanese: false,
      details: {
        engine: {
          type: "5.0L V8",
          horsepower: 480
        },
        features: {
          sunroof: true, 
          seating: 4
        },
        mileage: null
      }
    }
  ];
  //use dot notation and bracket notation to solve these:-
  
  // What is the mileage of the Honda? 
  let honda = cars[1]
console.log(honda.details.mileage);
  // Check if the last car is a Japanese brand:
console.log(cars[2].japanese);
  //Change the last color of the first car to "red" and log the updated colors array: 
cars[0].colors[2] = "red";
console.log(cars[0].colors[2] = "red");
  // Check if the first car has sunroof
  console.log(cars[0].details.features.sunroof);
  cars[1].details.engine.type = "2.0l I3";
  console.log(  cars[1].details.engine.type)