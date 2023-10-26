//premitive

//7type : string, number,boolean, null, undefined, symbol,bigint

// const score = 100
// const scorevalue = 100.69
// const isLoggedIn = false
// const outSideTemp = null

const id = Symbol('458')
const anotherId = Symbol('458')
console.log(id == anotherId);
//refrence type/not primitive

//array,objects,functions

const heros =["krish", "shaktiman" , "don"]
let myObj = {
    name: "vikas",
    age: 22,
}
console.log([myObj , heros]);
