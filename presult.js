// slowMath()
// .then((add) => {
//    let add = slowMath.add(a, b)
//    console.log(add)
//     return getResult(add)
// }).then(() => {
// })
// let ourProbs = new Promise((resolve, reject) => {
//     slowMath.add(6, 2)
//     console.log()
// })


// Correct Code 
// slowMath.add(6, 2)
// .then((sum) => {
//     console.log(sum)
//     return slowMath.multiply(sum, 2);
// }).then((result) => {
//     console.log(result)
//     return slowMath.divide(result, 4);
// }).then((quotient)=> {
//     console.log(quotient)
//     return slowMath.subtract(quotient, 3);
// }).then((minus) => {
//     console.log(minus)
//     return slowMath.add(minus, 98);
// }).then((sum) => {
//     console.log(sum);
//     return slowMath.remainder(sum, 2);
// }).then((remainder) => {
//     console.log(remainder);
//     return slowMath.multiply(remainder, 50);
// }).then((result) => {
//     console.log(result);
//     return slowMath.remainder(result, 40);
// }).then((result) => {
//     console.log(result);
//     return slowMath.add(result, 32);
// }).then((sum) => {
//     console.log(sum)
//     return sum;
// }).then((sum) => {
//     console.log(`The final result is ${sum}, where you fill in the blank with the final result.`);
// }).catch((err) => {
// console.log(err)});

let doMath = async () => {
   try{ 
    let result = await slowMath.add(6, 2);
    console.log(result);
    result = await slowMath.multiply(result, 2)
     result = await slowMath.divide(result, 4)
    console.log(result);
     result = await slowMath.subtract(result, 3)
    console.log(result)
     result = await slowMath.add(result, 98)
    console.log(result)
     result = await slowMath.remainder(result, 2)
    console.log(result)
     result = await slowMath.multiply(result, 50)
    console.log(result)
     result = await slowMath.remainder(result, 40)
    console.log(result)
     result = await slowMath.add(result, 32)
    console.log(`The final result ${result}, where you fill in the blank with the final result`)
} catch(err){
    console.log(err)
}
}
doMath()