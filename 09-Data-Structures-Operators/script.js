"use strict";

// Data needed for a later exercise
// const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    order: function (starterMenuOrder, mainMenuOrder) {
        return [this.starterMenu[starterMenuOrder], this.mainMenu[mainMenuOrder]];
    },
    orderDelivery: function ({ time = "19:00", adress = "", starterMenu = "-", mainMenu = "-" }) {
        // console.log(arg);
        console.log(`you order ${this.starterMenu[starterMenu]} and ${this.mainMenu[mainMenu]} time ${time} adress ${adress}`);
    },
};

// for (const i of Object.keys(restaurant)) {
//     console.log(i);
// }

// let openingHours = restaurant.openingHours;
// console.log(openingHours);

// for (let [day, { open, close }] of Object.entries(openingHours)) {
//     console.log(`at day ${day} we open at ${open} and close at ${close}`);
//     console.log(open);

//     // console.log([day, open, close]);
// }

// let days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// console.log(days[6]);

// for (const day of days) {
//     console.log(day);
//     console.log(restaurant.openingHours?.[day]?.open);
// }
// console.log(restaurant.orderDelivery?.({}));

// console.log(restaurant.openingHours.[days[6]].open);

// const arr = [2, 3, 4];
// let [a, b, c] = arr;
// [a, c] = [c, a];
// console.log(a, b, c);
// console.log(arr);

// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// let order = restaurant.order(1, 0);
// console.log(order);
//
//

// let { name: n, location: l, mainMenu: mm } = restaurant;
// console.log(n, l, mm);

// let a = 99;
// let b = 88;
// let obj = { a: 23, b: 7, c: 14 };
// // {a,b} = obj так не будетработать
// ({ a, b } = obj);
// console.log(a, b);

// let {
//     openingHours: {
//         fri: { open, close },
//     },
// } = restaurant;
// console.log(open, close);

// restaurant.orderDelivery({
//     adress: "test",
//     // time: "20:00",
//     starterMenu: 0,
//     mainMenu: 0,
// });

// let salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalary(salaries) {
//     if (Object.keys(salaries).length == 0) {
//         return null;
//     }

//     let test = Object.entries(salaries);
//     let max = test[0];

//     for (let i = 0; i < test.length; i++) {
//         if (test[i][1] > max[1]) {
//             max = test[i];
//         }
//     }
//     return max[0];
// }

// console.log(topSalary(salaries));

// let allmenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(allmenu);

// let test = ["a", "b", "c"];
// console.log(...test);
// let test2 = "abc";
// let test2arr = [...test2];
// console.log(test2arr);

// function summ(...rest) {
//     let summ = 0;
//     for (let i = 0; i < rest.length; i++) {
//         summ += rest[i];
//     }
//     return summ;
// }

// console.log(summ(1, 2, 3, 4));
// console.log(summ(1, 2, 3, 4, 5, 6));
// let test10 = [7, 8, 9];
// console.log(summ(...test10));

// let test = 0 || "123" || "abc";
// console.log(test);

// let test2 = "a" && 2 && 101;
// console.log(test2);

//
// --------------------------------------------------------------------------------
//
// let rest1 = {
//     name: "restaurant1",
//     guests: 20,
// };
// let rest2 = {
//     name: "restaurant2",
//     owner: "Ivan",
// };
// rest1.guests = rest1.guests || 10;
// rest2.guests = rest2.guests || 10;
// // делает то же самое
// rest1.guests ||= 10;
// rest2.guests ||= 10;
// console.log(rest1.guests); //20
// console.log(rest2.guests); //10

// rest1.owner = rest1.owner && "no owner";
// rest2.owner = rest2.owner && "no owner";
// // делает то же самое
// rest1.guests &&= "no owner";
// rest2.guests &&= "no owner";

// console.log(rest1.owner); //undefined
// console.log(rest2.owner); //"no owner"

// Аналогично с оператором ??
// -----------------------------------------------------------

///////////////////////////////////////
// Coding Challenge #1
// const game = {
//     team1: "Bayern Munich",
//     team2: "Borrussia Dortmund",
//     players: [
//         ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
//         ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
//     ],
//     score: "4:0",
//     scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//     date: "Nov 9th, 2037",
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// };

// 1--
// let {
//     players: [players1, players2],
// } = game;
// let [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2--
// let {
//     players: [[gk, ...fieldPlayers], []],
// } = game;
// console.log(gk);
// console.log(fieldPlayers);

// 3--
// let {
//     players: [players1, players2],
// } = game;
// let allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4--
// console.log(players1);
// let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5--
// let {
//     odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// 6--
// function printGoals(...goalPlayers) {
//     for (let i = 0; i < goalPlayers.length; i++) {
//         console.log(`Player ${goalPlayers[i]} goal number ${i}`);
//     }
// }
// const printGoals2 = function (...goalPlayers) {
//     console.log(goalPlayers);
//     console.log(goalPlayers.length);
// };

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals2("Davies", "Muller", "Lewandowski", "Kimmich");

// 7--
// let { team1, x, team2 } = game.odds;
// console.log(team1 > team2 || "team1 is more likely to win");
// console.log(team1 < team2 || "team2 is more likely to win");

// (team1 > team2 || "team1 is more likely to win")||(team1 < team2 || "team2 is more likely to win")||'draw is more likely'
// не работает
// -----------------------------------------------------------

///////////////////////////////////////
// Coding Challenge #2
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
        ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// for (const i of Object.entries(game.scored)) {
//     console.log(i);
// }

// 1--
// for (const [i, name] of Object.entries(game.scored)) {
//     console.log(`Goal ${+i + 1}: ${name}`);
// }

// 2--
// let average = 0;
// for (const [i, odds] of Object.entries(game.odds)) {
//     average += odds;
// }
// console.log(average / Object.entries(game.odds).length);

// 3--
//   Odd of victory Bayern Munich: 1.33
//   Odd of draw: 3.25
//   Odd of victory Borrussia Dortmund: 6.5

// let [team1, team2, , , , , [, odds]] = Object.entries(game);
// console.log(team1, team2, odds);

// for (const [team, odds1] of Object.entries(odds)) {
//     let teamName = game[team];
//     // console.log(teamName);
//     let str = teamName == undefined ? `draw` : `victory ${teamName}`;
//     console.log(`Odd of ${str}: ${odds1}`);
// }

// 4--
// let scorers = {};
// for (const name of Object.values(game.scored)) {
//     // console.log(name);
//     // if (scorers[name] == undefined) {
//     //     scorers[name] = 1;
//     // } else {
//     //     scorers[name] += 1;
//     // }
//     // console.log(scorers[name]);
//     // scorers[name] = scorers[name] == undefined ? 1 : scorers[name] + 1;
//     scorers[name] && scorers[name]++;
//     scorers[name] = scorers[name] ?? 1;
// }
// console.log(scorers);

// -----------------------------------------------------

// let array = ["q", "w", "e"];
// for (let [i, element] of array.entries()) {
//     console.log(`i= ${i}, elem = ${element}`);
// }
// i= 0, elem = q
// i= 1, elem = w
// i= 2, elem = e
// --------------------------------------------------------

// let rest = new Map();
// rest.set("name", "Italiano");
// rest.set(1, "location 1");

// console.log(rest.set(2, "location 2"));

// rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"]).set("open", 11).set("close", 23).set(true, "we open").set(false, "we closed");
// console.log(rest.get("name"));
// console.log(rest.get(true));
// let time = 17;

// console.log(rest.get("open") < time && time < rest.get("close") ? rest.get(true) : rest.get(false));

let question = new Map([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct 🎉"],
    [false, "Try again!"],
]);

// console.log(question.get("question"));
// for (const [i, val] of question) {
//     if (typeof i === "number") {
//         console.log(`${i})  ${val}`);
//     }
// }
// let result = Number(prompt("You answer:"));
// console.log(result === question.get("correct") ? question.get(true) : question.get(false));

// --------------------------------------------------
///////////////////////////////////////
// Coding Challenge #3
const gameEvents = new Map([
    [17, "⚽️ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽️ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽️ GOAL"],
    [80, "⚽️ GOAL"],
    [92, "🔶 Yellow card"],
]);

// 1--

// let eventsSet = new Set();
// for (const [i, val] of gameEvents) {
//     // console.log(val);
//     eventsSet.add(val);
// }
// let eventsArr = [...eventsSet];
// console.log(eventsArr);

// let eventsSet2 = [...new Set(gameEvents.values())];
// console.log(eventsSet2);

// 2--
// gameEvents.delete(64);
// console.log(gameEvents);

// 3--
// let count = 0;
// let j = 0;
// for (const [i, val] of gameEvents) {
//     j == 0 ? (count += i) : (count += i - j);
//     j = i;
// }
// console.log(count / gameEvents.size);

// console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// 4--
// for (const [i, val] of gameEvents) {
//     console.log(`[${i <= 45 ? "FIRST HALF" : "SECOND HALF"}] ${i}: ${val}`);
//     // i <= 45 ? `[FIRST HALF] ${i}: ${val}` : `[SECOND HALF] ${i}: ${val}`
// }

// ---------------------------------------------------------
// strings

// let airline = "test airline";
// let plane = "A320";
// console.log(airline[2]);
// console.log(airline.indexOf("e"));

// let test = "qwerty, asdf, zxc";
// console.log(test[test.lastIndexOf(",")]);

// test[test.lastIndexOf(",")] = "a";
// console.log(test);
// console.log(airline.lastIndexOf(","));

// function checkMiddleSeat(seat) {
//     let temp = seat.slice(-1);
//     if (temp == "B" || temp === "E") {
//         console.log(`seat ${seat} is middle`);
//     } else {
//         console.log(`seat ${seat} is not middle`);
//     }
// }
// checkMiddleSeat("11B");
// checkMiddleSeat("11A");

// let test = "test";
// console.log(test[1]);
// console.log(test.length);
// console.log(test[test.length - 1]);

// console.log(test.indexOf("t")); //0
// console.log(test.lastIndexOf("t")); //3
// console.log(test.slice(0, test.indexOf(" ")));

// test = "test strings";
// console.log(test.slice(1, 6)); //est s
// console.log(test.slice(3)); //t strings
// console.log(test.slice(-3)); //ngs
// console.log(test.slice(3, -3)); //t stri

// const priceGB = "288,97£";
// console.log(priceGB);

// const priceUS = priceGB.slice(0, -1) + "$";
// const priceUS2 = priceUS.replace(",", ".");
// console.log(priceUS2);

// let test = "qwertqw";
// console.log(test.replaceAll("q", "3")); // 3wert3w

// ------------------------------------------------------------

// let teststr = "test string";
// console.log(teststr.split(" "));
// console.log(teststr.padEnd(25, "!"));

function capitalize(str) {
    let strArr = str.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        let temp = strArr[i].split("");
        temp[0] = temp[0].toUpperCase();
        strArr[i] = temp.join("");
    }
    return strArr.join(" ");
}
// console.log(capitalize("test tesdf"));

function mascCreditCard(card) {
    let str = String(card);
    let strl = str.length;
    str = str.slice(str.length - 4, str.length);
    str = str.padStart(strl, "*");
    return str;
}
// console.log(mascCreditCard(33334444));
// console.log(mascCreditCard(1111222233334444));

// --------------------------------------------------------------------------

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

// let div = document.createElement("div");
// div.className = "alert";
// div.style = " width: 100%; display:flex; justify-content:space-around; align-items:center";
// div.innerHTML = "<textarea id='inp' name='inp'rows='5' cols='33'></textarea>";
// div.innerHTML += "<button class='btn' type='submit' style='height:50px; width:150px; border-radius:10px; border:0px'>Translate</button>";
// document.body.append(div);

// document.querySelector(".btn").addEventListener("click", () => {
//     let inp = document.querySelector("#inp").value;
//     console.log(inp);
//     let inpArr = inp.split("\n");
//     console.log(inpArr);
//     translateToCamelCase(inpArr);
// });

// function translateToCamelCase(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         arr[i] = arr[i].trim().toLowerCase();
//         let strArr = arr[i].split("_");
//         for (let i = 1; i < strArr.length; i++) {
//             let temp = strArr[i].split("");
//             temp[0] = temp[0].toUpperCase();
//             strArr[i] = temp.join("");
//         }
//         arr[i] = strArr.join("");
//         arr[i] = arr[i].padEnd(20, " ") + "✅".repeat(i + 1);
//     }

//     for (const el of arr) {
//         console.log(el);
//     }
// }

// ---------------------------------------------------------------
const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

let arr = flights.split("+");
console.log(arr);
let maxLength = 0;
for (let i = 0; i < arr.length; i++) {
    let [status, from, to, time] = arr[i].split(";");
    let res = `${status.replace(/_/g, " ")} from ${from.slice(0, 3).toLocaleUpperCase()} to ${to.slice(0, 3).toLocaleUpperCase()} (${time.replace(":", "h")})`;
    console.log(res);
    arr[i] = res;
    maxLength = maxLength < res.length ? res.length : maxLength;
}
console.log(maxLength);
for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].includes("Delayed") ? "🔴" + arr[i] : " " + arr[i];
    arr[i] = arr[i].padStart(maxLength + 3, " ");
}

for (const el of arr) {
    console.log(el, el.length);
}
