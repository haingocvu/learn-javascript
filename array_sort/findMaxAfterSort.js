let myarr = [2, 8, 10, 9, 0, 1, 3];
myarr.sort((a, b) => {
    return (a > b) ? 1 : (a < b) ? -1 : 0
})
console.log(`min is: ${myarr[0]}`);
console.log(`max is: ${myarr[myarr.length - 1]}`)