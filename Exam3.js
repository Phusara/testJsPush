/*Declare an array of your 3 favorite fruits. Access and log the second fruit in the array.*/
const favFruits = ["Orange","Grape","Strawberry"]
console.log(favFruits[1]) 

/*Create an array of numbers. Use the .push() method to add a new number at the end, and the .pop() 
method to remove the last number. Log the array at each step.*/
const arr = [1,2,3,4,5]
console.log(arr)
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)

/*Write a function greet that takes a person's name as a parameter and logs
 a greeting message. Example: greet("Alice") should log "Hello, Alice!"*/ 

 function greet(name){
    return "Hello, " + name + "!"
 }
 console.log(greet("Hart"))

 /*Write a function square that takes a number as a parameter and returns
  its square. Test it by logging the result of squaring 5.*/ 

  function square(num){
    let result = 0
     result = num*num
     return result
  }
console.log(square(5))

/*Create an array of 5 numbers and use the .forEach() method to log each number multiplied by 2.*/ 
const arr1 = [1,2,3,4,5]
arr1.forEach((element,index) => {
arr1[index] = element*2
});
console.log(arr1)