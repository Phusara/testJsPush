/*Write an expression that calculates the area of a rectangle given the width and height.
 Use variables width and height and log the result.*/ 
 function rectangle(width,height){
    return width*height
 }
 console.log(rectangle(5,10))


 /*Write a program that checks if a number stored in a variable num is even or odd, 
 and print an appropriate message.*/ 
 function checknum(num){
    if(num%2 == 0){
        return "even"
    }else{
        return "odd"
    }
 }
 console.log(checknum(19))

 /*Declare two boolean variables isLoggedIn and hasAccess. Write a conditional statement that prints 
 "Access granted" only if both conditions are true*/ 
function Access(isLogged,hasAccess){
    if(isLogged === true && hasAccess === true){
        return "Access granted"
    }else{
        return "Access Denied"
    }
}
console.log(Access(true,true))

/*Create a variable isRaining. Use the ternary operator to log "Take an umbrella" if it’s true and 
"No need for an umbrella" if it’s false.*/
function rain(checkrain){
    let isRaining = (checkrain) ? "Take an umbrella" : "No need for an umbrella"
    return isRaining
}
console.log(rain(true))

/*Write a switch statement that checks the value of a variable dayOfWeek and prints the corresponding day 
name (e.g., "Monday", "Tuesday", etc.). Handle default case for invalid inputs.*/ 
let dayOfWeek = 5
switch(dayOfWeek){
    case 1 : 
    console.log('Monday')
    break;
    case 2:
    console.log("Tuesday")
    break;
    case 3:
    console.log("Wednesday")
    break;
    case 4:
    console.log("Thursday")
    break;
    case 5:
    console.log("Friday")
    break;
    case 6:
    console.log("Saturday")
    break;
    case 7:
    console.log("Sunday")
    break;
    default:
    console.log("invalid inputs")
} 