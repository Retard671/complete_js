// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// console.log(temperature);

for (let i = 0; i < temperature.length; i++) {
  // console.log(typeof temperature[i], temperature[i]);
  if (typeof temperature[i] !== "number") {
    temperature.splice(i, 1);
  }
}
// console.log(temperature);
// console.log(Math.max(...temperature));
// console.log(Math.min(...temperature));
let tmax = Math.max(...temperature);
let tmin = Math.min(...temperature);
// if (tmax < 0 ) {
//   tmax *= -1
// }

let averAge = Math.max(...temperature) - Math.min(...temperature);
// console.log(averAge);
//

// alert("test");
// console.warn("test");

//-------------------------------------------------------------
// task01
let testData1 = [17, 21, 23];
let testData2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let res = "...";
  for (let i = 0; i < arr.length; i++) {
    res += `${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log(res);
}
// printForecast(testData1);
printForecast(testData2);

//
//
//
//
//
//
//
//
//
