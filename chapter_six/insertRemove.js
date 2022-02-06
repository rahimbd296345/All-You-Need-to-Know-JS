// Insert and Remove Element

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr);
arr[3] = 9
console.log(arr);
arr.push(9)
console.log(arr);
arr.unshift(9)
console.log(arr);

arr.splice(3, 0, 9, 10)
console.log(arr);

arr[3] = undefined
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.splice(3, 1)
console.log(arr);