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
const dpScore1 = 85;
const dpScore2 = 54;
const dpScore3 = 41;

const koScore1 = 23;
const koScore2 = 34;
const koScore3 = 27;

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const avgDolphins = calcAverage(dpScore1, dpScore2, dpScore3);
const avgKoalas = calcAverage(koScore1, koScore2, koScore3);

function checkWinner (avg1, avg2){
    if (avg1 >= avg2 * 2){
        return `Dolphins win (${avg1} vs ${avg2})`;
    } else if(avg2 >= avg1 * 2) {
        return `Koalas win (${avg2} vs ${avg1})`;
    } else {
        return 'There is no winner!';
    }
}

console.log(`Average Score of Dolphins: ${avgDolphins}
Average Score of Koalas: ${avgKoalas}`);
console.log(checkWinner(avgDolphins, avgKoalas));