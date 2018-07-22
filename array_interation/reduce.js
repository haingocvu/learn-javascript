let myarr = [2, 4, 5, 7, 10, 1, 0];
let total = myarr.reduce((pre, curr) => {
    return pre + curr
});
console.log(total)