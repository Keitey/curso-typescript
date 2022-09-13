//1 - tipo de objeto para função com interface
// interface Product{
//     name: string;
//     price: number;
//     isAvailable: boolean
// }
// function showProductDetails(product: Product){
//     return `O nome do produto é ${product.name} e seu preço é R$ ${product.price}, atualmente ele está ${product.isAvailable ? "disponível" : "indisponível"}`
// }
// const dress:Product={
//     name: "vestido de onça",
//     price: 1000,
//     isAvailable: false
// }
// console.log(showProductDetails(dress))

//2 - propriedade opcional em interface
// interface User{
//     email:string,
//     role?:string
// }
// function showUserDetails(user: User){
//     return `O email do usuário é: ${user.email}, cargo: ${!user.role ? "usuário sem cargo" : user.role}`
// }
// const user1:User = {
//     email: "keiteybarros@teste.com",
//     role: "adm"
// }
// const user2:User = {
//     email: "userteste@teste.com"
// }
// console.log(showUserDetails(user1))
// console.log(showUserDetails(user2))

//3 - readonly
// interface Car {
//     brand: string
//     readonly wheels: number
// }
// const ferrari: Car = {
//     brand: "Ferrari",
//     wheels: 4
// }
// function showCarDetails(car: Car){
//     return `A marca do carro é ${car.brand}`
// }
// console.log(showCarDetails(ferrari))

//4 - index Signature
// interface CoordObject {
//     [index: string]: number
// }
// let coords: CoordObject={
//     x:30
// }
// coords.y=30
// coords.z=140
// console.log(coords)

//5 - extending interfaces
// interface Human{
//     name: string,
//     age: number
// }
// interface SuperHuman extends Human{
//     superpowers: string[]
// }
// const keitey:Human = {
//     name: "Keitey",
//     age: 33
// }
// const goku:SuperHuman = {
//     name: "Goku",
//     age: 43,
//     superpowers: ["kameramera","genki dama"]
// }
// console.log(keitey)
// console.log(goku)

//6 - intersection types
// interface Character{
//     name: string
// }
// interface Book{
//     book:string,
//     autor:string
// }

// type CharacterInMyBook = Character & Book

// const lazlo: CharacterInMyBook = {
//     name: "Lazlo",
//     book: "Stranger The Dreamer",
//     autor: "Laini Taylor"
// }

// console.log(lazlo)

//7 -readOnlyArray
// let myArray: ReadonlyArray<string> = ["maçã", "mamão", "banana", "pinha"]

// myArray.forEach((item)=>{
//     console.log("Fruta: " + item)
// })

// myArray=myArray.map((item)=> {
//     return `Fruta: ${item}`
// })
// console.log(myArray)

//8 - tuplas
// type fiveNumbers = [number, number, number, number, number]
// const myFiveNumbers: fiveNumbers = [1, 2, 3, 4, 5]
// console.log(myFiveNumbers)

// type nameAndAge = [string, number]
// const myDatas = ["Keitey", 33]
// console.log(myDatas)

//9 - typlas com readonly
// function showMyDatas(datas: readonly[string,number]){
//     console.log(datas[0])
//     console.log(datas[1])
// }
// showMyDatas(["Keitey", 33])