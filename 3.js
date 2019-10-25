// function factorial(x){
//     if(x === 0){
//         return 1;
//     }
//     return x * factorial(x - 1)
// }
// console.log(factorial(5));

function fact(num) {
    let x = 1;
    for(var i = 1; i <= num; i++){
        x *= i
    }
    console.log(x)    
}
fact(5)