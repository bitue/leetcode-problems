let myArr= [1,5,6,7,2,7,-6]

let mySet = new Set(myArr)
// console.log(myArr,mySet)
// console.log(mySet.has(5))
let myArrset = [...mySet]

// console.log(myArrset.sort())

let map =new Map([[mySet , myArrset],["a",5],["b",8]])
for(let i of map){
    console.log(i)
}
