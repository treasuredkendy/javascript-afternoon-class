// find the minimum and maximum: write a program that iterates through an array of integers and keeps track of the minimum and maximum values encountered. print the minimum and maximum element at the end. 

let mylist = [3,34,2,33,40,89,140,22,23,630,55,32,12]

let min = mylist[0]
let max = mylist[0]

let count = 1

while (count<mylist.length){
    let currentnumber = mylist[count]
    if(currentnumber<min){min = currentnumber}
    if(currentnumber>max){max = currentnumber}

    count = count + 1
    
}

console.log("min number:"+min);
console.log("max number:"+max);