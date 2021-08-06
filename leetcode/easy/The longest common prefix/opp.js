function check(array){
    let small = []
    for (let i = 1; i < array.length; i++) {
        const element = array[i];
        if(small>=element){
            small=element
        }
        
    }
    console.log(small)
}

let res = check(["ashik","nill","babu","jaan","jovan"])