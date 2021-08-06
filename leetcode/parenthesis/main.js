function isValid(par) {
   
    let arr = [];
    for (let i = 0; i < par.length; i++) {
        console.log(par[i])
        if (par[0] == ")" || par[0] == "}" || par[0] == "]") {
            return false
        }
        else {
            if (par[i] == "(") {
                arr.push(1)
            }
            if (par[i] == "{") {
                arr.push(2)
            }
            if (par[i] == "[") {
                arr.push(3)
            }
            if (par[i] == ")") {
                if (arr.length > 0) {
                    if (arr.pop() != 1)
                        return false;
                }
                else
                    return false

            }
            if (par[i] == "}") {
                if (arr.length > 0) {
                    if (arr.pop() != 2)
                        return false;
                }
                else
                    return false
            }
            if (par[i] == "]") {
                if (arr.length > 0) {
                    if (arr.pop() != 3)
                        return false;
                }
                else
                    return false
            }
        }
    }

    if (arr.length == 0) {
        return true;
    }
    else{
        return false
    }

}



let par = "{";
console.log(isValid(par));
