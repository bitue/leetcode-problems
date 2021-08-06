function fiboserise(n){
    let fibo=[]
    if(n==0){
        return fibo[0]=0
    }
    if(n==1){
        return fibo[1]=1
    }
   return  fibo[n]=fibo[n-1]+fibo[n-2]
    
}

let res = fiboserise(7)

console.log(res)