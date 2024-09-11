function reverseAndUppercase(str){
    const rev =  str.split('').reverse().join('');
    let result = rev.toUpperCase()
    return result
}

console.log(reverseAndUppercase("bigjoelovecode"));
console.log(reverseAndUppercase("ineedamoney"));