// // arrays - Forma mais MODERNA de tipar um array

// let numbers: number[] = [1,2,4];
// numbers.push(3)
// console.log(numbers)

// // arrays - Forma mais ANTIGA de tipar um array

// let nums: Array<number> = [1,2,4,5]

// // any

// let data: any = [1,2,4,"teste"]

// data.push([5,6,7, "blá"])

// console.log(data)

// //Parâmetros de funções

// function sum(a:number, b:number){
//     console.log(a+b)
// }

// sum(2,8)

// //retorno de função

// function greating(name:string):string{
//     return `Olá ${name}`
// }

// console.log(greating("Keitey"))

// //funções anônimas

// setTimeout(function(){
//     const sallary: number = 5000
//     console.log(sallary)
// }, 3000)

// //tipos de objeto

// function passCordentates(cord: {x:number, y:number}){
//     console.log("X cordenate is " + cord.x)
//     console.log("Y cordenate is " + cord.y)
// }

// const objCord = {x: 326, y: 26}


// //props de objetos

// function showNumbers(a:number, b:number, c?:number){
//     console.log("A é igual a " + a)
//     console.log("B é igual a " + b)
//     if(c){

//         console.log("C é igual a " + c)
//     }
// }
// showNumbers(1,3)

// //validação de parâmetros opcionais

// function advancedGreeting(firstName:string, lastName?:string){
//     if(lastName !== undefined){
//         return `Olá ${firstName} ${lastName}, tudo bom?`
//     }
//     return `Olá ${firstName}, tudo bom?`
// }

// console.log(advancedGreeting("Keitey", "Lopes"))
// console.log(advancedGreeting("Keitey"))

// //union type
// function showBalance(balance: string | number){
//     console.log("The balance is equal to " + `${balance}`)
// }
// showBalance(30)
// showBalance("positive")

// //type aliases 
// type ID = string | number;
// function showId(id:ID){
//     console.log(`The ID is ${id}`)
// }

// showId("shantay")
// showId(5000)

// //introdução interfaces
// interface Point {
//     x: number;
//     y: number;
//     z: number;
// }

// function showCords(obj: Point){
//     console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
// }
// const CordsObj:Point = {
//     x: 10,
//     y: 20,
//     z: 30
// }
// showCords(CordsObj)

// //interface versus type alias
// //interface
// interface Person{
//     name: string;
//     age: number;
// }

// interface Person{
//     boolean: true;
// }

// const somePerson: Person ={name:"Keitey", age: 33, boolean: true}
// console.log(somePerson)
// //type alias
// type personType = {
//     name: string,
// }
// type personType = {
//     age: number,
// }

// //non null assertion operators
// const someP = document.getElementById("some-p")
// console.log(someP!.innerText)

// //bigInt
// let n : bigint
// n = 1000000000000000000000000000n