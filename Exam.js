/*Declare a variable name to store your name and another variable age to store your age. Assign appropriate
 values to them. Then, print these values in a single sentence, e.g., "My name is John and I am 25 years old."*/ 
let name = "Hart"
let age = 19
console.log("My name is "+ name + " and I am "+age+" years old.")

/*Create variables of different types (string, number, boolean, undefined, null). Write code to log each 
variable's type using typeof operator.*/
let string = "String"
let number = 10
let boolean = true
let noDefined = undefined
let nothing = null
console.log(typeof string)
console.log(typeof number)
console.log(typeof boolean)
console.log(typeof noDefined)
console.log(typeof nothing)

/*Declare a let variable called score and assign a value of 100 to it. Then, change the value to 
200 and log both values.*/ 
let num = 100
num = 200
console.log(num)

/*Declare a constant PI with the value 3.14159. Try to reassign it to another value and observe what happens.*/ 
const PI = 3.14159
//PI = "changed"
//console.log(PI) //CANT CHANGE CUZ IT CONST DUMBASS

/*Use a template literal to create a message that includes a variable for your favorite food and your favorite
 color. For example: "I love eating pizza and my favorite color is blue."*/ 
const food = "pizza"
const color = "green"
console.log("I love eating "+ food+" and my favorite color is "+ color+".")