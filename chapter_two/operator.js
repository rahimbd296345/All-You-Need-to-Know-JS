// Arithmetic Operator
// + - * / % ++ --

var a = 10
var b = 20
console.log(a % b);

// Incremental
// Pre Incremental - Post Incremental

console.log(a++);
console.log(a);
console.log(++a);
console.log(a);

console.log(b--);
console.log(b);
console.log(--b);
console.log(b);

// Assaingment Operator
var c = 30
var d = 40
c += d
console.log(c);
c -= d
console.log(c);
c *= d
console.log(c);
c /= d
console.log(c);

// Comporison Operator
var a = 10
var b = 20
console.log(a == b);
console.log(a != b);

console.log(a > b);
console.log(a < b);

a = 20
console.log(a >= b);
console.log(a <= b);

var c = '50'
var d = 50
console.log(c == d);
console.log(c === d);
console.log(c !== d);

var bank_balance = 302.13;
var amount = 99.99;
if (amount < bank_balance) {
    console.log( "I want to buy this phone!" );
}

const ACCESSORY_PRICE = 9.99;
var bank_balance = 302.13;
var amount = 99.99;
amount = amount * 2;
// can we afford the extra purchase?
if ( amount < bank_balance ) {
    console.log( "I'll take the accessory!" );
    amount = amount + ACCESSORY_PRICE;
}
// otherwise:
else {
    console.log( "No, thanks." );
}

var i = 0;
// a `while..true` loop would run forever, right?
while (true) {
    // keep the loop going?
    if (i <= 9) {
        console.log( i );
        i = i + 1;
    }
    // time to stop the loop!
    else {
        break;
    }
}
// 0 1 2 3 4 5 6 7 8 9

for (var i = 0; i <= 9; i = i + 1) {
    console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);