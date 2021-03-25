'use strict'

//1 завдання

let k1 = '5px';
let k2 = '12djd334';
let k3 = '12.45asdwe12';
let k4 = 'qwqweeewq';

console.log(Number.parseInt(k1));
console.log(Number.parseInt(k2));
console.log(Number.parseInt(k3));
console.log(Number.parseInt(k4));

console.log('================');

//2 завдання

console.log(Number.parseFloat(k1));
console.log(Number.parseFloat(k2));
console.log(Number.parseFloat(k3));
console.log(Number.parseFloat(k4));

console.log('================');

//3 завдання

console.log(Math.min(2, 34, 99, 3 , 22, 36, 733, 18));
console.log(Math.max(2, 34, 99, 3 , 22, 36, 733, 18));

console.log('================');

//4 завдання

console.log(Math.random() * (19 - 3) + 1);

console.log('================');

//5 завдання

const result = 5+5+'5';
console.log(result);
console.log(typeof(result));

console.log('================');

//6 завдання

const email = 'denys.khannanov@gmail.com';
console.log(email.length)
console.log(email.includes('@'))

console.log('================');

//7 завдання

//*w1 від word1
const w1 = "My";
const w2 = "name";
const w3 = "is";
const w4 = "Victor";
let fullname = (w1 + ' ' + w2 + ' ' +  w3)
console.log(fullname)
let all = (fullname + ' ' + w4)
console.log(all)
console.log( w1 + ' ' + w2 + ' ' +  w3 + ' ' + w4); //Конкатинація

console.log('================')

//8 завдання

const userName = "den";
const payment = "300 гривень";
alert(Дякуємо ,{userName}, !  До, сплати,  {payment})