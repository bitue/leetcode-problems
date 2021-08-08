function searchInsert(nums , target ){
    let count =0;
    for (let i in nums){
        if(nums[i]==target){
            return (nums.indexOf(nums[i]))
        }
        else if(target>nums[i]){
            count++
        }

    }
    return count
}

let res = searchInsert([1,4,6,7,17],15)
console.log(res)