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

//ARROW FUNCTION
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2002);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years!`;
}

console.log(yearsUntilRetirement(2002, "Renan"));