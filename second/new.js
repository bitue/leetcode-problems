// function removeE(arr , val){

//     for( var i = 0; i < arr.length; i++){ 

//         if ( arr[i] === val) { 
//             arr.splice(i, 1); 
//             i--; 
//         }
//     }

//     console.log(arr)
//     return arr.length
// }

// let res = removeE( [0,1,2,2,3,0,4,2] , 2)
// console.log(res)

function re(hey, nedd) {
    if (hey = ""  ){
        return -1
    }

    else if (nedd ="" ){
        return 0
    }
    else if (nedd === hey ){
        return 0
    }
    else{
        if (hey.includes(nedd[0])) {
            let index = hey.indexOf(nedd[0])
            return index
        }
       
       
        else {
            return -1
        }

    }


    
       

    
   
  
      
    
}

let res = re("aaaaaa", "bba")

console.log(res)