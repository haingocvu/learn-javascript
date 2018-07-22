let myarr = [90, 1, 10, 2, 0, 8, 9, 100];
myarr.sort((a, b) => {
    return (a > b) ? 1 : (a < b) ? -1 : 0
})
console.log(myarr)