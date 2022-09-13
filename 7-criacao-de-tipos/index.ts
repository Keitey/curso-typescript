//1-Relembrando Generics
// function showData<T>(arg: T):string {
//     return `O retorno é ${arg}`
// }

// console.log(showData(4))

// console.log(showData('testando generics'))

// //constraint em generics
// function showProductName<T extends {name: string}>(obj:T){
//     return `O objeto retornado é: ${obj.name}`
// }
// const myObj = {name: 'porta lápis', cor: 'preta'}
// console.log(showProductName(myObj))

//Generics com interface
// interface MyObject<T, U, Q>{
//     name: string
//     wheels: T
//     engine: U
//     color: Q
// }

// type Car = MyObject<number,number, string>
// type Pen = MyObject<boolean,boolean,string>

// const myCar = {name: 'Jeep', wheels: 4, engine:2.0, color:'black'}
// const myPen = {name: 'Lápis', whells: false, engine:false, color:'green'}
// console.log(myCar)
// console.log(myPen)

//4- type parameters
// function getSomeKey<T, K extends string & keyof T>(obj: T, key: K){
//     return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
// }
// const server={
//     hd: '2TB',
//     ram: '32GB'
// }
// console.log(getSomeKey(server, 'ram'))

//5 - keyof type operator
// type Character = {name: string, age: number, hasDriveLicense: boolean}
// type C = keyof Character

// function showCharacterName(obj: Character, name: C): string {
//     return `${obj[name]}`
// }

// const myChar: Character = {
//     name: 'Keitey',
//     age: 34,
//     hasDriveLicense: true
// }
// console.log(showCharacterName(myChar, 'name'))

//6 - typeof type operator
// const userName: string = 'Keitey';
// const userName2: typeof userName = 'Maria';
// const userName3: typeof userName = 'Francisco';

// type x = typeof userName;
// const userName4:x = 'Marley';

//7- indexed access type 
// type Truck = {km: number, kg: number, description: string}
// type km = Truck['km']

// const newTruck = {
//     km: 10000,
//     kg: 5000,
//     description: 'Caminhão pesadão'
// }

// function showTrucKm(km: km){
//     console.log(`O veículo tem ${km}`)
// }
// showTrucKm(newTruck.km)

//8- conditional types
// interface A {}
// interface B extends A {}

// type myType = B extends A ? number : string;
// const someVar:myType=5

//9 - template literals type
type textA='text'
type CustomType=`some ${textA}`

const testing:CustomType = 'some text'