// let num = 10 ;
// let sum=1;
// let i =1 ; 
// while(i<=10){

   
//     sum=sum*i;
//     console.log(sum,i) 
//     i++;
// }
// console.log(sum)

//  

// let name = "i am bitue"
let name = ["babu" ,"nill", "mutu", "jaan"]

let mine= {
    name: "ashik", 
    occu: "student",
    target: "mumin banda"
}
console.log(mine.name)

for(let i in mine){  //for in function always we get the index in string and array but in object data we will get properties
    let prop=mine[i]
    if(prop===" "){
        continue
    }
    console.log(prop)
}