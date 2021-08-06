let arr= [1,3,55,3,-3,-6,0];


   
    for (let i = 0; i < arr.length-1; i++) {
 
        for (let j = i+1; j < arr.length; j++) {
            let temp ; //assign a variable as tempolary
           if(arr[i]>arr[j]){  //swap is here 
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;

            
           }
            
        }
    }





console.log(arr)