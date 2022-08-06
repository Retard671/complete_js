"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// отображение списка переводов
function displayMovements(movements) {
    containerMovements.innerHTML = "";
    // let a = document.querySelectorAll('.movements__row');
    // console.log(a);
    // a[0].remove();
    // a[1].remove();
    movements.forEach(function (val, i) {
        let type = val > 0 ? "deposit" : "withdrawal";

        let div = document.createElement("div");
        div.className = "movements__row";
        div.innerHTML = `
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                <div class="movements__date">3 days ago</div>
                <div class="movements__value">${val}€</div>`;
        containerMovements.prepend(div);

        // let elem = `<div class="movements__type movements__type--${type}">
        //   ${i + 1} ${type}</div>
        //   <div class="movements__date">3 days ago</div>
        //   <div class="movements__value">${val}€</div>`;
        // containerMovements.insertAdjacentHTML('beforebegin', elem);
    });
}
// displayMovements(account1.movements);
// отображение списка переводов

// const accountsInitials = accounts.map(function (item) {
//     let names = item.owner.split(" ");
//     let res = names.reduce(function (res1, i) {
//         return (res1 += i[0]);
//     }, "");
//     item.username = res.toLowerCase();
//     return res.toLowerCase();
// });
// console.log(accountsInitials);
// console.log("accounts", accounts);

// через map

//

// добавляет сокращенное имя пользователя всем пользователям
accounts.forEach(function (acc) {
    acc.username = acc.owner
        .split(" ")
        .map(i => i[0].toLowerCase())
        .join("");
});

// показывает баланс
function showBalance(acc) {
    let balanse = acc.movements.reduce(function (count, v) {
        return count + v;
    }, 0);
    labelBalance.textContent = balanse + "€";
}
// showBalance(account1);

// отображает данные внизу (IN 0000€ OUT 0000€ INTEREST 0000€)
function displaySummary(acc) {
    let in1 = Math.trunc(acc.movements.filter(val => val > 0).reduce((count, val) => (count += val), 0));
    labelSumIn.textContent = `${in1}€`;

    let out = Math.trunc(acc.movements.filter(val => val < 0).reduce((count, val) => (count += val), 0));
    labelSumOut.textContent = `${Math.abs(out)}€`;

    let interest = acc.movements
        .filter(val => val > 0)
        .map(val => (val * acc.interestRate) / 100)
        .filter(val => val >= 1)
        .reduce((count, val) => (count += val), 0);
    labelSumInterest.textContent = `${Math.abs(interest)}€`;
}
// displaySummary(account1);
// отображает данные внизу (IN 0000€ OUT 0000€ INTEREST 0000€)

// реализовать вход в систему

// клик на кнопку входа
btnLogin.addEventListener("click", logIn);
// btnLogin.addEventListener("click", function (e) {
//     console.log(e);
// });

let user;
function logIn(e) {
    // console.log(e);
    e.preventDefault();

    user = checkData();
    if (user === false) {
        return 0;
    }
    // теперь есть объект пользователя
    labelWelcome.textContent = `Welcome back, ${user.owner.split(" ")[0]}!`;
    inputLoginUsername.value = "";
    inputLoginPin.value = "";
    inputLoginUsername.blur();
    inputLoginPin.blur();
    // отображаем интерфейс
    document.querySelector(".app").style.opacity = "1";

    // отображаем баланс
    showBalance(user);
    // отображаем операции
    displayMovements(user.movements);
    // отображаем нижние даные
    displaySummary(user);
}

// проверка данных входа
function checkData() {
    let user = accounts.find(function (obj) {
        if (obj.pin == inputLoginPin.value && (obj.username == inputLoginUsername.value || obj.owner == inputLoginUsername.value)) {
            return obj;
        }
    });
    return user || false;
}

// перевести деньги, запросить деньги, закрыть аккаунт
// перевести деньги
btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    // проверить имя для перевода
    let transferTo = accounts.find(function (obj) {
        if (obj.username == inputTransferTo.value || obj.owner == inputTransferTo.value) {
            return obj;
        }
    });
    if (transferTo === undefined) {
        console.log("такого пользователя не существует");
        return 0;
    } else if (user.username == transferTo || user.owner == transferTo) {
        console.log("1000-7?");
        return 0;
    }
    // inputTransferTo; inputTransferAmount;

    // проверка введено ли число
    let transferAmount = Number(inputTransferAmount.value);
    // console.log("transferAmount", transferAmount);

    if (transferAmount < 0 || typeof transferAmount !== "number") {
        console.log("недействительное число");
        return 0;
    } else {
        console.log("действительное число");
    }

    // проверить доступна ли данная сумма
    if (transferAmount > user.movements.reduce((count, i) => count + i, 0)) {
        console.log("недостаточно денек");
        return 0;
    } else {
        console.log("достаточно денек");
    }

    // добавить переведенную сумму получателю
    user.movements.push(transferAmount * -1);
    transferTo.movements.push(transferAmount);
    // отобразить перевод
    showBalance(user); // отображаем баланс
    displayMovements(user.movements); // отображаем операции
    displaySummary(user); // отображаем нижние даные

    // обнуляем поля
    inputTransferAmount.value = inputTransferTo.value = "";
    inputTransferAmount.blur();
    inputTransferTo.blur();
});
// перевести деньги

// запросить деньги
// если хотябы один депозит не менее 10% от суммы
btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    let loan = Number(inputLoanAmount.value);
    if (loan <= 0) {
        console.log("неверное значение");
        return 0;
    }
    let res = user.movements.some(function (val) {
        return val >= loan * 0.1;
    });
    if (res) {
        user.movements.push(loan);
        showBalance(user); // отображаем баланс
        displayMovements(user.movements); // отображаем операции
        displaySummary(user); // отображаем нижние даные
    }
    inputLoanAmount.value = "";
    inputLoanAmount.blur();
});
// запросить деньги

// закрыть аккаунт
btnClose.addEventListener("click", function (e) {
    e.preventDefault();

    let nameClose = inputCloseUsername.value;
    let pinClose = Number(inputClosePin.value);
    // проверяем данные
    if ((user.username !== nameClose && user.owner !== nameClose) || pinClose !== user.pin) {
        console.log("неверное имя или пароль");
        return 0;
    }

    // удаляем аккаунт пользователя
    let delIndex = accounts.findIndex(function (obj) {
        if (user.username === nameClose || user.owner === nameClose) {
            return true;
        }
    });
    accounts.splice(delIndex, 1);
    console.log("аккаунт удален", accounts);

    // разлогиниваемся
    document.querySelector(".app").style.opacity = "0";
    labelWelcome.textContent = `Good bye`;
    inputCloseUsername.value = inputClosePin.value = "";
    inputCloseUsername.blur();
    inputClosePin.blur();
});

// сортировка
// let sort = false; // не отсортировано
// btnSort.addEventListener("click", function (e) {
//     if (sort) {
//         displayMovements(user.movements);
//     } else {
//         let mv = [...user.movements];
//         mv.sort((a, b) => a - b);
//         displayMovements(mv);
//     }
//     sort = !sort;
//     console.log("test");
// });

let sort = 0; // не отсортировано
btnSort.addEventListener("click", function (e) {
    if (sort == 0) {
        displayMovements(user.movements);
    } else if (sort == 1) {
        let mv = [...user.movements];
        mv.sort((a, b) => b - a);
        displayMovements(mv);
    } else if (sort == 2) {
        let mv = [...user.movements];
        mv.sort((a, b) => a - b);
        displayMovements(mv);
    }
    sort = sort == 2 ? 0 : (sort += 1);
    console.log("test", sort);
});
///////
//////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'f'];
// let arr2 = ['wer', 4, 4];
// console.log(arr.slice(1));
// console.log(arr.slice(0, 2));

// console.log(arr.splice(2, 0, 'test', ...arr2));
// console.log(arr);

// let arr3 = [3, 2, 1];
// console.log(arr3.reverse());

// console.log(arr2.concat(arr3));
// console.log([...arr2, ...arr3]);

// let arr4 = [4, 5, 6, 7, 8, 9];
// console.log(arr4.join(''));
// console.log(arr4.join('-'));
// console.log(arr4.join('7'));

// let testArr = [0, 1, 2, 3, 4, 5];
// console.log(testArr.at(1));
// console.log(testArr.at(-2));
// console.log(testArr[1]);
// console.log(testArr[testArr.length - 2]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (let mv of movements) {
//   console.log(mv);
// }

// movements.forEach(function (el, i, j, l) {
//   // console.log(i, j, l);
//   if (el < 0) {
//     return 0;
//   }
//   if (el > 0) {
//     console.log(el);
//   }
//   console.log('-------------');
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (val, key, allMap) {
//   console.log('val', val);
//   console.log('key', key);
//   console.log('allMap', allMap);
// });

// Coding Challenge #1

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// let juliaDataArr = [3, 5, 2, 12, 7];
// let kateDataArr = [4, 1, 15, 8, 3];

// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// let juliaDataArr = [9, 16, 6, 8, 3];
// let kateDataArr = [10, 5, 6, 1, 4];

// function checkDogs(arr1, arr2) {
//     let shortcutArr1 = arr1.slice(1, -2);
//     // console.log(shortcutArr1);

//     let arr = [...shortcutArr1, ...arr2];
//     arr.forEach(function temp(el, i) {
//         if (el >= 3) {
//             console.log(`Dog number ${i + 1} is an adult, and is ${el} years old`);
//         } else if (el < 3) {
//             console.log(`Dog number ${i + 1} is still a puppy`);
//         } else {
//             console.log("???????");
//         }
//     });
// }
// checkDogs(juliaDataArr, kateDataArr);

// ----------------------------

// let DollarsMovements = movements.map(function (item) {
//     return Math.trunc(item * 1.1);
// });
// let DollarsMovements = movements.map(item => Math.trunc(item * 1.1));
// console.log("movements", movements);
// console.log("DollarsMovements", DollarsMovements);

// let res = [];
// for (let val of movements) {
//     res.push(Math.trunc(val * 1.1));
// }
// console.log("movements", movements);
// console.log("res", res);

// let res2 = movements.map(function (val, i) {
//     if (val > 0) {
//         return `операция №${i + 1} вы положили: ${val}`;
//     } else {
//         return `операция №${i + 1} вы сняли: ${val}`;
//     }
// });
// console.log(res2);

// let positiveMovements = movements.filter(function (v) {
//     if (v > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
// // console.log(positiveMovements);

// let allMovements = movements.reduce(function (count, el) {
//     return (count += el);
// }, 0);
// console.log(allMovements);

//
//
//
//
//
//
//
//
//

//
//
//
//
//

// Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.
// Например:

// let data = {
//     Рыбы: {
//         форель: {},
//         лосось: {},
//     },

//     Деревья: {
//         Огромные: {
//             секвойя: {},
//             дуб: {},
//         },
//         Цветковые: {
//             яблоня: {},
//             магнолия: {},
//         },
//     },
// };
// Синтаксис:

// let container = document.getElementById("container");
// createTree(container, data); // создаёт дерево в контейнере

// function createTree(container, data) {
//     console.log(data);
//     let res = "";
//     let res2 = [];

//     let resStr = "";

//     // function recursion(data, count) {
//     //     if (Object.keys(data).length === 0) {
//     //         if (count % 2 == 0) {
//     //             resStr += `<ul>\n`;
//     //         } else {
//     //             resStr += `<li> \n`;
//     //         }
//     //         return;
//     //     }
//     //     // if (count % 2 == 0) {
//     //     //     resStr += `77`;
//     //     // } else {
//     //     //     resStr += `66`;
//     //     // }
//     //     count++;
//     //     for (const key in data) {
//     //         // console.log(key);
//     //         if (count % 2 == 0) {
//     //             resStr += `<ul>${key}`;
//     //             res2.push(`${count} ${key} ul`);
//     //         } else {
//     //             resStr += `<li>${key}`;
//     //             res2.push(`${count} ${key} li`);
//     //         }

//     //         // res2.push(key + 2);
//     //         recursion(data[key], count);
//     //     }
//     // }
//     // recursion(data, 0);
//     // console.log(res2);

//     function recursion2(obj) {
//         let li = "";
//         let ul;
//         for (const key in obj) {
//             li += "<li>" + key + recursion2(obj[key]) + "</li>";
//         }
//         if (li) {
//             ul = "<ul>" + li + "</ul>";
//         }
//         return ul || "";
//         // console.log(resStr);
//     }
//     console.log(recursion2(data));
// }

// container.innerHTML = ;
// Выберите один из двух способов решения этой задачи:
// Создать строку, а затем присвоить через container.innerHTML.
// Создавать узлы через методы DOM.

///////////////////////////////////////
// Coding Challenge #2

// let testData1 = [5, 2, 4, 1, 15, 8, 3];
// let testData2 = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(dogAges) {
//     let humanAges = dogAges.map(function (age) {
//         return age <= 2 ? 2 * age : 16 + age * 4;
//     });
//     console.log("humanAges", humanAges);

//     let filteredHumanAges = humanAges.filter(function (age) {
//         return age >= 18;
//     });
//     console.log("filteredHumanAges", filteredHumanAges);

//     let allAges = filteredHumanAges.reduce(function (count, age) {
//         return count + age;
//     }, 0);
//     console.log(allAges);

//     let averageAge = allAges / filteredHumanAges.length;
//     console.log(averageAge);
//     return averageAge;
// }

// // console.log(calcAverageHumanAge(testData1));
// console.log(calcAverageHumanAge(testData2));

// 1. Рассчитайте возраст собаки в человеческих годах по следующей формуле: если возраст собаки <= 2 лет,
//  HumanAge = 2 * dogAge. Если собаке больше 2 лет, humanAge = 16 + dogAge * 4.
// 2. Исключить всех собак моложе 18 лет (что равносильно содержанию собак старше 18 лет).
// 3. Рассчитайте средний человеческий возраст всех взрослых собак
// 4. Запустите функцию для обоих тестовых наборов данных.

//
//
//

// На входе массив чисел, например: arr = [1,2,3,4,5].

// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.

// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов,
//  в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// То есть:

// let arr = [1, 2, 3, 4, 5];
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Ещё пример: getSums([-2,-1,0,1]) = [-2,-3,-3,-2].

// Функция не должна модифицировать входной массив.
// В решении используйте метод arr.reduce.

// function getSums(arr) {
//     let res = [];
//     let test = arr.reduce(function (count, val) {
//         count += val;
//         res.push(count);
//         return count;
//     }, 0);
//     return res;
// }

// console.log(getSums(arr));

// взять все депозиты, конвертировать в  долларах,  сложить их все,

// let allMovementsDollars = Math.trunc(movements.map(val => val * 1.1).reduce((count, val) => (count += val), 0));
// console.log(allMovementsDollars);

// let allMovementsDollars2 = movements.reduce(function (count, el) {
//     return (count += el * 1.1);
// });
// console.log(allMovementsDollars2);
// let allDepositsDollars = Math.trunc(
//     movements
//         .filter(val => val > 0)
//         .map(val => val * 1.1)
//         .reduce((count, val) => (count += val), 0)
// );
// console.log(allDepositsDollars);

///////////////////////////////////////
// Coding Challenge #3
// Перепишите функцию 'calcAverageHumanAge' из предыдущей задачи,
// но на этот раз в виде стрелочной функции и с использованием цепочки!
let testData1 = [5, 2, 4, 1, 15, 8, 3];
let testData2 = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(dogAges) {
//     let test = dogAges
//         .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//         .filter(age => age >= 18)
//         // .map((val, i, arr) => val / arr.length)
//         // .reduce((count, age) => count + age, 0);
//         .reduce((count, age, _, arr) => count + age / arr.length, 0);

//     console.log(test);
// }

// calcAverageHumanAge(testData1);
// calcAverageHumanAge(testData2);

//

// console.log(movements);
// let find1 = movements.find(function (val) {
//     console.log(val);
//     return val < 0;
// });
// console.log("find1", find1);

// let accs = accounts.filter(obj => obj.interestRate == 1.5)[0];
// console.log(accs);

// let accs2 = accounts.find(obj => obj.interestRate == 1.5);
// console.log(accs2);

// //

// let acc3;
// for (const i of accounts) {
//     if (i.owner === "Jessica Davis") {
//         acc3 = i;
//         break;
//     }
// }
// console.log(acc3);

// ------------------------------
// ---------------------------
// let test = movements.some(function (val) {
//     return val > 0;
// });
// console.log(test);

// let test = movements.some(deposit);
// function deposit(val) {
//     return val > 0;
// }
// console.log(test);

// let arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// console.log(accounts);

// let resArr = accounts.reduce(function (resArr, obj) {
//     // console.log(obj.movements);
//     // console.log("resArr", resArr);
//     return [...resArr, ...obj.movements];
// }, []);
// console.log(resArr);

// let arr = [2, 65, 1, 31, 4567, 3, 5, 9, 7, 2];
// arr.sort(function (a, b) {
//     console.log("a", a);
//     console.log("b", b);
//     a = 777;
//     return a - b;
// });
// console.log(arr);

// let test = "str";
// let test2 = "123";

// console.log(typeof test);
// console.log(+test);

// console.log(typeof +test2);

// let arr = ["a", "b", "c", "d", "e", "f", "g"];

// let arr2 = arr.reduce(function (count, el) {
//     return count + ">" + el;
// });
// console.log(arr2);

//
//
//
// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// let a = new Array(9);
// // a.fill(12, 4, 7);
// a.fill(2);
// console.log(a);

// console.log(Array.from(new Array(7), (_, i) => i));

// console.log(Array.from(new Array(100), () => Math.trunc(Math.random() * (6 - 1) + 1)));

// labelBalance.addEventListener("click", function () {
//     let temp = Array.from(document.querySelectorAll(".movements__value"));
//     temp = temp
//         .map(el => el.textContent)
//         .map(el =>
//             el
//                 .split("")
//                 .slice(0, el.length - 1)
//                 .join("")
//         );
//     console.log(temp);
// });

// let res = accounts.flatMap(el => el.movements).reduce((count, el) => count + el);
// console.log(res);

// колличество депозитов больше 1000
// let res = accounts
//     .flatMap(el => el.movements)
//     .reduce(function (count, el) {
//         console.log(count, el);

//         if (el >= 1000) {
//             return count + 1;
//         } else {
//             return count;
//         }
//     }, 0);
// console.log(res);

// let test = 10;
// test = ++test;
// console.log(test);

// объект который содержит сумму всех депозитов и выводов
// let res = accounts
//     .flatMap(el => el.movements)
//     .reduce(
//         function (count, el) {
//             console.log(count.deposits, el);

//             if (el > 0) {
//                 count.deposits += el;
//                 return count;
//             } else {
//                 count.withdrawal += el;
//                 return count;
//             }
//         },
//         { deposits: 0, withdrawal: 0 }
//     );
// console.log(res);

// преобразование всех слов любой строки с заглавной буквы
// не преобразовывать a

// function title(str) {
//     let exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
//     console.log(str);
//     let arr = str.split(" ");
//     let a = arr.reduce(function (count, el) {
//         // console.log(count, el);
//         if (exceptions.some(ex => ex == el)) {
//             count += `${el} `;
//             // count.push(el);
//             return count;
//         }
//         let temp = el.split("");
//         temp[0] = temp[0].toUpperCase();

//         count += `${temp.join("")} `;
//         // count.push(temp.join(""));
//         // console.log("temp", temp);
//         return count;
//     }, "");
//     console.log(a);
// }
// title("this is a nice title");
// title("this is a LONG title but not too long");
// title("and here is another title with an EXAMPLE");

// let str = "qwerty";
// let strc = str[0].toUpperCase() + str.slice(1);
// console.log(strc);

///////////////////////////////////////
// Coding Challenge #4

// TEST DATA:
const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
];
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

// 1
dogs.forEach(function (obj) {
    obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28);
});
// console.log(dogs);

// 2
// let test = dogs.filter(obj => obj.owners.some(owner => owner == "Sarah"))[0];
// console.log(test);

// let test2 = dogs.find(obj => obj.owners.includes("Sarah"));

// 3
// let ownersEatTooMuch = dogs.filter(obj => obj.curFood > obj.recommendedFood);
// let ownersEatTooLittle = dogs.filter(obj => obj.curFood < obj.recommendedFood);

// let ownersEatTooMuch = dogs.filter(obj => obj.curFood > obj.recommendedFood * 1.1);
// let ownersEatTooLittle = dogs.filter(obj => obj.curFood < obj.recommendedFood * 0.9);

// console.log("ownersEatTooMuch", ownersEatTooMuch);
// console.log("ownersEatTooLittle", ownersEatTooLittle);

// if (obj.curFood >= obj.recommendedFood * 0.9 && obj.curFood <= obj.recommendedFood * 1.1) {

// 4. Вывести на консоль строку для каждого массива, созданного в шаге 3., например:
//  "Матильда, Алиса и собаки Боба слишком много едят!" и «Собаки Сары, Джона и Майкла едят слишком мало!»
// let str1 = ownersEatTooMuch.reduce(function (count, obj) {
//     count.push(...obj.owners);
//     return count;
// }, []);

// let str2 = ownersEatTooLittle.reduce(function (count, obj) {
//     count.push(...obj.owners);
//     return count;
// }, []);

// console.log(`${str1.join(" and ")}'s dogs eat too much!`);
// console.log(`${str2.join(" and ")}'s dogs eat too little!`);

// 5
// Зарегистрируйте в консоли, есть ли какая-либо собака,
//  которая ест ТОЧНО рекомендованное количество пищи (только правда или ложь).

// let eatNormal = dogs.filter(obj => obj.curFood == obj.recommendedFood).length > 0;
// console.log("ест ТОЧНО рекомендованное количество пищи (только правда или ложь)", eatNormal);

// 6
// . Зарегистрируйте в консоли, есть ли какая-либо собака,
//  съедающая ДОСТАТОЧНОЕ количество еды (только правда или ложь).

// let eatNormal2 = dogs.some(obj => obj.curFood >= obj.recommendedFood * 0.9 && obj.curFood <= obj.recommendedFood * 1.1).length > 0;
// console.log("съедающая ДОСТАТОЧНОЕ количество еды (только правда или ложь)", eatNormal2);

// 7
// Создайте массив, содержащий собак, которые едят ХОРОШЕЕ количество еды
//  (попробуйте повторно использовать условие, использованное в 6).

// let eatNormal3 = dogs.filter(obj => obj.curFood >= obj.recommendedFood * 0.9 && obj.curFood <= obj.recommendedFood * 1.1);
// console.log("едят ХОРОШЕЕ количество еды", eatNormal3);

// Поедание нормального количества означает, что текущая порция корма собаки
// находится в диапазоне на 10% выше и на 10% ниже рекомендуемой порции

// 8.
//  Создайте неглубокую копию массива собак и отсортируйте ее по рекомендуемой порции еды
//  в порядке возрастания (имейте в виду, что порции находятся внутри объектов массива).

// let sortedDogs = Array.from(dogs).sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);

//
//
//
//
//

// Фильтрация с помощью функции
// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f.
// Если она возвращает true, то элемент добавится в возвращаемый массив.

// Сделайте набор «готовых к употреблению» фильтров:

// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:

// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

// function inBetween(a, b) {
//     console.log(a, b);
//     return function (el) {
//         if (el >= a && el <= b) {
//             return true;
//         } else {
//             return false;
//         }
//     };
// }

// function inArray(arr) {
//     return function (el) {
//         return arr.includes(el);
//     };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
// console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

//
//
//
//

// Сортировать по полю
// У нас есть массив объектов, который нужно отсортировать:

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" },
// ];
// Обычный способ был бы таким:

// по имени (Ann, John, Pete)
// users.sort((a, b) => (a.name > b.name ? 1 : -1));

// по возрасту (Pete, Ann, John)
// users.sort((a, b) => (a.age > b.age ? 1 : -1));
// Можем ли мы сделать его короче, скажем, вот таким?

// users.sort(byField("name"));
// users.sort(byField("age"));

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).
// Напишите функцию byField, которая может быть использована для этого.

// function byField(str) {
//     if (str == "name") {
//         return (a, b) => (a.name > b.name ? 1 : -1);
//     } else if (str == "age") {
//         return (a, b) => (a.age > b.age ? 1 : -1);
//     }
// }

// users.sort(byField("name"));
// users.forEach(user => console.log(user.name)); // Ann, John, Pete

// users.sort(byField("age"));
// users.forEach(user => console.log(user.name)); // Pete, Ann, John

//
//
//
//

// Армия функций
// Следующий код создаёт массив из стрелков (shooters).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let ii = i;
//         let shooter = function () {
//             // функция shooter
//             // let ii = i;
//             console.log(ii); // должна выводить порядковый номер
//         };
//         shooters.push(shooter);
//         i++;
//     }

//     return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
// Почему у всех стрелков одинаковые номера? Почините код, чтобы он работал как задумано.

//
//
//
//

// Есть функция sum, которая суммирует все элементы массива:

// function sum(arr) {
//   return arr.reduce(function(a, b) {
//     return a + b;
//   });
// }

// console.log( sum([1, 2, 3]) ); // 6 (=1+2+3)
// Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

// function sumArgs() {
//     // console.log(arguments);
//     let args = [...arguments];
//     console.log(args);
//     let test = [].reduce;
//     console.log("test", test);

//     let res1 = args.reduce((count, a) => count + a);
//     console.log("res1", res1);

//     let res = [].reduce.call(args, (count, a) => count + a);
//     console.log(res);

//     return res;
// }

// console.log(sumArgs(1, 2, 3)); // 6, аргументы переданы через запятую, без массива
// Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
// P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.

//
//
//
//
// Примените функцию к аргументам
// Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и
//  произвольное количество аргументов.

// Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы,
//  начиная со второго, и возвратить результат.

// function applyAll(func, ...rest) {
//     let temp = func(...rest);
//     console.log(temp);
//     return temp;
// }
// // Применить Math.max к аргументам 2, -2, 3
// console.log(applyAll(Math.max, 2, -2, 3)); // 3

// // Применить Math.min к аргументам 2, -2, 3
// console.log(applyAll(Math.min, 2, -2, 3)); // -2

//
//
//
//

// Исправьте функцию, теряющую "this"
// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.
// loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?
// Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user1 = {
//     name: "Вася",

//     loginOk() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFail() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// // askPassword(user1.loginOk, user1.loginFail);  //* выделенная строка
// askPassword(user1.loginOk.bind(user1), user1.loginFail.bind(user1));

//
//
//
//
// Использование частично применённой функции для логина
// Это задание является немного усложнённым вариантом одного из
// предыдущих – Исправьте функцию, теряющую "this".

// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail
// у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже,
// чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user2 = {
//     name: "John",

//     login(result) {
//         console.log(this.name + (result ? " logged in" : " failed to log in"));
//     },
// };

// // askPassword(?, ?); // ?//* выделенная строка
// askPassword(user2.login.bind(user2, true), user2.login.bind(user2, false));
