num1 = prompt()
num2 = prompt()
opt = prompt()




console.log(typeof num1)

let result = claculator(num1, num2, opt)
document.write(result)

function claculator(num1, num2, num3) {
    let response = checkNUN(num1, num2, num3)
    if (response === true) {
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        opt = parseInt(opt)
        switch (opt) {
            case 1: return num2 + num1;
            case 2: return num1 - num2;
            case 3: return num1 / num2;
            case 4: return num1 * num2;
            default: return "invalid input option"
        }
    }
    else {
        return "invalid inout"
    }

}

// check them for nan
function checkNUN(num1, num2, num3) {
    if (isNaN(num1) && isNaN(num2) && isNaN(num3)) {
        console.log("good")
        return false
    }
    else {
        return true
    }
}

// console.log(isNaN(3))