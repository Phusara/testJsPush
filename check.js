function reverseAndUppercase(str){
    let chr = str.split('')
    let reverse = ""
    for (let index = chr.length; index >= 0; index--) {
        reverse += chr[index]
       
    }
    return reverse.toUpperCase()
}
console.log(reverseAndUppercase("Hello"))
 