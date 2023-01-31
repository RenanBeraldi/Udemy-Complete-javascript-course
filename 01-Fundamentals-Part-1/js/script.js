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