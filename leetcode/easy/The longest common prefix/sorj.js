//boubble sort algorithm is here 






let array = [20,1,2,31,19]


while(true){
    let flag = false ; 
   
    for (let i = 0; i < array.length-1; i++) {
      
     
            if(array[i]>array[i+1]){
                let temp =array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                console.log("swap done")
                flag=true;
            }
            console.log(array ,i)
    }
    if(flag==false){
        break
    }
   
}

   
    
  

    







