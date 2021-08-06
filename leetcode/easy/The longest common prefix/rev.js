function reverse(num){
    let flag =false;
    if(num<0){
       num=num*-1;
       flag=true;
       console.log('jj')
    }

    let str = num +"";
    let result = "";

    
    for (let i = 0; i < str.length; i++) {
       
     
        result=result+str[i]
        
    }
    let arr = result.split("")
    arr = arr.reverse()
    let response = arr.join("")
    console.log(response)
    let responseInt=parseInt(response)
   
    if(flag==true){
      return  responseInt=responseInt*-1
    }
    if(responseInt>= 2147483647 || responseInt<-2147483648){
        return 0;
    }
    
    return responseInt
}

let res = reverse(1534236469)
console.log(res)