let myarr = [2, 9, 1, 8, 3, 0, 100, 88, 99];
myarr.sort((a, b) => {
    return 0.5 - Math.random()
})
console.log(myarr)