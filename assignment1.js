// Working woti arrays and objects
let colorsList = ["red", "blue", "yellow","black", [1,2,45,6], [43,33,23]]
// to access values stored in an array, we use indexes with square bracket notation
// arrays are zero indexed - indexing/counting begins at 0

// example 1:- log the last color in the colors list 
console.log( colorsList[3] ); 
// example 2:- log the first color in the colors list 
console.log( colorsList[0] ); 
// example 3 : the last element of the array
console.log( colorsList[5] ); // the array of numbers ending with 3

let lastEl = colorsList[5]
console.log(colorsList);
console.log(lastEl[1]); //33
console.log( colorsList[5][1] ); //33
// matrix   [ [1,2,3], [5,6,7], [7,8,9] ]
// log number 45

let car1 = {
    type: "Subaru",
    model: "Forester",
    year: 2013,
    colors: ["blue","grey","black"],
    japanese: true,
}
let car2 = {
    type: "Toyota",
    model: "Prado TX",
    year: 2022,
    colors: ["blue","grey","white"],
    japanese: false,
}


// we use dot notation to access values in an object
// log the car 1 type
console.log( car1.type );
// model car 2
console.log( car2.model );
// last available  color for the Prado 
console.log( car2.colors[2]   ); // white

// Modifying the values
colorsList[0] = "brown"
console.log(colorsList);
console.log(car2);
car2.year = 2019
car2.colors[13] = "green"
console.log( car2 );

