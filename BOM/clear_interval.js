let myi = setInterval(() => {
    let ran = Math.floor(Math.random() * 11);
    if (ran === 10) return clearInterval(myi);
    console.log(ran)
}, 1000)