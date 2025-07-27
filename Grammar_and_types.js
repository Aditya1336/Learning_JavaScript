"use strict";
//Single Line Comment
/*
Multi
Line
Comment
*/

// var -> global or local scope
// let, const -> block scope
var a = 10;

{
    let b = 20;
    var a = 20
    console.log(a);
    console.log(b);
}
//console.log(b) -> gives error
console.log(a);

// var hoisting, declaration hosted to top of its scope context without
// the initialization part. If accessed befor declaration, gives undefined.
console.log(x===undefined)
var x = 4;

//let and const , if accessed before declarations give ReferenceError.
//Until they are declared, they lie in temporal dead zone.

//Functions are hoisted along with their definitions.
//Can be called form anywhere in their scope.
add(4)
function add(x,y=10){
    console.log(x+y)
}

//const prevent reassignments.
const pi = 3.14;
//pi = 3.1415; Results in error

//It prevents reassignments, not mutations in assigned objects.
const arr = [10,20,30]
arr.push('js')
console.log(arr)

//Data Types ->
/*
    Seven Primitive Data types->
        1. Boolean -> true or false
        2. null -> denotes null value
        3. undefined
        4. Number -> Integer or float
        5. BigInt -> Big Integer
        6. String -> Sequence of characters
        7. Symbol -> Unique and Immutable
    and
    Non-primitive ->
        8.Object
*/

a = parseInt("87")
console.log(a)
a = parseInt("10101",2)
console.log(a)

//Literals
const myArr = [10,,4]
console.log(myArr.length)
console.log(myArr[1])
console.log(myArr)
