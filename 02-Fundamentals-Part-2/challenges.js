"use strict";

// let test = 2.463473453
// test.toFixed(1); // '2.4'

// task 01

// data1
// let dolphinsScores = [44, 23, 71];
// let koalasScores = [65, 54, 49];

// data2
let dolphinsScores = [85, 54, 41];
let koalasScores = [23, 34, 27];

let calcAverage = (arrScores) => {
  let all = 0;
  for (let i = 0; i < arrScores.length; i++) {
    all += arrScores[i];
  }
  // console.log(all);
  // console.log(all/arrScores.length);
  return all / arrScores.length;
};

let dolphinsAverage = calcAverage(dolphinsScores);
let koalasAverage = calcAverage(koalasScores);

// checkWinner(dolphinsAverage, koalasAverage);

// function checkWinner(avgDolhins, avgKoalas){
//     if (avgDolhins/2 >= avgKoalas){
//         console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
//     } else if (avgKoalas/2 >= avgDolhins){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     }else{
//         console.log('no winners');
//     }
// }

// ----------------------------------------------------

// task 02

// let bills = [125, 555, 44]
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++){
//     calcTip(bills[i]);
// }

function calcTip(bill) {
  let tip = (bill / 100) * (bill <= 300 && bill >= 50 ? 15 : 20);
  tips.push(tip);
  totals.push(bill + tip);
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

// console.log(bills);
// console.log(tips);
// console.log(total);

// ----------------------------------------------------

// task 03

// let mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     weight: 78,
//     tall: 1.69,
//     indexBMI: 0,
//     calcBMI: function(){
//         this.indexBMI = Number((this.weight / this.tall ** 2).toFixed(1));
//         return this.indexBMI;
//     },
// }
// console.log(mark.calcBMI());
// console.log(mark);

// let john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     weight: 92,
//     tall: 1.95,
//     indexBMI: 0,
//     calcBMI: function(){
//         this.indexBMI = Number((this.weight / this.tall ** 2).toFixed(1));
//         return this.indexBMI;
//     },
//     room_reference: function(){
//         alert('What a story, Mark?');
//         return 'What a story, Mark?';
//     },
// }

// compareBMI(mark, john);
// function compareBMI(mark, john){
//     mark.calcBMI();
//     john.calcBMI();
//     if (mark.indexBMI > john.indexBMI){
//         console.log(`Mark's BMI (${mark.indexBMI}) is higher than John's (${john.indexBMI})!`)
//     }else if(mark.indexBMI < john.indexBMI){
//         console.log(`John's BMI (${john.indexBMI}) is higher than Mark's (${mark.indexBMI})!`)
//     }else{
//         console.log(`John's BMI (${john.indexBMI}) is equal Mark's (${mark.indexBMI})!`)
//     }
// }

// ----------------------------------------------------

// task 04

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

// for (let i = 0; i < bills.length; i++){
//     calcTip(bills[i]);
// }

// console.log(bills);
// console.log(tips);
// console.log(totals);

let avgBills = calcAverage1(bills);
let avgTips = calcAverage1(tips);
let avgTotals = calcAverage1(totals);

// console.log(avgBills);
// console.log(avgTips);
// console.log(avgTotals);

function calcAverage1(arr) {
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
}

//
//
//
//
//
