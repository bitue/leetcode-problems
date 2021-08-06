let num = 93; 

let myresult = tellMeMyGrade(num)
console.log(myresult)

function tellMeMyGrade(myNum){
    if(myNum<0 || myNum>100){
        console
        return "Invalid input "
    }
    else{
        if(myNum>90){
            return ("Your grade is A+ ")
        }
        else if (myNum>80){
            return "your grade is A "
        }
        else if (myNum>70){
            return "your grade is A- "
        }
        else if (myNum>60){
            return "your grade is B+ "
        }
        else if (myNum>50){
            return "your grade is B- "
        }
        else if (myNum>40){
            return "your grade is C "
        }
        else{
            return "Fail"
        }
    }

}