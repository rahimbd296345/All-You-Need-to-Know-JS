let a = 'abc'
if (true) {
    console.log(a);
}

let a = 'abc'
if (true) {
    if (true) {
        let b = 'I am B'
    }
}
console.log(b)

function test(n) {
    function a() {
        return n % 3 == 0
    }
    function b(){
        return n % 5 == 0
    }
    if (a() && b()){
        console.log(n + ' is divisible by both a and 5')
    } else {
        console.log('Not a valid number')
    }
}
test(15)



