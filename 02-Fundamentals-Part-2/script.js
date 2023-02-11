//////////////////////////
// STRICT MODE 
//////////////////////////
// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("You can drive");

// const interface = 'Audio';
// const private = 534;





//////////////////////////
// FUNCTION
//////////////////////////
// function logger(){
//     console.log("My name is Renan");
// }

// // calling / running / involking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// // console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice); 





//////////////////////////
// FUNCTION DECLARATIONS VS. EXPRESSIONS
//////////////////////////
// function calcAge1(birthYear){ //DECLARATION
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(2002);


// const calcAge2 = function (birthYear){ //EXPRESSION
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(2002);
// console.log(`This is variable 'age1': ${age1} and this is 'age2': ${age2}`);





//////////////////////////
// ARROW FUNCTIONS
//////////////////////////
// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years!`;
// }

// console.log(yearsUntilRetirement(2002, "Renan"));





//////////////////////////
// FUNCTIONS CALLING OTHER FUNCTIONS
//////////////////////////
// function cutFruitPieces(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2, 3));





//////////////////////////
// REVIEWING FUNCTIONS
//////////////////////////
// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }  

// const yearsUntilRetirement = function (birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years!`);
//         return retirement;
//     } else{
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
//     // 
// }

// console.log(yearsUntilRetirement(2002, "Renan"));
// console.log(yearsUntilRetirement(1950, "Mike"));





//////////////////////////
// CODING CHALLENGE #1
//////////////////////////
// const dpScore1 = 85;
// const dpScore2 = 54;
// const dpScore3 = 41;

// const koScore1 = 23;
// const koScore2 = 34;
// const koScore3 = 27;

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// const avgDolphins = calcAverage(dpScore1, dpScore2, dpScore3);
// const avgKoalas = calcAverage(koScore1, koScore2, koScore3);

// function checkWinner (avg1, avg2){
//     if (avg1 >= avg2 * 2){
//         return `Dolphins win (${avg1} vs ${avg2})`;
//     } else if(avg2 >= avg1 * 2) {
//         return `Koalas win (${avg2} vs ${avg1})`;
//     } else {
//         return 'There is no winner!';
//     }
// }

// console.log(`Average Score of Dolphins: ${avgDolphins}
// Average Score of Koalas: ${avgKoalas}`);
// console.log(checkWinner(avgDolphins, avgKoalas));





//////////////////////////
// INTRODUCTION TO ARRAYS
//////////////////////////
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2023);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length -1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ["Bob", "Alice"];

// const firstName = "Renan"
// const lastName = "Beraldi"
// const birthYear = 2002;
// const currentYear = new Date().getFullYear();

// const renan = [firstName, lastName, currentYear - birthYear, "Programmer", friends]
// console.log(renan);
// console.log(renan.length);

// // EXERCISE
// const calcAge = function(birthYear){
//     return 2023 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[1]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[1]), calcAge(years[2]), calcAge(years[years.length -1])];
// console.log(ages);





//////////////////////////
// BASIC ARRAY OPERATIONS (METHODS)
//////////////////////////
// const friends = ["Michael", "Steven", "Peter"];

// // ADD ELEMENTS
// const newLength = friends.push("Jay"); //Last element
// console.log(friends);
// console.log(newLength);

// friends.unshift("John"); //First element
// console.log(friends);

// // REMOVE ELEMENTS
// friends.pop(); //Last element
// const popped = friends.pop();
// console.log(friends); 
// console.log(popped);    

// friends.shift(); //First element
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));

// if (friends.includes("Steven")) {
//     console.log("You have a friend called Steven");
// }





//////////////////////////
// CODING CHALLENGE 2
//////////////////////////
// const bills = [125, 555, 44];
// function calcTip(billValue){
//     if(billValue >= 50 && billValue <= 300){
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.2;
//     }
// }
// const tip = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
// ];

// const total = [
//     bills[0] + tip[0],
//     bills[1] + tip[1],
//     bills[2] + tip[2]];

// console.log(`The first bill and the tip is US$${bills[0]}, US$${tip[0]} with the total of US$${total[0]}`);
// console.log(`The seccond bill and the tip is US$${bills[1]}, US$${tip[1]} with the total of US$${total[1]}`);
// console.log(`The third bill and the tip is US$${bills[2]}, US$${tip[2]} with the total of US$${total[2]}`);





//////////////////////////
// INTRODUCTION TO OBJECTS
//////////////////////////
// const renanArray = [
//     "Renan",
//     "Beraldi",
//     2023 - 2022,
//     "Programmer"
//     ["Michael", "Peter", "Steven"]
// ];

// const renan = {
//     firstName: "Renan",
//     lastName: "Beraldi",
//     age: 2023 - 2002,
//     job: "Programmer",
//     friends: ["Michael", "Peter", "Steven"]
// };





//////////////////////////
// DOT VS BRACKET NOTATION
//////////////////////////
// const renan = {
//     firstName: "Renan",
//     lastName: "Beraldi",
//     age: 2023 - 2002,
//     job: "Programmer",
//     friends: ["Michael", "Peter", "Steven"]
// };

// console.log(renan.lastName);
// console.log(renan["lastName"]);

// const nameKey = "Name";
// console.log(renan["first" + nameKey]);
// console.log(renan["last" + nameKey]);

// // console.log(renan."first" + nameKey);

// // const interestedIn = prompt("What do you want to know about Renan? Choose between firstName, lastName, age, job, and friends");

// // if (renan[interestedIn]){
// //     console.log(renan[interestedIn]);
// // } else {
// //     console.log(`There ins't a property called ${interestedIn}! Choose between firstName, lastName, age, job, and friends`);
// // }


// renan.location = "Sao Paulo";
// renan['twitter'] = "@renanberaldi_"
// console.log(renan);

// // CHALLENGE
// // Renan has 3 friends, and his best friend is called Michael
// console.log(`${renan.firstName} has ${renan.friends.length} friends, and his best friend is called ${renan.friends[0]}`);





//////////////////////////
// OBJECT METHODS
//////////////////////////
// const renan = {
//     firstName: "Renan",
//     lastName: "Beraldi",
//     birthYear: 2002,
//     job: "Programmer",
//     friends: ["Michael", "Peter", "Steven"],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2023 - birthYear;
//     // }

//     // calcAge: function(){
//     //     return 2023 - this.birthYear;
//     // }

//     calcAge: function(){
//         this.age = 2023 - this.birthYear
//         return this.age;
//     },

//     getSummary: function(){
//         return `${this.firstName}, is a ${this.calcAge()} years old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`
//     }
// };

// console.log(renan.calcAge());

// console.log(renan.age);
// console.log(renan.age);
// console.log(renan.age);
// // console.log(renan["calcAge"](renan.birthYear));

// // CHALLENGE
// // "Jonas is a 46 years old teacher, and he has a drivers license"
// console.log(renan.getSummary());





//////////////////////////
// CODING CHALLENGE 3
//////////////////////////
// const mark = {
//     fullName: "Mark Miller",
//     weight: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.weight / (this.height**2);
//         return this.bmi;
//     }
// };
// const john = {
//     fullName: "John Smith",
//     weight: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.weight / (this.height**2);
//         return this.bmi;
//     }
// };
// function biggerBMI(name1, bmi1, name2, bmi2){
//     name1 = mark.fullName;
//     bmi1 = mark.calcBMI();

//     name2 = john.fullName;
//     bmi2 = john.calcBMI();
//     if (bmi1 > bmi2){
//         return `${name1}'s BMI (${bmi1}) is bigger than ${name2}'s BMI (${bmi2})`;
//     } else {
//         return `${name2}'s BMI (${bmi2}) is bigger than ${name2}'s BMI (${bmi2})`;
//     }
// }
// console.log(biggerBMI());





//////////////////////////
// ITERATION: THE LOOP FOR
//////////////////////////
// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");
// console.log("Lifting weights repetition 5");
// console.log("Lifting weights repetition 6");
// console.log("Lifting weights repetition 7");
// console.log("Lifting weights repetition 8");
// console.log("Lifting weights repetition 9");
// console.log("Lifting weights repetition 10");

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }





//////////////////////////
// LOOPING ARRAYS, BREAKING AND CONTINUING
//////////////////////////
// const renan = [
//     "Renan",
//     "Beraldi",
//     2023 - 2002,
//     "Programmer",
//     ["Michael", "Peter", "Steven"],
//     true
// ];

// const types = [];

// for(let i = 0; i < renan.length ; i++){
//     // reading renan array
//     console.log(renan[i], typeof renan[i]);

//     // filling types array
//     // types[i] = typeof renan[i];
//     types.push(typeof renan[i])
// }
// console.log(types);

// const years = [
//     1991,
//     2007,
//     1969,
//     2020
// ]
// const ages = [];

// for(let i = 0; i < years.length; i++){
//     const currentYear = new Date().getFullYear();
//     ages.push( currentYear - years[i]);
// }
// console.log(ages); 

// // continue and break statement

// // continue
// for(let i = 0; i < renan.length ; i++){
//     if (typeof renan[i] !== "string"){
//         continue;
//     }
//     console.log(renan[i], typeof renan[i]);
// } 

// // break
// for(let i = 0; i < renan.length ; i++){
//     if (typeof renan[i] === "number"){
//         break;
//     }
//     console.log(renan[i], typeof renan[i]);
// } 





//////////////////////////
// LOOPING BACKWARDS AND LOOPS IN LOOPS
//////////////////////////
// const renan = [
//     "Renan",
//     "Beraldi",
//     2023 - 2002,
//     "Programmer",
//     ["Michael", "Peter", "Steven"]
// ];

// for(let i = renan.length -1; i >= 0; i--){
//     console.log(i, renan[i]);
// }

// for(let ex = 1; ex <= 3; ex++){
//     console.log(`Starting exercise N${ex}`);
//     for(let rep = 1; rep <= 5; rep++){
//         console.log(`Repetition ${rep}`);
//     }
// }





//////////////////////////
// THE WHILE LOOP
//////////////////////////
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while(rep <= 10){
    // console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6){
        console.log(`Loop is about to end`);
    }
}   