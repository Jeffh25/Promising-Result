slowMath()
.then((add) => {
   let add = slowMath.add(a, b)
   console.log(add)
    return getResult(add)
}).then(() => {

})

// let ourProbs = new Promise((resolve, reject) => {
//     slowMath.add(6, 2)
//     console.log()
// })