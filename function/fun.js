let arr =[12,3,4,5,1]

let sum=0;
let value = arr.map(function(val ,index){
   
    sum=sum+val
     return  index;
})
console.log(sum)
console.log(value)