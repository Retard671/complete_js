"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        "2019-11-18T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2020-05-27T17:01:17.194Z",
        // "2020-07-11T23:36:17.929Z",
        // "2020-07-12T10:51:36.790Z",
        "2022-08-07T10:51:36.790Z",
        "2022-08-08T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        "2019-11-01T13:15:33.035Z",
        "2019-11-30T09:48:16.867Z",
        "2019-12-25T06:04:23.907Z",
        "2020-01-25T14:18:46.235Z",
        "2020-02-05T16:33:06.386Z",
        "2020-04-10T14:43:26.374Z",
        "2020-06-25T18:49:59.371Z",
        "2020-07-26T12:01:20.894Z",
    ],
    currency: "USD",
    locale: "en-US",
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
let localizeOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
};
let options = {
    style: "currency",
    currency: "USD",
    locale: "en-US",
};

const displayMovements = function (acc, sort = false) {
    containerMovements.innerHTML = "";

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? "deposit" : "withdrawal";

        // 08/03/2020  "2020-07-26T12:01:20.894Z",
        let temp = acc.movementsDates[i].slice(0, 10).split("-");
        let temp2 = new Date(acc.movementsDates[i]);
        // console.log(temp);

        let dateNow = new Date().getTime();
        let transactionTime = new Date(acc.movementsDates[i]).getTime();
        let date = (dateNow - transactionTime) / 1000 / 60 / 60 / 24;

        // console.log(date);
        let resDate;
        if (date <= 1) {
            resDate = `Today`;
        } else if (date <= 2) {
            resDate = `Yesterday`;
        } else if (date <= 7) {
            resDate = `${Math.trunc(date)} day ago`;
        } else {
            resDate = new Intl.DateTimeFormat(acc.locale).format(temp2);
            // resDate = `${temp[2]}/${temp[1]}/${temp[0]}`;
        }
        //
        // walett
        let movVal = new Intl.NumberFormat(options.locale, options).format(mov.toFixed(2));
        // console.log(movVal);

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${resDate}</div>
        <div class="movements__value">${movVal}</div>
        
      </div>
    `;

        containerMovements.insertAdjacentHTML("afterbegin", html);
    });
};

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${new Intl.NumberFormat(options.locale, options).format(acc.balance.toFixed(2))}`;

    // 09/08/2022, 12:32
    let datemow = new Date();

    // let locale = navigator.language;
    // console.log(navigator);

    let pastedate = new Intl.DateTimeFormat(acc.locale, localizeOptions).format(datemow);
    // let pastedate = `${datemow.getDate() < 10 ? "0" + datemow.getDate() : datemow.getDate()}/${
    //     datemow.getMonth() + 1 < 10 ? "0" + (datemow.getMonth() + 1) : datemow.getMonth() + 1
    // }/${datemow.getFullYear()}, ${datemow.getHours()}:${datemow.getMinutes()}`;
    labelDate.textContent = pastedate;
};

const calcDisplaySummary = function (acc) {
    const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${new Intl.NumberFormat(options.locale, options).format(incomes.toFixed(2))}`;

    const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${new Intl.NumberFormat(options.locale, options).format(Math.abs(out.toFixed(2)))}`;
    // new Intl.NumberFormat(options.locale, options).format(
    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${new Intl.NumberFormat(options.locale, options).format(interest.toFixed(2))}`;
};

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(" ")
            .map(name => name[0])
            .join("");
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

let logOutIntervalID;
function startLogOutTimer() {
    clearInterval(logOutIntervalID);
    let timer = new Date(0.3 * 60 * 1000);

    function tick() {
        labelTimer.textContent = `${timer.getMinutes() < 10 ? "0" + timer.getMinutes() : timer.getMinutes()}:${timer.getSeconds() < 10 ? "0" + timer.getSeconds() : timer.getSeconds()}`;
        // console.log(`${timer.getMinutes() < 10 ? "0" + timer.getMinutes() : timer.getMinutes()}:${timer.getSeconds() < 10 ? "0" + timer.getSeconds() : timer.getSeconds()}`);
        timer = new Date(timer - 1000);
        if (timer < 0) {
            console.log("время кончилось");
            containerApp.style.opacity = 0;
            clearInterval(logOutIntervalID);
            labelWelcome.textContent = `Log in to get started`;
        }
    }
    tick();
    logOutIntervalID = setInterval(tick, 1000);
}
// function reStartLogOutTimer() {
//     clearInterval(logOutIntervalID);
//     startLogOutTimer();
// }

btnLogin.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        startLogOutTimer();
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = "";
        inputLoginPin.blur();

        options.currency = currentAccount.currency;
        options.locale = currentAccount.locale;

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    startLogOutTimer();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
    inputTransferAmount.value = inputTransferTo.value = "";

    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //add date
        let date = new Date();
        currentAccount.movementsDates.push(date.toISOString());
        receiverAcc.movementsDates.push(date.toISOString());
        console.log("currentAccount.movementsDates", currentAccount.movementsDates);
        console.log("date", date);

        // Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener("click", function (e) {
    e.preventDefault();
    startLogOutTimer();

    const amount = Math.floor(Number(inputLoanAmount.value));

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        //add date
        let date = new Date();
        currentAccount.movementsDates.push(date.toISOString());
        // console.log("currentAccount.movementsDates", currentAccount.movementsDates);
        // console.log("date", date);

        // Update UI
        setTimeout(updateUI, 3000, currentAccount);
        // updateUI(currentAccount);
    }
    inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
    e.preventDefault();
    startLogOutTimer();
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
        clearInterval(logOutIntervalID);
    }

    inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
    e.preventDefault();
    startLogOutTimer();
    displayMovements(currentAccount, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);

// console.log(0.1 + 0.2);
// console.log(1 / 3);

// console.log(Number("123")); // 123
// console.log(String(123)); // '123'

// console.log(Number.parseInt("30px", 10)); //30
// console.log(Number.parseInt("q30px", 10)); //NaN

// console.log(Number.parseInt("3.1px", 10)); //3
// console.log(Number.parseFloat("3px", 10)); //3
// console.log(Number.parseFloat("3.1px", 10)); //3.1

// console.log(Number.isNaN("")); //false
// console.log(Number.isNaN(NaN)); //true
// console.log(Number.isNaN(1 / 0)); //false
// console.log(Number.isNaN(+"e4")); //true

// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite("20")); //false

// console.log(Number.isInteger(20)); //true
// console.log(Number.isInteger("20")); //false
// console.log(Number.isInteger(Number("20"))); //false

//
//

// console.log(Math.sqrt(25));
// console.log(25 ** (1 / 2));
// console.log(8 ** (1 / 3));

// console.log(Math.max(3, 67, 12, 3, 2, 5, 12));
// console.log(Math.max(3, "67", 12, 3, 2, 5, 12));
// console.log(Math.max(3, "67px", 12, 3, 2, 5, 12));
// console.log(Math.min(3, 67, 12, 3, 2, 5, 12));

// console.log(Math.random());

// function getRandInt(min, max) {
//     return Math.trunc(Math.random() * (max - min) + 1) + min;
// }

// console.log(getRandInt(1, 3));
// console.log(getRandInt(3, 5));
// console.log(getRandInt(5, 10));
// console.log(getRandInt(56, 58));

// console.log(Math.trunc(23.4));
// console.log("");

// console.log(Math.round(23.4));
// console.log(Math.round(23.8));
// console.log("");
// console.log(Math.ceil(23.4));
// console.log(Math.ceil(23.8));
// console.log("");
// console.log(Math.floor(23.4));
// console.log(Math.floor(23.8));
// console.log("");
// console.log(Math.trunc(-23.4));
// console.log(Math.floor(-23.4));
// console.log('');

// console.log((2.436).toFixed(3));
// console.log((2.436).toFixed(2));
// console.log((2.436).toFixed(0));
// console.log((2.436).toFixed());

//
//
// console.log(5 % 2);
// console.log(8 % 3);
// console.log(10 % 2);

// labelBalance.addEventListener("click", function () {
//     let movem = [...document.querySelectorAll(".movements__row")];
//     console.log(movem);
//     movem.forEach(function (el, i) {
//         if (i % 2 === 0) {
//             el.style.backgroundColor = "green";
//         }
//     });
//     movem.forEach(function (el, i) {
//         if (i % 3 === 0) {
//             el.style.backgroundColor = "yellowGreen";
//         }
//     });
// });

//
//
// let a = 312_543_000.023_675;
// console.log(a);
// let b = 340_000;
// console.log(b);

// 9 007 199 254 740 991

// let a = 15_000_000_000_000_062;
// let b = 15_000_000_000_000_201;
// console.log(a + b);

// console.log(364556356435634656346564536453n * 100n);
// console.log(36453n * BigInt(0.5));
// console.log(10n / 3n);
// console.log(10n / 30n);

//
//
// let date1 = new Date();
// console.log(date1);

// let date = new Date("03 21 2000");
// console.log(date);
// console.log(new Date("may 3 2018"));
// let testDate = "2020-01-28T09:15:04.904Z";
// let dt = new Date(testDate);
// console.log("dt", dt);

// console.log(new Date(3, 3, 2, 2055, 4, 12, 4, 7));

// function consoleNormalDate() {
//     let date = new Date();
//     console.log(`0${date.getDate()}.0${date.getMonth() + 1}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`);
// }
// consoleNormalDate();

//
//
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// let date4 = new Date(2012, 1, 20, 3, 12); // 1 Jan 2011, 00:00:00
// console.log(date4);

// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
// let daysArr = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

// let date = new Date(2012, 0, 3); // 3 января 2012 года
// console.log(getWeekDay(date)); // нужно вывести "ВТ"

// function getWeekDay(date) {
//     return daysArr[date.getDay()];
// }

// В Европейских странах неделя начинается с понедельника (день номер 1),
// затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date),
// которая возвращает «европейский» день недели для даты date.

// console.log(getLocalDay(date)); // вторник, нужно показать 2

// function getLocalDay(date) {
//     let temp = date.getDay() == 0 ? 7 : date.getDay();
//     return temp;
// }

// Какой день месяца был много дней назад?
// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.

// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт
// девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);

// console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

// function getDateAgo(dateNow, ago) {
//     let agosec = ago * 86400 * 1000;
//     let res = new Date(dateNow.getTime() - agosec);
//     return res;
// }

// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца.
// Иногда это 30, 31 или даже февральские 28/29.

// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month + 1);
//     date.setDate(0);
//     let res = date.getDate();
//     console.log("res", res);
//     console.log(date);
// }
// getLastDayOfMonth(2012, 1);

// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToday() {
//     let date = new Date();
//     let secNow = date.getTime();
//     let dateMorning = new Date(date.getFullYear(), date.getMonth(), date.getDate());
//     // return dateMorning.getTime() - secNow;
//     let res = Math.round((secNow - dateMorning.getTime()) / 1000);
//     console.log(res);
// }
// getSecondsToday();

// Сколько секунд осталось до завтра?
// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:
// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

// function getSecondsToTomorrow() {
//     let date = new Date();
//     let secNow = date.getTime();
//     let dateMorning = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
//     // return dateMorning.getTime() - secNow;
//     let res = Math.round((dateMorning.getTime() - secNow) / 1000);
//     console.log(res);
// }
// getSecondsToTomorrow();

// Форматирование относительной даты
// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты",
// всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:
// console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"
// console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"
// console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// console.log(formatDate(new Date(new Date() - 86400 * 1000)));

// function formatDate(arg) {
//     let now = new Date();
//     let res = now.getTime() - arg.getTime();
//     if (res == 1) {
//         console.log("прямо сейчас");
//         return "";
//     }
//     res = res / 1000;
//     if (res < 60) {
//         console.log(`${res} сек. назад`);
//         return "";
//     }
//     res = res / 60;
//     if (res < 60) {
//         console.log(`${res} мин. назад`);
//         return "";
//     }
//     res = res / 60;
//     if (res < 60) {
//         console.log(`${res} ч назад`);
//         return "";
//     }
//     console.log(res);
// }

// let futureDate = new Date(2023, 7, 9);
// let nowDate = new Date();
// let res = futureDate.getTime() - nowDate.getTime();
// console.log(res / 1000 / 60 / 60 / 24);

// console.log(navigator);

// let options1 = {
//     style: "currency",
//     unit: "mile-per-hour",
//     currency: "USD",
// };
// let num = 3235235.43;
// console.log("en-GB", new Intl.NumberFormat("en-GB", options1).format(num));
// console.log("en-US", new Intl.NumberFormat("en-US", options1).format(num));
// console.log("ru-RU", new Intl.NumberFormat("ru-RU", options1).format(num));

//
//

// let pizzaTimer = setTimeout(arg1 => console.log(`pizza width ${arg1}`), 3000, "olives");

// if (1) {
//     clearTimeout(pizzaTimer);
// }

// setInterval(() => console.log("test"), 1000);

// setInterval(function () {
//     let date = new Date();
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }, 1000);

//
//
//
//

// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
// Сделайте два варианта решения.
// Используя setInterval.
// Используя рекурсивный setTimeout.

// function printNumbers(from, to) {
//     let tick = setInterval(function () {
//         if (from == to) {
//             clearInterval(tick);
//         }
//         console.log(from);
//         from += 1;
//     }, 1000);

// }

// printNumbers(2, 8);

// function recPrintNumbers(from, to) {
//     function printNum(num) {
//         if (num == to + 1) {
//             return 0;
//         }
//         setTimeout(() => {
//             console.log(num);
//             printNum(num + 1);
//         }, 1000);
//     }
//     printNum(from);
// }

// recPrintNumbers(3, 9);

// let test = setTimeout(() => console.log(""), 1000);
// console.log("id", test);

// let test2 = setTimeout(() => console.log(""), 1000);
// console.log("id", test2);
