function long(arr){
    let min =arr[0];
    let result =[]
    for(let i=1; i<arr.length ; i++){
        if(min.length>arr[i].length){
            min = arr[i]
        }
    }
    // console.log(min)

    for(let i =0; i<min.length ; i++){
        for(let j=0 ; j<arr.length ; j++){
            if(min==arr[j]){
                console.log(min,arr[j])
                continue
            }
            else {
                if (min[i]==arr[j][i]){
                    console.log(min[i], arr[j][i])
                
                result.push(min[i])

                }
              
                

            }
           
        }
        return result
    }
}

let res = long( ["flower","flow","flight"])

console.log(res)