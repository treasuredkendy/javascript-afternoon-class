// control flow--- determine which code/block of code will be executed or even how many times the same is executed

// sequence -- executing code from top downwards, no skipping or repeating( default behavior)
// conditional statementas -- choose -- if elese, switch case
let mark = 77
if(mark>80){
    console.log("grade:A");
}
else if(mark>70){
    console.log("grade:B");
}
else if(mark>60){
    console.log("grade:C");
}
else if(mark>50){
    console.log("grade:D");
}
else if(mark>40){
    console.log("grade:E");
}
else if(mark>30){
    console.log("grade:E");
}
// 2. rewrite this using switch statement


switch (true) {
  case mark >= 80:
    console.log("grade:A");
    break;
  case mark >= 70:
    console.log("grade:B");
    break;
  case mark >= 60:
    console.log("grade:C");
    break;
  case mark >= 50:
    console.log("grade:D");
    break;
  case mark >= 40:
    console.log("grade:E");
    break;
  case mark >= 30:
    console.log("grade:F");
    break;
  default:
    console.log("grade: Invalid mark (below 30)");
}
// iteration,loops -- repeating execution of a block of code-- while loop, do while , for loop

let year = 1990
while (year<2024){
    console.log("we are in" + year);
    console.log("jan feb--dec");
    year = year + 1;
}
// rewrite this loop using a for loop
for (let year = 1990; year < 2024; year++) {
    console.log("we are in", year);
    console.log("jan feb--dec");
  }


//   find minimum and maximum: write a program that iterates through an array of integers and keeps track of the minimum and maximum values encountered 