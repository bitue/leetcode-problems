class Person {   //base class -----absorbent
    constructor(firstName,lastName){
        this.fname=firstName;
        this.lname=lastName;
    }
    grettings(){
        return ` Hello ${this.fname} ${this.lname}`
    }
    static test(){
        return ("i am static")
    }
}

let ami = new Person("Ashikul", "Islam")
let res=Person.test() //static function you can access with class name rather object name
console.log(res)