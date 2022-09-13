"use strict";
// //1- exemplo decorator
// function myDecorator() {
//     console.log("Iniciando decorator");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     return function (
//         target:any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ){
//         console.log("Executando decorator");
//         console.log(target);
//         console.log(propertKey);
//         console.log(descriptor);
//     }
// }
// class myClass{
//     @myDecorator()
//     testing(){
//         console.log('Terminando execução do método')
//     };
// }
// const myObj = new myClass();
// myObj.testing();
//2- múltiplos argumentos
// function a(){
//     return function(
//         target:any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ){
//         console.log('Executou a')
//     }
// }
// function b(){
//     return function(
//         target:any,
//         propertKey: string,
//         descriptor: PropertyDescriptor
//     ){
//         console.log('Executou b')
//     }
// }
// class myMultiple{
//     @a()
//     @b()
//     testing(){
//         console.log('Terminando execução')
//     }
// }
// const multiple = new myMultiple()
// multiple.testing()
//3- class decorator
// function classDecorator(constructor: Function){
//     console.log(constructor.name);
//     if(constructor.name == "User"){
//         console.log('Criando novo usuário')
//     }
// }
// @classDecorator
// class User{
//     name;
//     constructor(name:string){
//         this.name = name
//     }
// }
// const maria = new User("Maria");
// console.log(maria)
// 4- method decorator
// function enumerable(value: boolean){
//     return function(
//         target:any,
//         propertKey: string,
//         descriptor: PropertyDescriptor  
//     ){
//         descriptor.enumerable = value;
//     }
// }
// class Machine{
//     name;
//     constructor(name:string){
//         this.name = name;
//     }
//     @enumerable(false)
//     showName(){
//         return `O nome da máquina é: ${this.name}`
//     }
// }
// const computer = new Machine('computador da Keitey')
// console.log(computer.showName());
// //5- accessor decorator
// class Monster{
//     name?;
//     age?;
//     constructor(name:string, age: number){
//         this.name = name;
//         this.age = age;
//     }
//     @enumerable(true)
//     get showName(){
//         return `O nome do monstro é: ${this.name}`
//     }
//     @enumerable(false)
//     get showAge(){
//         return `A idade do monstro é: ${this.age}`
//     }
// }
// const mymonster = new Monster('Pikachu', 3)
// console.log(mymonster)
//6- property decorator
//o objetivo é criar um id com no mínimo 5 casas - 00001
// function formatNumber(){
//     return function(target: Object, propertyKey: string){
//         let value: string
//         const getter = function (){
//             return value
//         }
//         const setter = function (newVal: string){
//             value = newVal.padStart(5, '0')
//         }
//         Object.defineProperty(target, propertyKey, {
//             set: setter,
//             get: getter
//         })
//     }
// }
// class ID{
//     @formatNumber()
//     id
//     constructor(id:string){
//         this.id = id;
//     }
// }
// const showId = new ID('1');
// console.log(showId)
//7- exemplo real com class decorator
// function createdDate(created: Function){
//     created.prototype.createdAt = new Date
// }
// @createdDate
// class Book {
//     id;
//     constructor(id: number) {
//         this.id = id;
//     }
// }
// @createdDate
// class Pen {
//     id;
//     constructor(id: number) {
//         this.id = id;
//     }
// }
// const newBook = new Book(13)
// const newpen = new Pen(24)
// console.log(newBook)
// console.log(newpen)
//8- exemplo real method decorator
// function ifUserPosted(){
//     return function(
//         target: Object,
//         key: string | Symbol,
//         descriptor: PropertyDescriptor
//     ){
//         const childPosted = descriptor.value
//         // console.log(childPosted)
//         descriptor.value = function(...args:any[]){
//             if(args[1] === true){
//                 console.log('O usuário já postou!')
//             }else{
//                 return childPosted.apply(this, args)
//             }
//         }  
//         return descriptor 
//     }
// }
// class Post{
//     alreadyPost = false;
//     @ifUserPosted()
//     post(content: string, alreadyPost: boolean ){
//         this.alreadyPost = true;
//         console.log(`O usuário postou: ${content}`)       
//     }
// }
// const newPost = new Post()
// newPost.post('Meu primeiro post!', newPost.alreadyPost)
// newPost.post('Novo post!', newPost.alreadyPost)
//9- exemplo real property decorator
function Max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor não deve ultrapassar ${limit} dígitos`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(8)
], Admin.prototype, "username", void 0);
const keitey = new Admin('keiteylo');
