var biggest = 0

function check (num){
    if(biggest<num){
        biggest = num
    }
    console.log(`function suru`)
    if(num%2==1){
        if(num==1){
            console.log("one")
            return "ses"
        }
       
        else{
            
            num= num*3+1
            console.log("odd")
            let y = check(num)
            console.log(`bara gisi form ${num}`)
            return y
        }
        
    }
   
    else {
        console.log("even")
        num=num/2
        // if(num==1){

        // }
        
        let z = check(num)
        console.log(`bara gisi from ${num}`)
        return z
    }

    

}

let pabo = check(700)
console.log(`pabo print hobe ${pabo}`)
console.log(`avarest er chura ${biggest}`)