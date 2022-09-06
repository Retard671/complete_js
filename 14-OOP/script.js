"use strict";

// ------------------------------------------------------
// function summ(a, b) {
//     console.log(a + b);
// }
// summ(1, 2);
// summ("1", "2");
// summ(true, false);
// summ(true, null);
// summ(true, "2");
// summ(true, 2);

// ------------------------------------------------------
// function Person(first, last, age, gender, interests) {
//     // Определения методов и свойств
//     this.name = {
//         first: first,
//         last: last,
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
// }

// let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
// console.log(person1);
// console.log(person1.valueOf());
// console.log("Person.prototype", Person.prototype);
// console.log("Object.prototype", Object.prototype);

// ------------------------------------------------------
// ------------------------------------------------------

// const Person = function (name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
// };

// function Person(name, birthYear) {
//     // console.log(this); // Person {}

//     this.name = name;
//     this.birthYear = birthYear;
//     this.age;
// }
// Person.prototype.calcAge = function () {
//     this.age = 2022 - this.birthYear;
// };
// console.log("Person.prototype", Person.prototype);

// class Person {
//     constructor(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     }
// }

// let person1 = new Person("Adam", 1990);
// console.log(person1);

// person1.calcAge();
// console.log(person1);

// let matilda = new Person("matilda", 1991);
// console.log(matilda);

// let jack = new Person("jack", 1992);
// console.log(jack);

// let test0 = "test";
// console.log(person1 instanceof Person);
// console.log(test0 instanceof Person);

// console.log(Person.prototype.isPrototypeOf(person1));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// --------------------

// console.log(person1.__proto__);
// console.log(person1.__proto__.__proto__);
// console.log(person1.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// let arr = [0, 1, 2, 1];
// console.log(arr.__proto__);
// Array.prototype.test = function () {
//     console.log("test");
// };
// Array.prototype.unic = function () {
//     return [...new Set(this)];
// };
// console.log(arr.unic());

// console.log("Array", Array.prototype);
// arr.test();

// let h1 = document.querySelector("h1");
// console.dir(h1);
// // console.log(h1.__proto__);
// console.dir(a => a + 1);

// ////////////////////////////////////
// Coding Challenge #1

// const CreateCar = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// };
// CreateCar.prototype.accelerate = function () {
//     this.speed += 10;
//     console.log("accelerate   this.speed.", this.speed);
// };
// CreateCar.prototype.brake = function () {
//     this.speed -= 5;
//     console.log("brake  this.speed", this.speed);
// };

// let BMW = new CreateCar("BMW", 120);
// let Mercedes = new CreateCar("Mercedes", 95);

// console.log("BMW", BMW);
// console.log("Mercedes", Mercedes);
// Mercedes.brake();
// Mercedes.accelerate();

// ///////////////////////////////

// ////////////////////////////////////
// Coding Challenge #3

// function CreateCarEV(make, speed, charge) {
//     CreateCar.call(this, make, speed);
//     this.charge = charge;
// }

// CreateCarEV.prototype = Object.create(CreateCar.prototype);

// CreateCarEV.prototype.chargeBattery = function (chargeTo) {
//     if (chargeTo >= 0 && chargeTo <= 100) {
//         this.charge = chargeTo;
//     } else {
//         console.log("invalid chargeTo");
//     }
// };
// CreateCarEV.prototype.accelerate = function () {
//     this.speed += 20;
//     this.charge -= 1;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };

// let tesla = new CreateCarEV("Tesla", 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);

// ////////////////////////////////////

// class expression
// const PersonCL = class {}

// class declaration
// class PersonCL {
//     constructor(fullName, birthYear) {
//         this._fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     }
//     get calcAge() {
//         return 2022 - this.birthYear;
//     }
//     set _fullName(name) {
//         if (name.includes(" ")) this.fullName = name;
//         else console.log(`name '${name}' is not full`);
//     }
// }

// class PersonCL {
//     constructor(fullName, birthYear) {
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     }
//     // get calcAge() {
//     //     return 2022 - this.birthYear;
//     // }

//     set fullName(name) {
//         if (name.includes(" ")) this._fullName = name;
//         else console.log(`name '${name}' is not full`);
//     }

//     get fullName() {
//         return this._fullName;
//     }
// }

// let person0 = new PersonCL("name", 1999);
// let person0 = new PersonCL("name name", 1999);
// console.log("person0", person0);
// console.log("fullName", person0.fullName);

// person0.calcAge();
// console.log(person0.calcAge);
// console.log(person0.fullName);
// console.log("person0", person0);

// ------------------------------------

// let account = {
//     owner: "Name",
//     movements: [100, 300, -300, 70],

//     get getLastTransaction() {
//         return this.movements[this.movements.length - 1];
//     },
//     set setLastTransaction(mov) {
//         this.movements[this.movements.length - 1] = mov;
//     },
// };
// console.log(account.getLastTransaction); // вызывается без скобок
// account.setLastTransaction = 222;
// console.log(account.movements);

// -----------------------------------------------
// class User {
//     constructor(name) {
//         // вызывает сеттер
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(value) {
//         if (value.length < 4) {
//             alert("Имя слишком короткое.");
//             return;
//         }
//         this._name = value;
//     }
// }
// let user = new User("Иван");
// user.name = "werwer";
// console.log(user);
// alert(user.name); // Иван
// user = new User(""); // Имя слишком короткое.
// -----------------------------------------------

// Person.hey = function () {
//     console.log("hey there");
// };
// Person.hey();
// console.log(Person);

// -----------------------------------------------

// class Objects {
//     constructor(myNum) {
//         this.myNum = myNum;
//     }
//     static compare(obj1, obj2) {
//         return obj1.myNum - obj2.myNum;
//     }
// }

// let arr = [new Objects(2), new Objects(5), new Objects(12), new Objects(7), new Objects(1)];
// console.log(arr);
// arr.sort(Objects.compare);

///////////////////////////////////////
// Coding Challenge #2

class CarCL {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
        this.speedUS;
    }
    accelerate() {
        this.speed += 10;
        console.log("accelerate   this.speed.", this.speed);
    }
    brake() {
        this.speed -= 5;
        console.log("brake  this.speed", this.speed);
    }
    get speedUS() {
        console.log("mi/h", this.speed / 1.6);
    }
    set speedUS(speed) {
        console.log("normal speed", speed * 1.6);
        this.speed = speed * 1.6;
        console.log("speed in mi/h", speed);
        this._speedUS = speed;
    }
}

// let ford = new CarCL("Ford", 120);

// console.log("ford", ford);
// ford.brake();
// ford.accelerate();
// ford.speedUS = 150;
// console.log("ford", ford);
///////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #4
// class EVCl extends CarCL {
//     #charge;
//     constructor(make, speed, charge) {
//         super(make, speed);
//         this.#charge = charge;
//     }
//     chargeBattery(chargeTo) {
//         if (chargeTo >= 0 && chargeTo <= 100) {
//             this.#charge = chargeTo;
//         } else {
//             console.log("invalid chargeTo");
//         }
//         return this;
//     }
//     accelerate() {
//         this.speed += 20;
//         this.#charge -= 1;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
//         return this;
//     }
//     brake() {
//         this.speed -= 5;
//         console.log("brake  this.speed", this.speed);
//         return this;
//     }
// }

// let rivian = new EVCl("Rivian", 120, 23);
// rivian.chargeBattery(90).accelerate().brake().brake().accelerate();
// console.log("rivian", rivian);

//////////////////////////////////////////
// наследование классов с использованием функции конструктора

// function Person(name, birthYear) {
//     this.name = name;
//     this.birthYear = birthYear;
//     this.age;
// }
// Person.prototype.calcAge = function () {
//     this.age = 2022 - this.birthYear;
// };

// function Student(name, birthYear, course) {
//     Person.call(this, name, birthYear);
//     this.course = course;
// }

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.greet = function () {
//     console.log(`My name is ${this.name} and I study ${this.course}`);
// };

// let mike = new Student("Mike", 1999, "computer science");
// // mike.greet();
// Student.prototype.constructor = Student;
// console.log("mike", mike);

// /---------------------------------
// наследование классов с ES6 классов

// class StudentCL extends Person {
//     constructor(name, birthYear, course) {
//         super(name, birthYear);
//         this.course = course;
//     }
//     greet() {
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
// }

// // let martha = new StudentCL("Mrtha A", 1996, "computer science");
// let martha = new StudentCL("Mike", 1999, "computer science");
// martha.greet();
// martha.calcAge();
// console.log(martha);

// /---------------------------------
// -----------------------------------------------
// const PersonProto = {
//     calcAge() {
//         console.log(2022 - this.birthYear);
//     },
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     },
// };

// let steven = Object.create(PersonProto);
// steven.init("steven", 1990);
// console.log(steven);

// // steven.name = "steven";
// // steven.birthYear = 1990;

// let sarah = Object.create(PersonProto);
// sarah.init("sarah", 1992);
// console.log(sarah);

// /---------------------------------
// наследование классов через Object.create

// const StudentProto = Object.create(PersonProto);
// console.log("StudentProto", StudentProto);

// StudentProto.init = function (name, birthYear, course) {
//     PersonProto.init.call(this, name, birthYear);
//     this.course = course;
// };

// StudentProto.greet = function () {
//     console.log(`My name is ${this.name} and I study ${this.course}`);
// };

// let mike2 = Object.create(StudentProto);
// mike2.init("Mike", 1999, "computer science");
// console.log(mike2);

// /---------------------------------

// class Account {
//     // публичные поля (они на экземплярах класса)
//     static staticfield = 22;
//     locale = navigator.language;
//     // приватные поля
//     #movements = [];
//     #pin;
//     constructor(owner, currency, pin) {
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         console.log(`thanks for openning account, ${owner}`);
//     }
//     // публичные методы
//     getMovements() {
//         return this.#movements;
//     }

//     deposit(mov) {
//         this.#movements.push(mov);
//         return this;
//     }
//     withdrow(mov) {
//         this.deposit(-mov);
//         return this;
//     }
//     requestLoan(loan) {
//         if (this.#approveLoan(loan)) {
//             this.deposit(loan);
//         } else {
//             console.log("invalid");
//         }
//         return this;
//     }
//     // приватные методы
//     #approveLoan(loan) {
//         return true;
//     }
// }
// Account.prototype.test = 12344567;
// let acc1 = new Account("jonas", "EUR", 1234);
// // console.log(acc1.#movements); // err
// // console.log(acc1.#approveLoan(2)); // err
// acc1.deposit(170);
// acc1.withdrow(70);
// acc1.requestLoan(1000);
// console.log(acc1);
// console.log("Account", Account.staticfield);

// // chaining
// acc1.deposit(190).withdrow(200).withdrow(150).requestLoan(3000).withdrow(700);
// console.log("chaining", acc1);

// /---------------------------------

//-------------------------------------------------
// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first: first,
//         last: last,
//     };
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("Bob", "Smith", 32, "male", ["music", "skiing"]);
// // console.log(person1);
// let person2 = Object.create(person1);
// // console.log(person1 === person2.__proto__);

// let person3 = new person1.constructor("Karen", "Stephenson", 26, "female", ["playing drums", "mountain climbing"]);

// // console.log(person3);

// // console.log(person2.constructor.name);

// Person.prototype.farewell = function () {
//     alert(this.name.first + " has left the building. Bye for now!");
// };
// console.log(person1.farewell());

// -------------------------------------
// function Rabbit() {}
// Rabbit.prototype = {
//     eats: true,
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats);

// ----------------------------------------------
// let head = {
//     glasses: 1,
// };

// let table = {
//     pen: 3,
//     __proto__: head,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table,
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed,
// };

// console.log(bed.glasses);

// С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства выполнялся
// по следующему пути: pockets → bed → table → head. Например, pockets.pen
// должно возвращать значение 3 (найденное в table), а bed.glasses – значение 1 (найденное в head).

// Ответьте на вопрос: как быстрее получить значение glasses – через pockets.glasses
// или через head.glasses? При необходимости составьте цепочки поиска и сравните их.

// -------------------------------------------------

// let obj = {};

// console.log(obj.toString());

// let num = 6;

// console.log(num.__proto__);
// console.log(String.prototype);
// console.dir(Number);

// --------------------------------------------------

// let obj2 = {
//     0: "Hello",
//     1: "world!",
//     length: 2,
// };

// obj2.join = Array.prototype.join;

// console.log(Array.prototype.join.call(obj2, ","));
// console.log(obj2.join(",")); // Hello,world!

// --------------------------------------------------

// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// // Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
// // После этого должен работать такой код:

// function f() {
//     console.log("Hello!");
// }

// console.dir();

// f.defer(1000); // выведет "Hello!" через 1 секунду

// --------------------------------------------------
// function f1(a) {
//     return function (b) {
//         console.log(a + b);
//     };
// }
// f1(1)(2);

// Function.prototype.defer = function (ms) {
//     console.log("this", this);
//     let qwe = this;
//     console.log("qwe", qwe);
//     // function temp() {
//     //     return this;
//     // }
//     // let test = temp.bind(this);
//     // setTimeout(() => {
//     //     return qwe;
//     // }, ms);
//     // return setTimeout(qwe, ms);
//     // return this;

//     return function (...args) {
//         setTimeout(() => {
//             f.apply(this, args);
//         }, ms);
//     };
// };
// // Добавьте всем функциям в прототип метод defer(ms),
// // который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.
// // Например, должно работать так:

// function f(a, b) {
//     // console.log("test", arguments);
//     console.log(a + b);
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду.
// // Пожалуйста, заметьте, что аргументы должны корректно передаваться оригинальной функции.

// ------------------------------------------------------------
// Создайте калькулятор при помощи конструктора, new Calculator
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:

// read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// sum() возвращает произведение этих свойств.

// function Calculator() {}
// Calculator.prototype.read = function () {
//     this.a = +prompt();
//     this.b = +prompt();
// };
// Calculator.prototype.sum = function () {
//     return this.a + this.b;
// };
// Calculator.prototype.mul = function () {
//     return this.a * this.b;
// };

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

// ----------------------------------------------------------------
// Создайте функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в
// аргументе конструктора startingValue.
// Метод read() должен использовать prompt для считывания нового числа и прибавления его к value.
// Другими словами, свойство value представляет собой сумму всех введённых пользователем значений,
// с учётом начального значения startingValue.

// function Accumulator(startingValue) {
//     this.Accumulator = startingValue;
// }
// Accumulator.prototype.read = function () {
//     this.Accumulator += +prompt();
//     console.log(this.Accumulator);
// };

// let accumulator1 = new Accumulator(3);
// accumulator1.read();
// accumulator1.read();

// ----------------------------------------------------------------

// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// class Clock {
//     constructor(format) {
//         this.format = format;
//     }

//     render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = "0" + hours;
//         let mins = date.getMinutes();
//         if (mins < 10) mins = "0" + mins;
//         let secs = date.getSeconds();
//         if (secs < 10) secs = "0" + secs;

//         let templ = this.format.template;
//         let output = templ.replace("h", hours).replace("m", mins).replace("s", secs);

//         console.log(output);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         let rndr = this.render.bind(this);
//         rndr();
//         this.timer = setInterval(rndr, 1000);
//     }
// }

// let clock = new Clock({ template: "h:m:s" });
// clock.start();

// ---------------------------------------------

// Ниже пример кода с таким наследованием (почему он не работает? исправьте его):

// class Rabbit extends Object {
//     constructor(name) {
//         // let test = {};
//         // test.name = name;
//         // return test;
//         super();
//         this.name = name;
//     }
// }

// let rabbit = new Rabbit("Кроль");
// console.log(rabbit);

// console.log(rabbit.hasOwnProperty("name")); // Ошибка

// -------------------------------------------------

// Имеется объект dictionary, созданный с помощью Object.create(null) для хранения любых пар ключ/значение.
// Добавьте ему метод dictionary.toString(), который должен возвращать список ключей, разделённых запятой.
// Ваш toString не должен выводиться при итерации объекта с помощью цикла for..in.
// Вот так это должно работать:

// let dictionary = Object.create(null, {
//     toString: {
//         value: function () {
//             // console.log(this);
//             let res = [];
//             for (let key in this) {
//                 res.push(key);
//             }
//             return res.join(",");
//         },
//     },
// });
// // ваш код, который добавляет метод dictionary.toString

// console.log(dictionary);

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//     console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// // console.log(dictionary); // "apple,__proto__"
// console.log(dictionary.toString());

// // ---------------------------

// class User {
//     constructor(name, age) {
//         this.name = name;
//         let _age = age;
//     }
// }
// let tom = new User("Том", 26);
// console.log(tom._age); // undefined - _age - локальная переменная

// ---------------------------------

// function Cat(name) {
//     this.name = name;
// }

// let cat1 = new Cat("catt");
// console.log(cat1);
// Cat("catt");
