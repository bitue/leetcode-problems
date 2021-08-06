class Person {   //base class -----absorbent
    constructor(firstName,lastName){
        this.fname=firstName;
        this.lname=lastName;
    }
    grettings(){
        return ` Hello ${this.fname} ${this.lname}`
    }
}

class Student extends Person {  //sub class --- absorber
    constructor(firstName,lastName,id){ //we will have to get all the perameter
        super(firstName,lastName) //in here make sure you add supper class to construct the base class property
        
        this.id=id;
        
    }
    student(){
        return `hey ${this.id} ${this.fname}`
    }
}

let ami = new Person("Ashikul", "Islam")
console.log(ami.student()) //i can  access all the property with the student class but not from the person class to a property which is in the student class




//all of this called inheritense