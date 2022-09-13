"use strict";
//1 - campos em classes
// class User{
//     name!:string;
//     age!:number;
// }
// const Keitey = new User();
// Keitey.name = 'Keitey'
// Keitey.age = 34
// console.log(Keitey)
//2 - constructor
// class NewUser {
//     name
//     age
//     constructor(name:string, age:number) {
//         this.name = name;
//         this.age = age;
//     }
// }
// const keitey = new NewUser('keitey', 34);
// console.log(keitey)
//3- campo readOnly
// class Car {
//     name
//     readonly wheels = 4
//     constructor(name:string){
//         this.name = name;
//     }
// }
// const RangerRover = new Car('Ranger Rover');
// console.log(RangerRover)
//4- herança e super
// class Machine{
//     name
//     constructor(name:string){
//         this.name = name;
//     }
// }
// const trator = new Machine('Tratorado');
// class KillerMachine extends Machine{
//     guns
//     constructor(name:string, guns:number){
//         super(name);
//         this.guns= guns
//     }
// }
// const destroyer = new KillerMachine('Killer', 4);
// console.log(trator)
// console.log(destroyer)
//5- métodos
// class Character{
//     name
//     constructor(name:string){
//         this.name = name;
//     }
//     greeting(){
//        console.log(`Hey ${this.name}`)
//     }
// }
// const Addie = new Character('Addie')
// console.log(Addie.name)
// Addie.greeting()
//6- this
// class Book {
//     title
//     page
//     constructor(title:string, page:number){
//         this.title = title;
//         this.page = page;
//     }
//     showBookDetails(){
//         console.log(`O nome do livro é ${this.title} e ele tem ${this.page} páginas`)
//     }
// }
// const book = new Book('A Biblioteca da Meia-Noite', 308);
// book.showBookDetails()
//7 - getters
// class Person {
//     name
//     surname
//     constructor(name:string, surname:string){
//         this.name = name;
//         this.surname = surname;
//     }
//     get FullName(){
//         return `O nome completo é: ${this.name} ${this.surname}`
//     }
// }
// const Keitey = new Person('Keitey', 'Barros')
// console.log(Keitey.FullName)
//8 - setters
// class Coords {
//     x!:number;
//     y!:number;
//     set fillX(x:number) {
//         if(x === 0) {
//             return
//         }
//         this.x = x
//         console.log('X inserido com sucesso!')
//     }
//     set fillY(y:number) {
//         if(y === 0) {
//             return
//         }
//         this.y=y
//         console.log('Y inserido com sucesso!')
//     }
// }
// const myCoords = new Coords();
// myCoords.fillX = 0
// myCoords.fillY = 20
// console.log(myCoords)
//9- herança de interfaces para classes
// interface bookTitle {
//   itemTitle(): string;
// }
// class BookName implements bookTitle {
//   title;
//   constructor(title: string) {
//     this.title = title;
//   }
//   itemTitle() {
//     return `O título do livro é: ${this.title}`;
//   }
// }
// const myBook = new BookName('Os 7 maridos de Evelyn Hugo');
// console.log(myBook.itemTitle());
//10- Override de métodos
// class Base{
//     someBook(){
//         console.log('O nome do livro é: Daisy Jones & The Six')
//     }
// }
// class NewBook extends Base{
//     someBook() {
//         console.log('Agora o nome do livro é: Flores para Algernon')
//     }
// }
// const myBook = new NewBook()
// myBook.someBook()
//11- public
// class C {
//    public x = 2500
// }
// const cInstance = new C()
// console.log(cInstance.x)
//12 - protected
// class E {
//     protected x= 30
// }
// class F extends E{
//     showX(){
//         console.log('X: ' + this.x)
//     }
// }
// const fInstance = new F()
// fInstance.showX()
//13- private
// class PrivateClass {
//     private name = 'Private'
//     showName() {
//         return this.name
//     }
// }
// const pName = new PrivateClass()
// console.log(pName.showName())
//14- static
// class StaticMerbers {
//     static prop = 'static'
// }
// console.log(StaticMerbers.prop)
//15- generic class  
// class Item <T, U>{
//     first
//     second
//     constructor(first: T, second: U) {
//         this.first=first
//         this.second=second
//     }
// }
// const newItem = new Item('caixa', 'banco')
// console.log(newItem)
//16- parameter properties
// class ParameterProperties {
//     constructor(public name: string, private qty: number, private price: number){
//         this.name = name;
//         this.qty=qty;
//         this.price = price;
//     }
//     get showQty(){
//         return `Qtd total: ${this.qty}`
//     }
//     get showPrice(){
//         return `O preço é: R$ ${this.price}`
//     }
// }
// const newShirt = new ParameterProperties('Camisa', 5, 140)
// console.log(newShirt.name)
//17- class expressions
// const myClass = class<T>{
//     name
//     constructor(name: T){
//         this.name = name;
//     }
// }
// const person = new myClass('Keitey')
// console.log(person.name)
//18- abstract class
// abstract class AbstractClass{
//     abstract showName(): void
// }
// class AbstractExample extends AbstractClass{
//     name: string
//     constructor(name: string){
//         super()
//         this.name = name
//     }
//     showName(){
//         console.log(`O nome é ${this.name}`)
//     }
// }
// const newAbstractShowName = new AbstractExample('Keitey')
// newAbstractShowName.showName()
//19- relação entre classes 
class Dog {
}
class Cat {
}
const meuDoguinho = new Cat();
console.log(meuDoguinho);
