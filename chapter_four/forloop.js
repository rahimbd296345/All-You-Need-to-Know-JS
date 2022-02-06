// Foor Loops

for (var i = 0; i < 100; i++){
    console.log('Abdur Rahim');
}

for (var i = 0; i < 1000; i++){
    console.log((i + 1) + ' Abdur Rahim');
}

for (var i = 1; i < 1000; i+=100){
    console.log((i + 1) + ' Abdur Rahim');
}

// for (initializer, condition, increment) {

// }

for (var i = 0; i < 1000; i+=100){
    console.log(i + ' Abdur Rahim');
}

// for (var i = 0; i < 1000; i-=100){
//     console.log(i + ' Abdur Rahim');
// }

for (var i = 1; i <= 100; i++){
    console.log(i);
}

for (var i = 1; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}

for (var i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

var sum = 0

for (var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum+i));
    sum += i
}

for(let i=0,j=10; i < j, i++;j--) {
    console.log(i+j);
}


