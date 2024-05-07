//  sum of even numbers : create a program that processes an array of numbers . traverse the array and accumulates the sum of all even numbers within it.

const mylist1 = [3,34,2,33,40,89,140,22,23,630,55,32,12]
const mylist2 = [23,45,66,44,21,33,88,12,334,57,2,4,6]

function sumevennummbers(thenumbers){
    let sum = 0
    for(let index = 0; index<thenumbers.length; index++){
        let currentnumber= thenumbers[index]
        if(currentnumber % 2===0){
            sum = sum + currentnumber
        }
    }
    return sum
}

console.log(sumevennummbers(mylist2));

const result = sumevennummbers(mylist1)

console.log(result);