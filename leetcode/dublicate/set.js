function fibserise(n){
    let fib=[]
    if(n==0 ){
        return fib[0]=0 
    }
    if(n==1){
        return fib[1]= 1
    }
    fib[n]=fib[n-1]+fib[n-2]

    return fib
    
}


let res = fibserise(2)

console.log(res)