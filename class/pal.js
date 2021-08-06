function palindrome(num){
      num = num+""; //make it string to access the numbers
    let len = num.length ;
    let middle;
    if(len>2 && len%2==1){
         middle = Math.floor(len/2)
       
    }
    // else if(len==2){
    //     for(i=0; i<len ; i++){
    //         if(num[i]==num[1-i]){
    //             return true
    //         }
    //         else{
    //             return false
    //         }
    //     }
    // }
    else if(len==1){
        return true
    }
    else {
       
        middle=len/2;
        
    }
    
    
    
  
    for(let i=0 ; i<=middle ; i++){
    //   console.log(num[i])
    //   console.log(num[len-i])
   
  
    if(num[i]!=num[(len-1)-i]){
        return false
    }
    
       
        
       
    }
    return true


}

let res = palindrome(11);
console.log(res)
