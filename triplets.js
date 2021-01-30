a = [17, 28, 30]
b = [16, 16,8]

const compareTriplets = (a, b) => {
    resultsArr = [0,0]
    a.map((num, index)=> {
        if (num > b[index]){
            resultsArr[0]++
        } else if (num < b[index]){
            resultsArr[1]++
        } else if (num === b[index]){
        }
    })
    return resultsArr
}

console.log(compareTriplets(a,b))