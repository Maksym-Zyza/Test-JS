alert("Hello word!");

//ПЕРЕМЕННАЯ и ее обьявление
// ES6 - let, const.    ES5 - var.

let age = 2;

let variable; //переменная

variable = 5; //обьявление переменной (литерал)

// let a = 5;
// let b = 10;
// console.log(a + b);

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
  maxSped: 120,
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
