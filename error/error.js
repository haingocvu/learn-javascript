let devide = (a, b) => {
    if (typeof b !== 'number') throw new Error('not a number');
    if (b === 0) throw new Error('devide 0');
    return a / b;
}
try {
    let rs = devide(2, 0)
} catch (error) {
    console.log(error + '');
    console.log(error.name);
    console.log(error.message)
}