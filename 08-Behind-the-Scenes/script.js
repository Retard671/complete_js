"use strict";

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     console.log(name1);
//     function printAge() {
//         console.log(`You are ${age}, born in ${birthYear}`);
//         // if (true) {
//         //     function calc(a, b) {
//         //         return a + b;
//         //     }
//         // }
//         // console.log(calc(2, 3));
//     }
//     printAge();
//     return age;
// }

// let name1 = "test";
// calcAge(1990);
//
//
//
// testt = 4;
// console.log(testt); // 4
// var testt;
// console.log(testt); // 3
// console.log(tes);
// let tes = 3;

// document.querySelector("h1").addEventListener("click", test);
// function test() {
//     console.log(this);
// }
// test();

//
//
//
// let n = 15000;
// let res = [];
// for (let i = 0n; n > res.length; i++) {
//     if (i == String(i).split("").reverse().join("")) {
//         res.push(i);
//     }
// }
// res = res.slice(19);

// for (let i = 0; i < res.length; i++) {
//     console.log(i, "res", res[i], res[i + 1] - res[i]);
// }

let number = 800;
console.log(number);
// let test = String(number);
// console.log(test.length);
// console.log(String(number).length % 2 == 0);
if (String(number).length % 2 == 0) {
    console.log("четное");
} else {
    console.log("не четное");
}

if (number > 99 && number < 999) {
    console.log("test");
}

//
if (false) {
    let arr2 = [];
    let number = 101;

    let mainAdd10 = 10; //что плюсуем
    let Add11 = 11;
    let Add110 = 110;
    let Add2 = 2;

    let mainCount = 0;
    while (n > arr2.length) {
        if (mainCount == 999 || mainCount == 9999 || mainCount == 99999 || mainCount == 999999 || mainCount == 9999999 || mainCount == 99999999 || mainCount == 999999999 || mainCount == 9999999999 || mainCount == 99999999999 || mainCount == 999999999999 || mainCount == 9999999999999) {
            //       проверить на четность
            number += 2;
        }
        if (number > 999999999 && number < 9999999999) {
        }
        if (number > 99999999 && number < 999999999) {
        }
        if (number > 9999999 && number < 99999999) {
        }
        if (number > 999999 && number < 9999999) {
        }
        if (number > 99999 && number < 999999) {
        }
        if (number > 9999 && number < 99999) {
        }
        if (number > 999 && number < 9999) {
        }
        if (number > 99 && number < 999) {
        }
    }
}

console.log("");
console.log("");
console.log("");

// тест
// let res = [];
// for (let i = 1999991n; res.length < 120; i++) {
//     if (i == String(i).split("").reverse().join("")) {
//         res.push(i);
//     }
// }
// // console.log(res);

// for (let i = 0; i < res.length; i++) {
//     console.log(i, "res", res[i], res[i + 1] - res[i]);
// }
// тест

let test = 99999;

let add0_9 = 100; //что плюсуем каждую итерацию
let add10 = 110; //каждые 10
let addEvery100 = 11; //каждые 100

if (String(test).length % 2 == 0) {
    //         +1-9   убрать вторую однерку слева
    //       +0 у х10
    //       +0 у х100
    add0_9 = Number(String(add0_9).substr(1) + "0"); //что плюсуем каждую итерацию
    add10 = Number(add10 + "0"); //каждые 10
    addEvery100 = Number(addEvery100 + "0");
    console.log("четное");
} else {
    //         +1-9   плюс 1 слева
    add0_9 = Number("1" + add0_9); //что плюсуем каждую итерацию
    console.log("не четное");
}

// let test2 = 100;
// // console.log(Number("1" + test2));
// console.log(Number(test2 + "0"));

let test3 = 1100n;
// test3 = Number(String(test3).substr(1) + "0");
test3 = BigInt(String(test3).substring(0, String(test3).length - 1));
console.log(test3);

let test4 = [999, 9999, 99999, 999999];
let test5 = 999;
for (let i = 0; i < test4.length; i++) {
    if (test4[i] == 0) {
        console.log(test4[i]);
    }
}
console.log(test5);

// console.log(String(test3).split(""));

// console.log(Number(test2 + "0"));

// --------------------------------------
// --------------------------------------

// function findReverseNumber(n) {
//     let res = [];

//     for (let i = 0n; i != 10000n; i++) {
//         if (i == String(i).split("").reverse().join("")) {
//             res.push(i);
//         }
//     }

//     //   for (let i = 0n; n > res.length; i++) {
//     //     if (i == String(i).split("").reverse().join("")) {
//     //         res.push(i);
//     //     }
//     // }
//     //   res = res.slice(198)
//     //    for (let i = 0; i < res.length; i++){
//     //      console.log(i, 'res', res[i], res[i+1] - res[i])
//     //    }

//     //   for (let i = 0n; i < 100000000000n; i++){
//     //     console.log(i)
//     //   }

//     let arr2 = [];
//     let number = 10001n;

//     let add0_9 = 100n; //что плюсуем каждую итерацию
//     let add10 = 110n; //каждые 10
//     let addEvery100 = 11n; //каждые 100

//     let mainCount = 1;
//     let count100 = 1;

//     let temp = 1;
//     while (n > arr2.length) {
//         console.log(number);
//         console.log("mainCount", typeof mainCount);
//         console.log("count100", count100);
//         console.log("temp", temp);
//         temp++;
//         arr2.push(number);
//         if (number == 99999 || number == 999999 || number == 9999999 || number == 99999999 || number == 999999999 || number == 9999999999 || number == 99999999999 || number == 999999999999 || number == 9999999999999 || number == 99999999999999 || number == 999999999999999 || number == 9999999999999999 || number == 99999999999999999 || number == 999999999999999999 || number == 9999999999999999999 || number == 99999999999999999999 || number == 999999999999999999999) {
//             //       проверить на четность
//             if (String(number).length % 2 == 0) {
//                 //       +1-9   убрать вторую однерку слева
//                 //       +0 у х10
//                 //       +0 у х100
//                 add0_9 = BigInt(String(add0_9).substring(1) + "0"); //что плюсуем каждую итерацию
//                 add10 = BigInt(add10 + "0"); //каждые 10
//                 addEvery100 = BigInt(addEvery100 + "0");
//                 //           console.log("четное");
//             } else {
//                 //         +1-9   плюс 1 слева
//                 add0_9 = BigInt("1" + add0_9); //что плюсуем каждую итерацию
//                 //           console.log("не четное");
//             }
//             number += 2n;

//             mainCount = 1;
//             count100 = 1;

//             console.log("--");
//             console.log("--");
//             console.log("mainCount", mainCount, typeof mainCount);
//             console.log("number", number);
//             console.log("addEvery100", addEvery100, typeof addEvery100);
//             console.log("add10", add10, typeof add10);
//             console.log("add0_9", add0_9, typeof add0_9);
//             console.log("--");
//             console.log("--");

//             continue;
//         }

//         //     эта часть дл каждых 100
//         if (count100 == 100) {
//             number += addEvery100;
//             mainCount = 1;
//             count100 = 1;
//             continue;
//         }
//         count100 += 1;
//         //     эта часть дл каждых 100

//         if (number == 100001n) {
//             console.log("test");
//         }
//         //     эта часть дл каждых 10
//         if (mainCount != 10) {
//             number += add0_9;
//             mainCount++;
//         } else if (mainCount == 10) {
//             number += add10;
//             mainCount = 1;
//         }

//         //     эта часть дл каждых 10
//     }

//     let res3 = [];
//     res3 = res.concat(arr2);

//     for (let i = 0; i < 10000; i++) {
//         console.log(`i ${i}`, res3[i]);
//     }

//     console.log("res", res3[n - 1]);
//     console.log("ress", res3[200]);
//     return res3[n - 1];
// }
