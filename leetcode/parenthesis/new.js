function romantoint(str){
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const element = str[i];
        if(element=="I" ){
            if(str[i+1]=="V"|| str[i+1]=="X"){
                result=result-1;
            }
            else{
                result++
            }

        }
        if(element=="X"){
            if(str[i+1]=="C"|| str[i+1]=="L"){
                result=result-10;
            }
            else{
                result=result+10
            }
        }
        if(element=="C"){
            if(str[i+1]=="D"|| str[i+1]=="M"){
                result=result-100;
            }
            else{
                result=result+100
            }
        }
        // if(element=="I"){
        //     result++
        // }
        if(element=="V"){
            result=result+5
        }
        // if(element=="X"){
        //     result=result+10
        // }
        if(element=="L"){
            result=result+50
        }
        // if(element=="C"){
        //     result=result+100
        // }
        if(element=="D"){
            result=result+500
        }
        if(element=="M"){
            result=result+1000
        }
    }
    return result
}

let res = romantoint("MCMXCIV")
console.log(res)
