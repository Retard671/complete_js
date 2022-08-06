"use strict";

// let bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 1000 / numPassengers) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// };

// createBooking("LH123");
// createBooking("LH123", 3);
// createBooking("LH123", 100);

// ----------------------------------------------

// let flight = "LH234";
// const passenger = {
//     name: "Firstname Lastname",
//     passport: 12346534632,
// };

// let checkIn = function (flight, passenger) {
//     flight = "LR211";
//     passenger.name = "Mr " + passenger.name;
//     if (passenger.passport !== undefined) {
//         console.log("passport correct");
//     } else {
//         console.log("passport not correct");
//     }
// };

// checkIn(flight, passenger);
// console.log(flight);
// console.log(passenger);

// -----------------------------------------------------------------

// let oneWord = function (str) {
//     return str.replaceAll(" ", "").toLowerCase();
// };

// let upperFirstWord = function (str) {
//     let arr = str.split(" ");
//     arr[0] = arr[0].toUpperCase();
//     return arr.join(" ");
// };

// const transformer = function (str, func) {
//     console.log(`original string: ${str}`);
//     console.log(`transformed string: ${func(str)}`);
//     console.log(`Transformed by ${func.name}`);
// };
// transformer("JavaScript language", upperFirstWord);
// transformer("JavaScript language", oneWord);

// function hi() {
//     console.log("hi");
// }
// document.body.addEventListener("click", hi);

// ---------------------------------

// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// let greeterHey = greet("hey");
// greeterHey("abc");

// greet("hello")("qwerty");

// const greet2 = greeting2 => {
//     return name2 => {
//         console.log(`${greeting2} ${name2}`);
//     };
// };

// let greeterHey2 = greet2("hey");
// greeterHey2("abc");
//
//
//

// let arr = [" () ", " || ", " OO "];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Задача 1
// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1.
// Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
// let func1 = function () {
//     return function () {
//         return 1;
//     };
// }
// let func2 = function () {
//     return function () {
//         return 2;
//     };
// };
// console.log(func1()() + func2()());

// Задача 3
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4),
// вернет сумму переданных в параметры чисел.

// let func = function (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// };
// console.log(func(2)(3)(4));

// Задача 4
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(),
// вернет массив переданных в параметры чисел

// let func = function (a) {
//     return function (b) {
//         return function (c) {
//             return function (d) {
//                 return function () {
//                     return [a, b, c, d];
//                 };
//             };
//         };
//     };
// };
// console.log(func(2)(3)(4)(5)());

// -----------------------------------------------

// let fn = function (a) {
//     return function (b, c = a) {
//         a = c;
//         return a + b;
//     };
// };
// let fn1 = fn(4);
// console.log(fn1(6));

// -------------------------------------------------

// function logPerson(arg) {
//     // console.log(arg);
//     console.log(`Person ${this.name} ${this.age} ${this.job}`);
// }

// const person1 = { name: "Михаил", age: 22, job: "frontend" };
// const person2 = { name: "Елена", age: 19, job: "SMM" };

// bind(person1, logPerson)();
// let test = bind(person2, logPerson);
// test();
// // console.log(test());

// function bind(context, func) {
//     return function (...args) {
//         func.call(context, args);
//     };
// }

// ------------------------------------------------------
// (function () {
//     let p = 111;
//     // document.getElementsByTagName
//     let q = document.getElementsByTagName("body");
//     q[0].addEventListener("click", () => {
//         p += 1;
//         console.log(p);
//     });
// })();

// -----------------------------------------------------------
// const luftHansa = {
//     airline: "LuftHansa",
//     iataCode: "LH",
//     bookings: [],
//     book: function (flightNum, name) {
//         let temp = `${name} booked sit on ${this.airline} flight ${this.iataCode}${flightNum}`;
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}`,
//             name,
//         });
//         console.log(temp);
//     },
// };

// luftHansa.book("239", "Bob");
// luftHansa.book("240", "Alice");
// console.log(luftHansa.bookings);

// const euroWings = {
//     airline: "EuroWigns",
//     iataCode: "EW",
//     bookings: [],
// };
// const book = luftHansa.book;

// book.call(euroWings, "241", "Charlie");

// console.log(euroWings.bookings);

// ---------------------------------------------------

// const bookEW = book.bind(euroWings);
// const bookLH = book.bind(luftHansa);

// // bookLH(242, "Alex");

// const bookLH24 = book.bind(luftHansa, 24);

// // bookLH24("Alex671");
// // bookLH24("Alex666");

// luftHansa.planes = 300;
// luftHansa.buyPlane = function () {
//     this.planes++;
//     console.log(this.planes);
// };
// document.querySelector(".buy").addEventListener("click", luftHansa.buyPlane.bind(luftHansa));

// // tax

// const addTax = (rate, value) => value + value * rate;
// // console.log(addTax(0.1, 100));

// const tax23 = addTax.bind(null, 0.23); //переписать эту хуйню через замыкания
// // console.log(tax23(100));

// const tax25 = tempTax(addTax, 0.25);
// console.log(tax25(100));

// function tempTax(func, rate) {
//     return function (value) {
//         return func(rate, value);
//     };
// }

// ------------------------------------------

// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//     answers: new Array(4).fill(0),

//     // 1
//     registerNewAnswer: function () {
//         let answer = prompt(`${this.question}\n ${this.options.join("\n")}\n(Write option number)`);
//         // console.log(answer);
//         switch (answer) {
//             case "0":
//                 this.answers[0]++;
//                 break;
//             case "1":
//                 this.answers[1]++;
//                 break;
//             case "2":
//                 this.answers[2]++;
//                 break;
//             case "3":
//                 this.answers[3]++;
//                 break;
//             default:
//                 console.log(answer, `answer is not valid`);
//                 break;
//         }
//         this.displayResults(this.answers);
//     },
//     displayResults: function (type = "arr") {
//         // console.log(arg);
//         // console.log(typeof arg);
//         if (type === "string") {
//             console.log(`Poll results are ${this.answers.join(", ")}`);
//         } else {
//             console.log(this.answers);
//         }
//     },
// };

// document.querySelector(".poll").addEventListener("click", poll.registerNewAnswer.bind(poll));

// let testData1 = [5, 2, 3];
// // let testData2 = [1, 5, 3, 9, 6, 1];
// // let testData3 = "5, 2, 3";
// // let testData4 = "1, 5, 3, 9, 6, 1";

// poll.displayResults.apply({ answers: testData1 });

// ----------------------------------------------------------------
// more closures

// let f;

// const g = function () {
//     let a = 24;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const d = function () {
//     let a = 444;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// g();
// f(); //48

// d();
// f(); //888

// //

// const bortPassengers = function (n, wait) {
//     let perGroup = n / 3;
//     setTimeout(() => {
//         console.log(`will start boarding all ${n} passengers`);
//         console.log(`3 groups width ${perGroup} passengers`);
//     }, 1000 * wait);
//     console.log(`will start boarding in ${wait} seconds`);
// };

// bortPassengers(180, 3);

// ----------------------------------------------------------------

// (function () {
//     let header = document.querySelector("h1");
//     header.style.color = "red";
//     document.querySelector("body").addEventListener("click", function () {
//         header.style.color = "blue";
//     });
// })();

// ----------------------------------------------------------------

// Даны кнопки. Привяжите к каждой кнопке событие по клику, которое будет считать количество нажатий по
// кнопке и выводить его в текст кнопки. Количество нажатий для каждой кнопки должно хранится в замыкании

// let btn = document.querySelectorAll(".btn");
// function test() {
//     let count = 0;
//     return function () {
//         count++;
//         this.innerText = count;
//     };
// }

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener("click", test());
// }

// ------------------------------------------------------------------
//  Дан массив цветов. Даны абзацы. По первому нажатию на абзац он должен покраситься в первый цвет из массива,
//  по второму нажатию - во второй и так далее. Все абзацы работают независимо

// let colors = ["red", "orange", "yellow", "green", "blue"];

// let p = document.querySelectorAll(".p");

// function paintP(p) {
//     let count = -1;
//     p.addEventListener("click", function () {
//         count = count == 4 ? 0 : count + 1;
//         // console.log(count);
//         p.style.color = colors[count];
//     });
// }
// paintP(p[0]);
// paintP(p[1]);

// --------------------------------------------------------------
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
// Например:

/* .. ваш код для inBetween и inArray */
// function inBetween(a, b) {
//     return function (c) {
//         if (c >= a && c <= b) {
//             return true;
//         }
//     };
// }

// function inArray(arr) {
//     return function (c) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === c) {
//                 return true;
//             }
//         }
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// // alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// -------------------------------------------------------

// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => a.name > b.name ? 1 : -1);

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => a.age > b.age ? 1 : -1);
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField("name"));
// console.log(users);

// users.sort(byField("age"));
// console.log(users);

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

// function byField(sort) {
//     if (sort === "name") {
//         return function (a, b) {
//             // console.log("name");
//             console.log(a, b);
//             let res = a.name > b.name ? 1 : -1;
//             return res;
//         };
//     } else if (sort === "age") {
//         return function (a, b) {
//             console.log("age");
//             // console.log(a, b);
//             let res = a.age > b.age ? 1 : -1;
//             return res;
//         };
//     }
// }

// --------------------------------------------------------------------

// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () {
//             // функция shooter
//             // console.log(shooter.i);
//             console.log("alert", shooter.i);
//             // console.log("alert", i); // должна выводить порядковый номер
//         };
//         shooter.i = i;
//         // console.log(i);
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// // Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

// ---------------------------------------

// Напишите функцию, которая определяет уникальны ли все символы в строке.
// Регистр должен учитываться: ‘a’ и ‘A’ разные символы.

// function isUnique(string) {
//     console.log();
//     let sArr = string.split("");
//     let strArr = new Set(sArr);
//     console.log("sArr.length", sArr.length);
//     console.log("strArr.size", strArr.size);
//     return sArr.length == strArr.size;
// }

// console.log(isUnique("abcdef")); // -> true
// console.log(isUnique("1234567")); // -> true
// console.log(isUnique("abcABC")); // -> true
// console.log(isUnique("abcadef")); // -> false

// ----------------------------------------------------

// Напишите функцию, принимающая массив с вложенными массивами и распакуйте в результирующий плоский массов.
//  В результате должны получить новый одномерный массив.

// function flatten(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === "object") {
//             array.splice(i, 1, ...array[i]);
//             i--;
//         }
//     }
//     return array;
// }

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

// ----------------------------------------------------

// Напишите функцию, которая принимает строку и возвращает новую,
// в которой все дублирующиеся символы будут удалены.

// function removeDupes(str) {
//     let strArr = str.split("");
//     let set = new Set(strArr);
//     strArr = [...set];
//     return strArr.join("");
// }

// console.log(removeDupes("abcd")); // -> 'abcd'
// console.log(removeDupes("aabbccdd")); // -> 'abcd'
// console.log(removeDupes("abcddbca")); // -> 'abcd'
// console.log(removeDupes("abababcdcdcd")); // -> 'abcd'

// ----------------------------------------------------

// Напишите функцию, которая принимает массив строк и возвращает самую частовстречающуюся строку в этом массиве.
//  Если таких строк несколько, то нужно вернуть первую, идя слева на право.

// function highestFrequency(array) {
//     let map = new Map();
//     let res = ["a", 0];
//     for (let i = 0; i < array.length; i++) {
//         // console.log(!map.has(array[i]));
//         if (!map.has(array[i])) {
//             map.set(array[i], 0);
//         } else {
//             let temp = map.get(array[i]);
//             map.set(array[i], ++temp);
//         }
//     }

//     let i = 0;
//     for (let [key, val] of map.entries()) {
//         if (i == 0) {
//             [res[0], res[1]] = [key, val];
//         }
//         i++;
//         if (val > res[1]) {
//             [res[0], res[1]] = [key, val];
//         }
//     }
//     // console.log("res", res);
//     // console.log(map);
//     return res[0];
// }

// console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
// console.log(highestFrequency(["abc", "def"])); // -> abc
// console.log(highestFrequency(["abc", "abc", "def", "def", "def", "ghi", "ghi", "ghi", "ghi"])); // -> ghi

// ----------------------------------------------------
