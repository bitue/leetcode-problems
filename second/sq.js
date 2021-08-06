let x = prompt()

x=parseInt(x)
let str= "0"
let sum=0
for(let i =1 ; i<=x; i++){
  
    sum= sum+i**2;
    str = str + "+" + i**2
}
console.log(`${str} : ${sum}`)
