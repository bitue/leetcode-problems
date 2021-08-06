// let age = 89

var number = parseInt(prompt("Enter a number:"));

switch(true)
{

    case number >= 1 && number <= 9: alert("The number " + number + " is a single digit number."); break;
    case number >= 10 && number <= 99: alert("The number " + number + " is a two digit number."); break;
    case number >= 100 && number <= 999: alert("The number " + number + " is a three digit number."); break;
    case number >= 1000 && number <= 9999: alert("The number " + number + " is a four digit number."); break;
    default: alert("Your number has 5 or more digits.");
}
// switch ( age ){
//     case 100 : console.log("big") ; break;
//     case 89 : console.log("medium") ; break;
//     case 50 : console.log("small") ; break;
//     default : console.log("no") ; break;
// }

// if(age>100){
//     console.log("if statement executed")
// }
// else if (age>90){
//     console.log("elseif")
//     alert("age is bellow 100 but above 90")
// }

// else if (age>80){
//     console.log("elseif 2")
// }
// else{
//     console.log("else ")
// }


// var number = 5
//     switch(number)
//         {
//             case number >= 1 && number <= 9:
//                 console.log("below 10")
//                 break;
//             case number >= 10 && number <= 99 : break;
//             case number >= 100 && number <= 999:  break;
//             case number >= 1000 && number <= 9999: break;
//             default: console.log("Your number has 5 or more digits.");
//         }