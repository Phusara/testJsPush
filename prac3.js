/*function sumParameters(num,step){
    let result 
    if(step == 0){
        result = num+=1
    }else{
        result = num+=step
    }
    return result
}

console.log(sumParameters(5,1))
console.log(sumParameters(3,0))
console.log(sumParameters(0,-1))*/

/*function sumParameters(...anyNumberParameter){
    let result = 0
    for(let i = 0; i < anyNumberParameter.length; i++){
        result += anyNumberParameter[i]
    }
    return result
}


console.log(sumParameters(5,9,1))
console.log(sumParameters())
console.log(sumParameters(5,8))*/


//Spread Operator: Expands elements of an iterable. (Use in array)
//Rest Parameter: Collects multiple arguments into an array. (Use in Paramidter)\


function calcutateTotalPages(items,itemsPerPage){
    let result = 0
    if(items == 0){
        return 0
    }else if(itemsPerPage <= 0){
        throw Error("Items per page must be greater than Zero")
    }else{
        result = Math.ceil(items/itemsPerPage)
    }

    return result
}

console.log(calcutateTotalPages(10,3))
console.log(calcutateTotalPages(25,5))
console.log(calcutateTotalPages(0,5))
console.log(calcutateTotalPages(10,10))
console.log(calcutateTotalPages(10,0))

//Math.ceil will always make the round up to the closes numbers
//Math.floor will always make the round down to the closes numbers
//Math.round Standard rounding rule
