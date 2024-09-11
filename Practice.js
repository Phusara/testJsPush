function getType(value){
    if (Array.isArray(value)){
        return "array"
    }
    return typeof value;
}

console.log(getType([1,2,3,4]));
console.log(getType('hello'));  
console.log(getType(123));       
console.log(getType(true));  
console.log(getType([]));    
console.log(getType({}));       
console.log(getType(function(){})); 
console.log(getType(undefined)); 
console.log(getType(Symbol()));