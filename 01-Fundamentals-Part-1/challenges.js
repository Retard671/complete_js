// 01-02(1)

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let BMIMark = BMI(massMark, heightMark);
// let BMIJohn = BMI(massJohn, heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else{
//     console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// }

// 01-02(2)

// let massMark = 95;
// let heightMark = 1.88;
// let massJohn = 85;
// let heightJohn = 1.76;

// let BMIMark = BMI(massMark, heightMark);
// let BMIJohn = BMI(massJohn, heightJohn);
// console.log(BMIMark);
// console.log(BMIJohn);

// if (BMIMark > BMIJohn){
//     console.log(`Mark's BMI (${BMIMark.toFixed(1)}) is higher than John's (${BMIJohn.toFixed(1)})!`);
// } else{
//     console.log(`John's BMI (${BMIJohn.toFixed(1)}) is higher than Mark's (${BMIMark.toFixed(1)})!`);
// }


// function BMI (mass, height){
//     return mass / height ** 2;
// }


// 03.1
// let dolphins = [96, 108, 89];
// let koalas  = [88, 91, 110];
// let dolphinsAverage = (dolphins[0] + dolphins[1] + dolphins[2])/3;
// let koalasAverage = (koalas[0] + koalas[1] + koalas[2])/3;

// if (dolphinsAverage === koalasAverage){
//     console.log('Tire');
// }else if(dolphinsAverage > koalasAverage){
//     console.log('dolphins win');
// }else if(dolphinsAverage < koalasAverage){
//     console.log('koalas win');
// }
// console.log(dolphinsAverage);
// console.log(koalasAverage);

// 03.2 03.3

// let dolphins = [97, 112, 101]; //03.2
// let koalas  = [109, 95, 123];
// let dolphins = [97, 112, 101];  // 03.3
// let koalas  = [109, 95, 106];


// let dolphinsAverage = (dolphins[0] + dolphins[1] + dolphins[2])/3;
// let koalasAverage = (koalas[0] + koalas[1] + koalas[2])/3;


// if ((dolphinsAverage === koalasAverage)&&(koalasAverage >= 100)){
//     console.log('Tire');
// }else if((dolphinsAverage > koalasAverage)&&(dolphinsAverage >= 100)){
//     console.log('dolphins win');
// }else if((dolphinsAverage < koalasAverage)&&(koalasAverage >= 100)){
//     console.log('koalas win');
// }else{
//     console.log('no winners');
// }
// console.log(dolphinsAverage);
// console.log(koalasAverage);


//04

let billValues = [275, 40, 430];
let bill = billValues[0]

let tip = (bill/100) * (bill <= 300 && bill >= 50 ? 15 : 20);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);









