function dublicate(nums){
    
   
    for(let i=0 ; i<nums.length ; i++){ //11234
        if(nums[i]==nums[i+1]){
            nums.splice(i,1)
        
            i--
            
        }
       
    }
  
  
  
   

    
    
   
     return nums.length
}

let arr =[1,1,1,1,2,2,3,3,4,4]
let res = dublicate(arr)
console.log(res)
