"use strict";

/* Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) фразу:
Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)*/

let userName = prompt('Как вас зовут?');

alert('Привет,' + ' ' + userName + '!');


/* Запросите у пользователя число. Затем запросите степень, в которую нужно возвести
это число. Выведите в консоль результат.*/

let num = prompt('Укажите число');

let degree = prompt('В какую степень возвести?')

console.log = Number(num) ** Number(degree);
