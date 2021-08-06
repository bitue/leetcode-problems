function factorial(num){
    if(num==1)
        return 1;
    return num * factorial(num-1)
}

let x = factorial(5)
console.log(`factorial : ${x}`)

