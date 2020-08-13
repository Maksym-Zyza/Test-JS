// alert("Hello word!");

//ПЕРЕМЕННАЯ и ее обьявление
// ES6 - let, const.    ES5 - var.

let age = 2;

let variable; //переменная

variable = 5; //обьявление переменной (литерал)

// let a = 5;
// let b = 10;
// console.log(a + b); - Оператор.

// let a = (b = 20);
// console.log(a * b);

// let c, d;
// c = 10;
// d = 20;
// console.log(c + d);

let a, b, c, d;
a = 5;
b = 10;
c = 20;
d = 30;
console.log("a=", a, ",b=", b, ",c=", c, ",d=", d);
console.log("(a + b) / (c * d)");
console.log((a + b) / (c * d));

// Оператор typeof - виводит тип переменной:

// Числовой - number:
// a = 5;
// a = 3.8;
// a = 3.0e5; - експоненциальный вид
// a = 0x9922cc;  - 16-й вид
// Infinity - бузконечность
// NaN - не число
console.log(typeof a);

// Строка - string:
let e = `Он сказал ${a} раз \n \t "Hello!"`;
// let e = "Он сказал " + a + " раз Hello!";
console.log(e);
console.log(typeof e);
// `` '' "" - кавычки для выведения строчных елементов
// \ - символ екранирования,  \n - перенос строки, \t - табуляция
// `${a}` - ES6  "+ a +" - ES5 -троковой шаблон для интерполяции (вывода переменной)

//Булево - boolean: true/alse
let r = false;
console.log(r);
console.log(typeof r);

//object  (null - пусто, undefined - ненайдено)
let t = null;
console.log(t);
console.log(typeof t);

//Symbol() - создание уникальных идентификаторов
let y = Symbol();
console.log(y);
console.log(typeof y);

// ОБЬЕКТ
// Обьект содержыт - Свойства - Функции
let car = {
  color: `green`,
  maxSped: 240,
  audio: {
    brand: "sony",
    speakers: 12,
  },
};

car.color = "red";
car.audio.brand = "SONY22";
// let carProp = "color";
// car[carProp] = "yellow";

console.log(typeof car);
console.log(car);
console.log(car.color);
console.log(car.audio.brand);

//УСЛОВИЯ
// if (Условие - true) {
//     Оператор - console.log(car);
// }

// if -если     == - Истина    != - Ложь      && - и       || - или     else - Иначче       else if - Иначче если
// !- оператор отрицания    (!true - не истина)

if (car.color == "red") {
  console.log("Автомобиль красный");
} else if ((car.color = "grenn")) {
  console.log("Автомобиль зеленый");
} else {
  console.log("Цвет не определен");
}

// Сокращенный условний тернарный оператор if
car.color == "grenn" ? console.log("Зеленый") : console.log("Красный");

let color = car.color == "red" ? "Красный" : "Зеленый";
console.log(color);

//ФУНКЦИЯ
car.color = "green";
console.log(car.color);

function colorReset() {
  car.color = "orange";
  console.log(car.color);
}

// Вызов функции (можно ввызывать в много раз в любом менсте, принято к конце страницы)
colorReset();
// Функция должна выполнять одно действиве!

// Зададим цвет второго автомобиля
let car2 = {
  color: "tomato",
};

// В скобках функции указывается параметр
function colorChenge(theCar) {
  theCar.color = "white";
}

// Вызываем ф-ю для первого и второго аитомобиля
colorChenge(car);
colorChenge(car2);

console.log("Car:", car.color);
console.log("Car2:" + car2.color);
// При вызове "," - пробел, "+" - без пробела

//  Вызов ф-и через имя переменной - указываеться без "()"
let speed = spedChange;
//  Обращение со "()"
speed();

function spedChange() {
  console.log(car.maxSped);
}

// Если в ф-и есть входной параметр watch(message), для него нужно задать значение
// function watch(message = "Hello") {
//   console.log(message);
// }
// watch();

// Функция возвращения - return
function name10(message) {
  return message + " - Vasiliy";
  // console.log(test); - после "return" нельзя делать записи - код становиться недоступен
}
let message = name10("Hello");
console.log(message);

// Анонимные функции - не имеют идентификатора "no name"
let name11 = function () {
  console.log("Анонимная функция");
};
name11();

// Краткая запись анонисной ф-и
(function () {
  console.log("Краткая анонимная функция");
})();

// Стрелочная функция
let name12 = () => console.log("Стрелочная функция");
name12();

// Краткая запись Функция возвращения - return
let name13 = () => {
  return "Краткая запись Функция возвращения";
};
console.log(name13());

let name14 = () => "Краткая запись Функция возвращения";
console.log(name14());

let name15 = (message1) => {
  return message1 + 2;
};
console.log(name15("Еще один вариант записи стрелочной, краткой ф-и - "));

// МЕТОДЫ
// - сслка на функцию;
// - закреплен за обьектом;
// - вызывается через свойство обьекта

// функция
function getMassege() {
  console.log("Я функция");
}
getMassege();

// метод
let car11 = {
  getMassege: function () {
    console.log("Я метод");
  },
};
car11.getMassege();

// Пример - находиться в обьекте:
let car12 = {
  color: "red",
  open: function () {
    console.log("Открыто");
  },
};
car12.open();

// Пример - метод с параметром
let car13 = {
  color: "red",
  open: function (message) {
    console.log(message);
  },
};
car13.open("Закрыто");

// В ES6: можно убрать ": function "
let car14 = {
  color: "red",
  open(message) {
    console.log(message);
  },
};
car14.open("Метод - краткая запись в ES6");

// МАСИВЫ - Счет елементов начинается с "0"
[1, 8, 15, 24];
[1, "восемь", 15, "двадцать четыре"];

// Виведим второй елемент масива - 15
let array = [1, "восемь", 15, "двадцать четыре"];
console.log(
  "Счет елементов масива начинается с 0. Виведим первый и второй елемент масива - [1, 8, 15, 24] - " +
    array[1] +
    array[2]
);
//  оператор инкремента "i++"" = "i + 1"
// а - унарный оператор
// а+b - бинарный оператор
//  "++i" - префексный оператор (выполняется до тела цикла)
//  "i++" - посфексный оператор (выполняется после тела цикла - увеличивает число после того как возвращает значение)
//  "--i" - инкремент
//  "i--" - дикримени
// (применяються к имени переменной)
for (let i = 1; i <= 10; ++i) {
  console.log("Повторение і через цикл -" + i);
}

let drivers = ["Иван", "Сергей", "Руслан", "Виталик"];
console.log(drivers[0]);
console.log(drivers[1]);

console.log(drivers.length); // - узнать количество елементов в масиве
console.log(drivers);

// Выводим количесто елементов масива
for (let i = 0; i < drivers.length; i++) {
  console.log(drivers[i]);
}
// 1) присваиваем переменную - "let i" равную "= 0"
// 2) цикл проверяет если "i < drivers.length;" тогда i++ - добавляет значение на одиницу, теперь "i = 1;"
// 3) цикл идет дальше, пока срабатывает условие "i < drivers.length;", после этого останавливается.

//КЛАСС
// пояснення роботи - 2:12хв -https://www.youtube.com/watch?v=xErYDWhoVgE&feature=youtu.be
class Heter {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; //Каждой функции полагается своя переменнная 'this'
  }
  sayName() {
    console.log(`Наш хейтер: ${this.firstName} ${this.lastName} `);
  }
}
let heter1 = new Heter(`Билл`, `Гейтс`);
heter1.sayName();

let heter2 = new Heter(`Дональд`, `Дак`);
heter2.sayName();

// Обращение к елементам на html страцице

//Раньше:
// document.getElementById("heder");
// console.log(document.getElementById("heder"));
// console.log(typeof document.getElementById("heder"));
// document.getElementById("heder").innerText = "Hello!";

// ES6:
// document.querySelector(".myclass");
let findElement = document.querySelector(".myclass");
findElement.myclass = "Hello";
console.log(findElement);
