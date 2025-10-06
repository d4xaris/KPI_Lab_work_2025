// Ідентифікатори

let userName = "Katy";
const birthDate = 2008;
function greeting(userName) {
  console.log(`Hello ${userName}, ${birthDate}`);
}
greeting(userName);

/* Або задати стрілкову функцію: 
const greeting = (userName) => (`Hello ${userName}, ${birthDate}`);
console.log(greeting(userName)); */
