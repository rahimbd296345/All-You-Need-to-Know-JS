// Example by w3schools.com

if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}

// https://www.freecodecamp.org

const age = 18;

if (age >= 18) {
  console.log("Nick is an adult.");
} else {
  console.log("Nick is a child.");
}

const age = 18;

if (age < 18) {
  console.log("Alice is under 18 years old.");
} else if (age >= 18 && age <= 21) {
  console.log("Alice is between the ages of 18 and 21.");
} else {
  console.log("Alice is over 21 years old.");
}

const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}

const pet = "dog";
 
switch (pet) {
  case "lizard":
    console.log("I own a lizard");
    break;
  case "dog":
    console.log("I own a dog");
    break;
  case "cat":
    console.log("I own a cat");
    break;
  case "snake":
    console.log("I own a snake");
    break;
  case "parrot":
    console.log("I own a parrot");
    break;
  default:
    console.log("I don't own a pet");
    break;
}

const age = 17;
const ownsCar = true;

if (age >= 16 && ownsCar) {
  console.log("Jerry is old enough to drive and has his own car.");
} else {
  console.log("Jerry does not drive.");
}


/* const boyfriendIsPaying = true;
const isSale = false;

if (boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
} */

const boyfriendIsPaying = true;
const isSale = false;

if (!boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}

/* const age = 32;
const citizen = age >= 18 ? "Can vote" : "Cannot vote";
console.log(citizen); */

/*const age = 32;
let citizen;

if (age >= 18) {
  citizen = "Can vote";
} else {
  citizen = "Cannot vote";
}

console.log(citizen); */

// https://www.javascripttutorial.net/javascript-if/

/*let age = 18;
if (age >= 18) {
  console.log('You can sign up');
}*/

/* let age = 16;
if (age >= 18) {
  console.log('You can sign up');
} */

/*let age = 16;
let state = 'CA';

if (state == 'CA') {
  if (age >= 16) {
    console.log('You can drive.');
  }
}*/

/* let age = 16;
let state = 'CA';

if (state == 'CA' && age == 16) {
  console.log('You can drive.');
} */

/*let age = 18;

if (age >= 18) {
  console.log('You can sign up.');
} else {
  console.log('You must be at least 18 to sign up.');
}*/

/*let month = 6;
let monthName;

if (month == 1) {
  monthName = 'Jan';
} else if (month == 2) {
  monthName = 'Feb';
} else if (month == 3) {
  monthName = 'Mar';
} else if (month == 4) {
  monthName = 'Apr';
} else if (month == 5) {
  monthName = 'May';
} else if (month == 6) {
  monthName = 'Jun';
} else if (month == 7) {
  monthName = 'Jul';
} else if (month == 8) {
  monthName = 'Aug';
} else if (month == 9) {
  monthName = 'Sep';
} else if (month == 10) {
  monthName = 'Oct';
} else if (month == 11) {
  monthName = 'Nov';
} else if (month == 12) {
  monthName = 'Dec';
} else {
  monthName = 'Invalid month';
}
console.log(monthName);*/

/*
let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus); */

/*let age = 18;
let message;

if (age >= 16) {
  message = 'You can drive.';
} else {
  message = 'You cannot drive.';
}

console.log(message);*/

/*let age = 18;
let message;

age >= 16 ? (message = 'You can drive.') : (message = 'You cannot drive.');

console.log(message);*/

/*let age = 18;
let message;

message = age >= 16 ? 'You can drive.' : 'You cannot drive.';

console.log(message);*/

/*let authenticated = true;
let nextURL = authenticated
  ? (alert('You will redirect to admin area'), '/admin')
  : (alert('Access denied'), '/403');

// redirect to nextURL here
console.log(nextURL);*/ // '/admin'

let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message);

















var a = 10
var b = 20

if (a > b) {
    console.log('A is greater than B');
}

if (a < b) {
    console.log('B is greater than A');
}

var n = 16

if(n % 2 == 0){
    console.log(n + ' is Even Number.');
}

if (n % 2 == 1) {
    console.log(n + ' is Odd Number');
}

var n = 70

if(n < 10){
    console.log(n);
    console.log('this number',n,'is smaller than 10');
} else if (n < 20) {
    console.log('this number', n , 'is smaller than 20');
} else{
    console.log('this number',n,'is greater than 10');
}

var p = 22
var q = 22

if (p > q){
    console.log('p is greater tahn q');
} else if(p == q){
    console.log('p is equal to q');
} else {
    console.log('p is smaller than q');
}

var r = 68

if (8 == r){
    console.log('r is equal to 8');
} else {
    console.log('n is not equal to 8');
}
console.log(r);

var n = -.9
if (n > 0){
    var result = 'This number '+ n + ' is positive'
} else {
    var result = 'This number '+ n + ' is negative'
}

console.log(result);

var n = 10
var result

var remainder = n % 2

if (0 == remainder){
    result = 'This number is even'
} else {
    result = 'This number is odd'
}
console.log(result);

var n = 12
var result

var remainder = n % 2

if (0 == n){
    result = 'This is a neutral number'
} else if(0 == remainder){
    result = 'This number is even'
} else {
    result = 'This number is odd'
}

console.log(result);

var movieRating = 'pg'
var age = 100

if ('pg' == movieRating && age >= 13){
    console.log('You can watch this movie');
}else if ('r' == movieRating && age >= 18){
    console.log('You can watch this movie');
} else if('g' == movieRating){
    console.log('You can watch this movie');
} else {
    console.log('You can not watch this movie');
}

if (('pg' == movieRating && age >= 13) || ('r' == movieRating && age >= 18) || ('g' == movieRating)){
    console.log('You can watch this movie');
} else{
    console.log('You can not watch this movie');
}

var yourAge = -1
var result

if (yourAge < 0 || yourAge > 200) {
    result = 'vampire'
}else if(yourAge <= 1){
    result = 'baby'
} else if (yourAge <= 3){
    result = 'toddler'
} else if (yourAge <= 12){
    result = 'kid'
} else if (yourAge < 18){
    result = 'teenager'
} else if (yourAge >= 18){
    result = 'adult'
}

console.log('You are a / an ' + result);

var yourAge = 55
var result

if (yourAge < 0 || yourAge > 200){
result = 'vampire'
console.log('vampire');
} else if (yourAge <= 1){
     result = 'baby'
     console.log('baby');
 } else if(yourAge <= 3 ){
     result = 'toddler'
     console.log('toddler');
 } else if(yourAge <= 12){
     result = 'kid'
     console.log('kid');
 } else if (yourAge < 18){
     result = 'teenager'
     console.log('teenager');
 } else if (yourAge >= 18){
     result = 'adult'
     console.log('adult');
 }

 console.log('You are a ' + result);

 var n = 10

 if (8 = n){
     console.log('n is equal to 8');
 } else{
     console.log('n is not equal to 8');
 }

 console.log(n);

 var i = 5

 while (i-- > 0){
     console.log(i);
 }

 var i = 0
 while(true) {
     i++
     console.log(i);
 }

 var i = 0
 while(i < 100){
     i++
     console.log(i);
 }

 var i = 0
 while(i <= 10){
     if(i % 3 == 0){
         console.log(i);
     }
     i++
 }

 var i = 0
 while(i < 90){
     console.log(i)
     i += 2
 }
 var i = 0
 while(i < 90){
     console.log(i)
     i -= 2
 }

 var i = 0

 while (true) {
     console.log(i)
 }



    for (var i = 0; i <= 10; i += 3) {
        console.log(i);
    }

    var i, j;

    for (i = 0, j = 10; i <= 10; i++, j--) {
        console.log(i, j);
    }

    var series = ''
    var n;

    for (var i = 1; i < 10; i++) {
        n = i * 3
        series = series + n + ' '
    }
    console.log('Serise 1 = ' + series);
    series = '1 '
    n = 1
    for (var i = 1; i < 10; i++) {
        n = n + 3
        series = series + n + ' '
    }
    console.log('Serise 2 = ' + series);

    series = ''
    for (var i = 1; i < 10; i++) {
        n = i * i - 1
        series = series + n + ' '
    }
    console.log('Series 3 = ' + series);


    series = ''
    for (var i = 1; i < 10; i++) {
        n = i
        if (n % 2 == 0) {
            n = i * 2
        }
        series = series + n + ' '
    }
    console.log('Series 4 = ' + series);

    series = '0 1 '
    n = 0
    var x = 0;
    var y = 1

    for (var i = 1; i < 10; i++) {
        n = x + y
        x = y
        y = n

        series = series + n + ' '
    }

    console.log('Series 5 = ' + series);

    var series
    for (var i = 1; i <= 10; i++) {
        series = i + ' = '
        for (var j = 1; j < 10; j++) {
            series += i * j + ' '
        }
        console.log(series);
    }

