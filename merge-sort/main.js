function merge(leftArr ,rightArr){
    let ans =[]

    while(true){
        if(leftArr.length==0 && rightArr.length ==0){
            break
        }
        else if(leftArr.length==0 && rightArr.length!=0){
            ans.push(...rightArr)
            break
        }
        else if(leftArr.length!=0 && rightArr.length==0){
            ans.push(...leftArr)
            break
        }
        else{
            if(leftArr[0]<rightArr[0]){
                ans.push(leftArr[0])
                leftArr.shift()

            }
            else{
                ans.push(rightArr[0])
                rightArr.shift()
            }

        }


    }
    return ans


}

// let res = merge([1,4,5],[0,9])
// console.log(res)


function sortMain(arr) {
    if (arr.length == 1){
        return arr
    }
        let middleIndex = Math.floor(arr.length / 2)
    let leftSide = arr.slice(0, middleIndex)
    let rightSide = arr.slice(middleIndex)

    return merge(sortMain(leftSide), sortMain(rightSide))
}

let res = sortMain([1, 4, 6, -4, 7, 2, 6])
console.log(res)
