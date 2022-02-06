function outer() {
    function inner() {
        console.log('I am Inner Function')
    }
    inner()
    console.log('I am Outer Function')
}
outer()
console.log(outer())

function add(a, b) {
    function sum() {
        return a + b
    }

    function sub() {
        return a - b
    }

    function times() {
        return a * b
    }

    function div() {
        return a / b
    }

    return sum() + sub() + times() + div()
}

let result = add(10, 5)
console.log(result)
