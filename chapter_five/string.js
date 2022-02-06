'string'
"string"
['a', 'b', 'd', 'u', 'r', 'a', 'h', 'i', 'm']

// ********* Escaoe Nitatuib ***********

// var str = "This is a 'string'"
// console.log(str);

// var str = 'This is a \'String'
// console.log(str);

// var str = 'This is a \'String\''
// console.log(str);

// var str = 'This is a \nString'
// console.log(str);

// var str = 'This is a \tString'
// console.log(str);

// var str = 'This is a \\String'
// console.log(str);

// var a = 'abc'
// var b = 'acd'

// console.log(a === b);
// console.log(a > b);
// console.log(a < b);

// console.log('z' > 'Z');
// console.log('a' > 'z');

// var a = 'aaaaaaZ'
// var b = 'aaaaaaz'
// console.log(a < b);
// console.log(a > b);


// console.log('001' == 1);


// var a = 'I am'
// var b = 'Abdur Rahim'

// var c = a.concat(' ', b)
// console.log(c);
// var d = c.substr(10)
// console.log(d);

// console.log(c.startsWith('I am'));
// console.log(c.endsWith('Rahim45678'));
// console.log(b.toUpperCase());
// console.log(a.toLowerCase());
// console.log('                 asdfgh         '.trim());

// console.log(c.split(' '));

// var str = 'Some String'
// console.log(str.charAt(10));

// var str = 'Some String'
// var str2 = str.charAt(10)
// console.log(str2);
// console.log(typeof str2);

var str = 'Abdur Rahim'

var length = 0

while (true) {
    if (str.charAt(length) == '') {
        break
    } else {
        length ++
    }
}
console.log(length);
console.log(str.length);