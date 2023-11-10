// This program stores the names of two people in variables and prints the names in lowercase, uppercase, and titlecase.

const personName1: string = "Umar";
const personName2: string = "Riaz";


//Lowercase
console.log(personName1.toLowerCase());
console.log(personName2.toLowerCase());

//Uppercase
console.log(personName1.toUpperCase());
console.log(personName2.toUpperCase());

//Titlecase
const titlecaseName1 = personName1.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.substr(1).toLowerCase());
const titlecaseName2 = personName2.replace(/\w\S*/g, (txt) => txt[0].toUpperCase() + txt.substr(1).toLowerCase());
console.log(titlecaseName1);
console.log(titlecaseName2);