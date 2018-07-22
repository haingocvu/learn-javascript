let myarr = [10, 9, 8, 4, 2, 1, 3];
let findMax = arr => {
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i]
    }
    return max;
}
console.log(findMax(myarr))