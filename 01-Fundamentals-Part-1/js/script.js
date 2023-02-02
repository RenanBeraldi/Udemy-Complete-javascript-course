// //////////////////////////
// // Values and Variables
// //////////////////////////


// //////////////////////////
// // Values
// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('Renan');
// console.log(21);


// //////////////////////////
// // Variables
// // camelCase notation for naming variables:
// let firstName = 'Renan';
// let first = 'Renan';
// let firstNamePerson;
// let first_name;

// let person;
// let PI = 3.1415;

// // CLEAR NAMES TO VARIABLES
// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'Programmer';
// let job2 = 'Teacher';   

// // NOT ALLOWED:
// // jonas&matilda
// let jonas_matilda = 'JM';

// // function (JS Keyword)
// let _function = 27;

// console.log(firstName);





// //////////////////////////
// // DATA TYPES
// //////////////////////////

// // BOOLEAN
// let javascriptIsFun = true;
// console.log(javascriptIsFun);


// // UNDEFINED
// let year;
// console.log(year);
// console.log(typeof year)
// // an undefined variable can be reassigned
// year = 1991;
// console.log(year);
// console.log(typeof year)


// // OPERATOR typeof
// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Renan');


// // DYNAMIC TYPING
// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun)





// //////////////////////////
// // LET, CONST and VAR
// //////////////////////////

// // LET
// // can be changed in the future
// let age = 30;
// age = 31;


// // CONST
// // cannot be changed in the future
// const birthYear = 1991;
// // birthYear = 1990;
// // const job;


// // VAR
// // can be changed in the future
// var job = 'programmer';
// job = 'teacher';





//////////////////////////
// BASIC OPERATOR
//////////////////////////

// Math operators 
// const now = 2037;
// const ageRenan = now - 2002;
// const ageSarah = now - 2020;
// console.log(ageRenan, ageSarah)

// console.log(ageRenan * 2, 
//     ageRenan / 10,  
//     2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Renan';
// const lastName = 'Beraldi'
// console.log(firstName + ' ' + lastName);


// // Assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--;
// x--; // x = x - 1 = 99
// console.log(x);


// // Comparison operators
// // >, <, <=, >=
// console.log(ageRenan > ageSarah);
// const isFullAge = ageSarah >= 18;
// console.log(isFullAge);

// console.log(now - 2002 > now - 2018);





//////////////////////////
// OPERATOR PRECEDENCE
//////////////////////////
// const now = 2037;
// const ageRenan = now - 2002;
// const ageSarah = now - 2020;

// console.log(now - 2002 > now - 2018);

// let x, y;
// x = y = 25-10-5;
// console.log(x, y);


// const averageAge = (ageRenan + ageSarah) / 2;
// console.log(ageRenan, ageSarah, averageAge);





//////////////////////////
// CODING CHALLENGE #1
//////////////////////////
// const markHeight = 1.88;
// const markWeight = 95;
// const markBMI = markWeight / (markHeight**2);

// const johnHeight = 1.76;
// const johnWeight = 85;
// const johnBMI = johnWeight / (johnHeight**2);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);





//////////////////////////
// STRINGS and TEMPLATES LITERALS
//////////////////////////

// const firstName = 'Renan';
// const job = 'Programmer';
// const birthYear = 2002;
// const year = 2023;

// const user = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(user);

// const newUser = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(newUser);

// console.log(`Just a regular string`);

// // If wanted a multiline before ES6
// console.log('String with \n\
// multiple \n\
// lines');

// // And now
// console.log(`String with
// multiple
// lines`);





//////////////////////////
// IF / ELSE
//////////////////////////
// const age = 15;
// const isOldEnough = age >= 18;
// if(isOldEnough){
//     console.log("You're able to take your drivers license!");
// } else{
//     const yearsLeft = 18-age;
//     console.log(`You're too young. Wait more ${yearsLeft} years`);
// };


// const birthYear = 2002;
// let century;
// if (birthYear >= 2001){
//     century = 21;
// } else{
//     century = 20;
// };





//////////////////////////
// CODING CHALLENGE #2
//////////////////////////
// const markHeight = 1.88;
// const markWeight = 95;
// const markBMI = markWeight / (markHeight**2);

// const johnHeight = 1.76;
// const johnWeight = 85;
// const johnBMI = johnWeight / (johnHeight**2);

// const markHigherBMI = markBMI > johnBMI;
// const markHigherMSG = `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`;

// const johnHigherBMI = johnBMI > markBMI;
// const johnHigherMSG = `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`;

// if(markHigherBMI){
//     console.log(markHigherMSG);
// } else if (johnHigherBMI){
//     console.log(johnHigherMSG);
// } else{
//     console.log(`An inexpected error has been occurred!!!`)
// };





//////////////////////////
// TYPE CONVERSION AND COERCION
//////////////////////////

// MANUAL CONVERSION
// Function Number()
// const inputYear = "1991";
// console.log(Number(inputYear));

// console.log(Number("Renan")); // NaN Value

// // Function String()
// console.log(String(23))


// // AUTOMATIC COERCION
// console.log('I am ' + 23 + ' years old');
// console.log('I am ' + String(23) + ' years old');

// console.log('23'-'10'-3);

// let n = '1' + 1;
// n = n - 1;
// console.log(n);





//////////////////////////
// TRUTHY AND FALSY VALUES
//////////////////////////

// 5 falsy values: 
// 0, '', Undefined, Null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if(money){
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }


// let height = 1.72;
// if(height){
//     console.log("Height is defined");
// } else {
//     console.log("Height is UNDEFINED");
// }





//////////////////////////
// Equality Operators: == vs. ===
//////////////////////////
// const age = 18;
// if (age === 18){
//     console.log("You just became an adult (strict)")
// }

// if (age == 18){
//     console.log("You just became an adult (loose)")
// }

// const favourite = Number(prompt("What's your favorite number?"));
// console.log(favourite);
// console.log(typeof favourite)

// if(favourite === 23){ 
//     console.log("Cool 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else if (favourite === 9) {
//     console.log("9 is also a cool number");
// } else {
//     console.log("Number is not 23, 7 or 9");
// }

// if(favourite !== 23){
//     console.log("Why not 23?");
// }





