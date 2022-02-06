// Chapter Seven: Object in JavaScript

var obj = {}
console.log(obj);
console.log(typeof obj);

var point = {
    x: 10,
    y: 20
}
console.log(point);
console.log(point.x);
console.log(point.y);

var point = {
    x: 10,
    y: 20,
    z: 15
}

console.log(point.x);
console.log(point.y);
console.log(point.x + point.z);

console.log(point['x']);
console.log(point['z']);

var show = 'x'
console.log(point[show]);

point.x = 45
point.a = 16
console.log(point);
console.log(point.d);

point['y'] = 100

var prop = 'z'
point[z] = 55
console.log(point);

point.a = undefined
console.log(point);

delete point.a
console.log(point);