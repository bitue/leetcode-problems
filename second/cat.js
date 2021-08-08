function last(str){
    let count =0;
    for(let i=str.length-1 ; i>=0; i--){
        if(str[i]!=" " && str[i-1]!=" "){
            count++
        }
       
    }
    console.log(count)

}

let res = last("luffy is still joyboy")