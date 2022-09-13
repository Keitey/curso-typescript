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
// function biggestNumber<T extends number|string>(a:T, b:T):T {
//     let biggest : T

//     if(+a > +b) {
//         biggest = a
//     }
//     else{
//         biggest = b
//     }

//     return biggest
// }

// console.log(biggestNumber(3,5))

// //5 - especificar tipos de argumentos
// function mergeArrays<T>(arr1: T[], arr2: T[]){
//     return arr1.concat(arr2)
// }
// console.log(mergeArrays<number|string>([1,2,3], ["a", "b", "c"]))

//6 - parametros opcionais
// function modernGreetings(name:string,greet?:string) {
//     if(greet){
//         return `Olá ${greet} ${name}, tudo bom?`
//     }
//     return `Olá ${name}, tudo bem?` 
// }
// console.log(modernGreetings("Keitey"))
// console.log(modernGreetings("Maria", "Dona"))

//7- valores default
// function sumDefault(n:number, m=10){
//     return n + m
// }
// console.log(sumDefault(2))
// console.log(sumDefault(2, 3))

//8 - unknown
// function doSomething(x: unknown){
//     if(Array.isArray(x)){
//         console.log(x[0])
//     }
//     else if(typeof x === "number"){
//         console.log("x é um número")
//     }
// }
// doSomething([1,2,3])
// doSomething(3)

//9 - never
// function showErrorMessage(msg: string):never{
//     throw new Error(msg)
// }
// showErrorMessage("Ocorreu um erro")

//10 - rest
// function sumAll(...n:number[]){
//     return n.reduce((number, sum)=> number + sum)
// }
// console.log(sumAll(1, 3, 4, 6))
// console.log(sumAll(362))
// console.log(sumAll(1000,1))

//11 - destructurgin como parâmetro
// function showProductDetails({name,price}:{name:string,price:number}):string{
//     return `O nome do produto é ${name} e seu preço é R$${price} reais`
// }
// const dress = {name:"vestilo longo estampa de onça", price:400}
// console.log(showProductDetails(dress))