let myarr = [10, 8, 1, 2, 4, 6, 9, 3];
let findMin = arr => {
    let min = Infinity;
    for (let i = 0; i < myarr.length; i++) {
        if (myarr[i] < min) min = myarr[i]
    }
    return min
}
console.log(findMin(myarr))