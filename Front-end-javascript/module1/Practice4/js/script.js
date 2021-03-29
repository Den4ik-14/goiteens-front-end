'use strict'

//1 завдання

const num = prompt('Введіть число');

if (num) {
    if ((!Number.isNaN(1 * num)) && (num >= 55) && (num <= 99)) {
        console.log('Число попадає в діапазон')
    }
    else {
        console.log('Число не попадає в діапазон');
    }
}

console.log('================')

//2 завдання
const age = 55;

if (age) {
    if ((!Number.isNaN(1 * age)) && (age > 0)) {

        if (age <= 16) {
            alert('Діти');
        } else if (age >= 17 || age <= 60) {
            alert('Дорослі');
        }
        else if (age >= 61 || age <= 100) {
            alert('Пенсіонери');
        }
    }
} 

//3 завдання
const userName = 'Денис'
const userSurname = 'Ханнанов'

if((userName.length >4) && (userSurname.length >5)){
    alert(userSurname.length + userSurname.length)
}else{
    alert('УПС')
}

//4 завдання
let num1 = Math.random() * (5 - 1) + 1
// console.log(num1)

if((num1 < 6) && (num1 > 1)){
    console.log(num1)
}

console.log('================')

//5 завдання
let lang = prompt('Оберіть мову => "ua, en, ru, fr"')
lang =  lang ? lang.toLowerCase() : false;

switch (lang){
    case 'ua':
        console.log('Січень');
        break;
    
    case 'en':
        console.log('January');
        break;
        
    case 'ru':
        console.log('Январь');
        break;
        
    case 'fr':
        console.log('Janvier');
        break;  
    
    default:
        console.log('Вашої мови немає в списку')    
}
console.log('================')