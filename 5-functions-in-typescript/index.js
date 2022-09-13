"use strict";
// 1- void
// function withoutReturn():void{
//     console.log("Esta função não tem retorno!")
// }
// withoutReturn()
// // 2 - callback como parâmetros
// function greeting(name:string):string{
//     return(`Olá, ${name}`)
// }
// function preGreeting(f: (name:string) => string, userName:string){
//     console.log("Preparando a função")
//     const greet = f(userName)
//     console.log(greet)
// }
// preGreeting(greeting, "Keitey")
// preGreeting(greeting, "Maria")
//3 - GENERIC FUNCTION
// function firstElement<T>(arr:T[]):T{
//     return arr[0]
// }
// console.log(firstElement([1,2,3,4,5]))
// console.log(firstElement(["a", "b", "c", "d"]))
//4 - GENERIC COM CONSTRANTS
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(3, 5));
