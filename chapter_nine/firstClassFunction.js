/***********************
 *
 * Twinkle Cats
 * Functional Javascript
 * First Class Function
 * Lecture - 2
 *
 ***********************/

// Today Topics

// 1. A Function can be stored in a Variable
// 2. A Function can be stored in an Array
// 3. A Function can be stored as a Object Field or Property
// 4. We can create function as needed
// 5. We can pass function as an arguments
// 6. We can return function from another function

function sayName(name) {
    return 'Hello, ' + name
}

/* A Function can be stored in a Variable */
let hello = sayName;
let fun = sayName('Abdur Rahim')

console.log(hello)
console.log(fun)

let anotherHello = hello
console.log(anotherHello('Abdur Rahim'))
/* A Function can be stored in a Variable */

/* A Function can be stored in an Array */
let arr = [1, 2, 3, anotherHello]
arr.push(sayName)
console.log(arr)
/* A Function can be stored in an Array */

/* A Function can be stored as a Object Field or Property */
let person = {
    name: 'Abdur Rahim',
    sayName: sayName
}
person

let person = {
    name: 'Abdur Rahim',
    sayName: hello,
    print: function () {
        console.log('Hi')
    }

}
console.log(person)
person
/* A Function can be stored as a Object Field or Property */

/* We can create function as needed */
let sum = 10 + (function () {
    return 20
})()
sum
console.log(sum)
/* We can create function as needed */

/* We can pass function as an arguments */
function wow(name, fun) {
    return fun(name)
}

let result = wow('Abdur Rahim', sayName)
console.log(result)
/* We can pass function as an arguments */

/* We can return function from another function */
function base(b) {
    return function (n) {
        let result = 1
        for (let i = 0; i < b; i++) {
            result *= n
        }
        return result
    }

}

let power = base(2)
let result = power(10)
result

let result = base(3)(5)
result
/* We can return function from another function */