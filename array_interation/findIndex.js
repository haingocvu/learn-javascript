let myarr = [2, 5, 7, 1, 9, 10];
let index = myarr.findIndex((value, index) => {
    return value > 8
})
console.log(index)