// let son1 = {
//     fname:"Ashikul",
//     lname:"islam",
//     hobby:"cricket",
//     fullName: function(){
//         return `${this.fname} ${this.lname}`
//     }

// }

// let son2 ={
//     fname : "Oyasiul",
//     lname:"islam",
//     hobby:"programmer",
//     fullName: function(){
//         return `${this.fname} ${this.lname}`
//     }
// }
// let son3 ={
//     fname:"Aklasul",
//     lanme:"islam",
//     hobby:"you-tuber",
//     fullName: function(){
//         return `${this.fname} ${this.lname}`
//     }
// }

//class is a template to make object 
class Son {
    constructor(firstName, LastName, Hobby, date) {
        this.fname = firstName;
        this.lname = LastName;
        this.hobby = Hobby;
        this.bdate = date;

    }

    fullName() {
        return `${this.fname} ${this.lname}`
    }
    claculateAge() {

        let now = Date.now()
        console.log(now)
       
       
        var curr = new Date();
        console.log(curr)
        var diff = curr.getTime() ;
        console.log(diff)
        let ans = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        ans =ans-30

        return ans
      

    }

}
let son1 = new Son("ashikul", "Islam", "cricket", "09/6/1996")

console.log(son1.claculateAge())





