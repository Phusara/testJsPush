/*Create an array of 4 colors. Use the .unshift() method to add a color at the beginning and 
.shift() to remove the first color. Log the array after each operation*/
const color = ["green","blue","red","yello"]
color.unshift("black")
console.log(color)
color.shift()
console.log(color)

/*Write a function calculateArea that takes two parameters, length and width, 
and returns the area of a rectangle. Call the function with appropriate values and log the result.*/ 
function calculateArea(length,width){
return length*width
}
console.log(calculateArea(8,5))

/*Create an array of numbers, including both positive and negative values. Write a function that filters
 out only the positive numbers and returns a new array. Use the .filter() method.*/ 
const nums = [5,8,0,-8,-5]
function fillernums(){
  const result = nums.filter((element) => element > -1)
    return result
}
console.log(fillernums(nums))

/*Create two arrays, one with your favorite hobbies and another with your favorite foods. 
Write a function that merges these two arrays into one and returns the result. Use the .concat() method.*/ 
const hobby = ["gaming","draw","nap","code"]
const food = ["pizza","Thaifood","noodle","Friedchicken"]
function mergesarr(){
  let result = hobby.concat(food)
  return result
}
console.log(mergesarr())


