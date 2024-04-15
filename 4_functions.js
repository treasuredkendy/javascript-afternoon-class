// function definition
function printPdf(name, grade){
    // name and grade are aarguments in this functions
    console.log("starting the task!!");
    console.log("printing report cawrd for" + name);
    console.log("grade attained: " + grade);
    console.log("finished");
}
printPdf("tracy", 90);
printPdf("james", 20);
printPdf("albert", 99);
printPdf("bob", 75);
printPdf("vic", 45);
// write a fuction to calculate the area of a square, given that the length of the base as an argument
//  log .e.g. "the area of square of base 6 is 32"

function calculateSquareArea(base) { 
    var area = base * base; 
  
   
  console.log("The area of the square is: " + area); }
calculateSquareArea(9)