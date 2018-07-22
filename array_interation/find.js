let myarr = [2, 0, 10, 9, 3, 1, 8];
let rs = myarr.find((value, index) => {
    return value >= 10
})
console.log(rs)
//tìm phần tử đầu tiên mà match cái handle function. return true first