let arr =[1,4,-3,9,7]

let temp=0;
for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j <arr.length; j++) {
        let mul = arr[i]*arr[j];
        if(mul>temp){
            temp=mul;
        }

        
        
    }
    
}

console.log(temp)

