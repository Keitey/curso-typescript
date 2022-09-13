//1-type guard
// function sum(a:number|string, b:number|string){
//     if(typeof a === "string" && typeof b === "string"){
//         console.log(parseFloat(a)+parseFloat(b));//parseFloat é para conseguir realizar operações com strings
//     }
//     else if(typeof a === "number" && typeof b === "number"){
//         console.log(a+b)
//     }
//     else{
//         console.log("operação não válida")
//     }
// }

// sum("1","2")
// sum(3,2)
// sum(3,"1")

// //checando se valor existe
// function operations(arr:number[], operation?:string|undefined){
//     if(operation){

//         if(operation === "sum"){
//             const sum = arr.reduce((i,total) => i + total)
//             console.log(sum)
//         }
//         else if(operation === "multiply"){
//             const multiply = arr.reduce((i,total)=> i * total)
//                 console.log(multiply)
//             }
//         }
//         else{
//             console.log("por favor, defina uma operação")
//         }
// }
// operations([1,2,3])
// operations([1,2,3], "sum")
// operations([1,2,4], "multiply")

// //instance of
// class User{
//     name:string;
   
//     constructor(name:string){
//         this.name = name
//     }
// }

// class SuperUser extends User{
//     constructor(name:string){
//        super(name)
//     }    
// }

// const Keitey = new User("Keitey");
// const Maria = new SuperUser("Maria");

// function userGreetings(user: object){
//     if(user instanceof SuperUser){
//         console.log(`Olá ${user.name}, deseja ver os dados no sistema?`)
//     }
//     else if(user instanceof User){
//         console.log(`Olá ${user.name}`)
//     }
// }

// console.log(Keitey)
// console.log(Maria)
// userGreetings(Keitey)
// userGreetings(Maria)

//DESAFIO - NARROWING
type Review = boolean | number;

function userAvaliation(review:Review){
    if(!review){
        console.log("Você não fez a avaliação. Por favor, informe sua nota!")
        return
    }
    console.log(`Sua nota foi ${review}, obrigado pela avaliação!`)
}

userAvaliation(false)
userAvaliation(2)
userAvaliation(5)