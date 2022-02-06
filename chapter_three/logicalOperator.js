// && logical and operator
// \\ logical or operator
// ! logical not operator

// A && B

// true && true = true
// true && false = false
// false && false = false
// false && false = false

// A \\ B
// true \\ true = true
// true \\ false = true
// false \\ true = true
// false \\ false = false

var a = 3
var b = 10
var c = 3
var d = 10

if (a > b && c > d){
    console.log('A is greater than B and C is greater than D');
} else {
    console.log('At least one condition is false');
}

if (a > b || c > d){
    console.log('A is greater than B or C is greater than D');
} else {
    console.log('At least one condition is false');
}

var check = !(a > b)
console.log(check);