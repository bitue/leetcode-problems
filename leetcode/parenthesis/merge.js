function merge (arr1 , arr2 ){
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
         
    }
    console.log(arr1.sort());
    
}

let res = merge([2,5],[11,13,16]);