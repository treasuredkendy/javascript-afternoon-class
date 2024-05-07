// method- this is function belonging to an object
 
const user = {
    username: " Yator",
    email: "yator@gmail.com",
    isKenyan:true,
    age: 21,
    adminAction: function doingsmth(pass){
        console.log(pass + " is correct");
        console.log("hello I am an admin," + this.username +", I can do things you cant. ");
    },
    dob: "9/11/2005"

}

const admin = Object.create(user)
console.log(typeof user); //object
console.log(typeof admin);// object
console.log(admin.age);//90
admin.username = "peter"
admin.userAction("peterpassword")
admin.height = 700
console.log(admin);

console.log(admin.hasOwnProperty("height"));
console.log(admin.hasOwnProperty("age"));
console.log(admin.hasOwnProperty("weight"));



let numbers = [5,5,6,7,8,4];
console.log(numbers);
console.log(numbers.pop());
console.log(numbers.shift());
console.log(numbers.push(10));
console.log(numbers.push(25));
console.log(numbers.includes(5));
console.log(numbers.includes(25));
// 