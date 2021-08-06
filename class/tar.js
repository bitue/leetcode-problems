function twosum(nums,target) {
   for (let i in nums){
       let rest = target-nums[i];
       for(let j in nums){
           if(i==j){
               continue
           }
           else{
               if(rest==nums[j]){
                   console.log(j,i)
                   return
               }
           }

       
       }
       


       
   }
    
}
let arr =[1,5,6,3]

twosum(arr,8)