let myarr = [
    { name: 'anna', age: 29 },
    { name: 'tony', age: 18 },
    { name: 'adam', age: 20 }
];
myarr.sort((a, b) => {
    return (a.age > b.age) ? 1 : (a.age < b.age) ? -1 : 0
})
console.log(myarr)