"use strict";

let country = "Russia";
const continent = "Eurasia";
let population = 144;
const isIsland = false;
let language = "ru";

// ----------------------------------------------------

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
// let describeCountry1 = describeCountry ('country1', 'population1', 'capitalCity1');
// let describeCountry2 = describeCountry ('country2', 'population2', 'capitalCity2');
// let describeCountry3 = describeCountry ('country3', 'population3', 'capitalCity3');

// console.log(describeCountry1);
// console.log(describeCountry2);
// console.log(describeCountry3);

// ----------------------------------------------------

// function checkAge1(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// // Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// // Сделайте два варианта функции checkAge:

// // Используя оператор ?
// // Используя оператор ||
// let age = 17;
// console.log(checkAge(age));

// function checkAge0(age) {
//     let temp = age > 18 ? true : confirm('Родители разрешили?');
//     return temp;
// }
// function checkAge(age) {
//     let temp = age > 18 ? true : confirm('Родители разрешили?');
//     return temp;
// }

// ----------------------------------------------------

function percentageOfWorld1(population) {
  let temp = (population / 7900) * 100;
  return temp.toFixed(1);
}
// console.log(percentageOfWorld1(population));
// console.log(percentageOfWorld1(1441));

// let percentageOfWorld2 = function(population){
//   let temp = population / 7900 * 100
//   return temp.toFixed(1);
// }
// console.log(percentageOfWorld2(7900));
// console.log(percentageOfWorld2(population));
// console.log(percentageOfWorld2(1441));

// let percentageOfWorld3 = population =>{
//   let temp = population / 7900 * 100
//   return temp.toFixed(1);
// }
// console.log(percentageOfWorld3(7900));
// console.log(percentageOfWorld3(population));
// console.log(percentageOfWorld3(1441));

// ----------------------------------------------------
function describePopulation(country, population) {
  let percent = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percent}% of the world`;
}

// console.log(describePopulation('all', 7900));
// console.log(describePopulation(country, population));
// console.log(describePopulation('China', 1441));

// ----------------------------------------------------
// рф фр укр юса
let populations = [144, 67, 44, 329];

// console.log(populations.lingth === 4)

// for (let i = 0; i < populations.length; i++){
//   console.log(percentageOfWorld1(populations[i]))
// }

// ----------------------------------------------------
// let neighboursPopulations = [5, 1, 1, 9, 44, 3]
// let neighbours = ['Finland','Estonia', 'Latvia', 'Belarus', 'Ukraine', 'Georgia',]
// console.log(neighbours);
// neighbours.push('Utopia');
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);

// console.log(neighbours.indexOf('Germany') == -1);
// if (neighbours.indexOf('Germany') == -1){
//   console.log('Probably not a central European country');
// }else{
//   console.log('central European country');
// }
// console.log(neighbours.indexOf('Latvia'));

// neighbours[neighbours.indexOf('Latvia')] = 'Litva'
// console.log(neighbours);

// ---------------------------------------------------

// let userinfo = {
//   name: 'test',
//   age: 26,
// }
// delete userinfo.age;
// console.log(userinfo);

// ---------------------------------------------------

let myCountry = {
  country: "Russia",
  capital: "Moscow",
  language: "ru",
  population: 144,
  neighbours: ["Finland", "Estonia", "Latvia", "Belarus", "Ukraine", "Georgia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours === 0 ? true : false;
    console.log(this.isIsland);
  },
};
// myCountry.checkIsland();
// myCountry.describe();

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people,
// ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry['population'] -= 2;
// console.log(myCountry.population);

// ---------------------------------------------------
// 'Jonas has 3 friends, and his best friend is called Michael'
// 'Jonas is a 46 year old teacher, fnd he had driver license'
// let jonas = {
//   fName: 'Jonas',
//   lName: 'Schmedtmann',
//   birthYear: '1991',
//   age: 30,
//   job: 'teacher',
//   friends: ['Michael', 'test1', 'test2'],
//   hasDriverLicense: true,
//   calcAge: function (){
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   }
// }
// console.log(`${jonas.fName} is a ${jonas.age} year old ${jonas.job},
// and he ${jonas.hasDriverLicense?'has':'has not'} a driver license`);

// console.log(`${jonas.fName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// ---------------------------------------------------

// let percentages2 = [];

// for(let i = 0; i < populations.length; i++){
//   percentages2[i] = percentageOfWorld1(populations[i]);
// }
// console.log(percentages2);
// console.log(populations);

// ---------------------------------------------------

// let listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// for(let i = 0; i < listOfNeighbours.length; i++){
//   for(let j = 0; j < listOfNeighbours[i].length; j++){
//     console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
//   }
// }

// ---------------------------------------------------

// let percentages3 = [];

// let i = 0;
// while (i < populations.length){
//   percentages3[i] = percentageOfWorld1(populations[i]);
//   i++
// }

// console.log(percentages3);
// console.log(populations);

// ---------------------------------------------------
