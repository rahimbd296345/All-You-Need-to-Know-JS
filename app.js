const myArr = [
    {name: 'X00', price: 110},
    {name: 'X01', price: 110},
    {name: 'X02', price: 110},
    {name: 'X03', price: 110},
    {name: 'X04', price: 110},
    {name: 'X05', price: 120},
    {name: 'X06', price: 120},
    {name: 'X07', price: 120},
    {name: 'X08', price: 120},
    {name: 'X09', price: 130},
    {name: 'X10', price: 130},
    {name: 'X11', price: 130},
    {name: 'X12', price: 130},
    {name: 'X13', price: 130},
    {name: 'X14', price: 130},
    {name: 'X15', price: 130},
    {name: 'X16', price: 140},
    {name: 'X17', price: 140},
    {name: 'X18', price: 140},
    {name: 'X19', price: 140},
    {name: 'X20', price: 140},
];

myArr.sort(
    p1, p2 => {
        if (p1.price < p2.price) return -1;
        if (p1.price > p2.price) return 1;
        return 0;
    }
);

let txt = '';
myArr.forEach(myFunction);

function myFunction(value) {
    txt += value.name + ' ' + value.price + '<br>'
}

console.log(txt);