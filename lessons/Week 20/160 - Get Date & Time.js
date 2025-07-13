/*
    Date And Time
        - getTime() => Number Of Milliseconds
        - getDate() => Day Of The Month
        - getFullYear()
        - getMonth() => Zero Based
        - getDay() => Day Of The Week
        - getHours()
        - getMinutes()
        - getSeconds()
*/

let dateNow = new Date();
let birthday = new Date('June 06, 2008');
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);
console.log(
  `My Birthday Is : ${Math.round(dateDiff / 1000 / 60 / 60 / 24 / 365)}`
);

console.log(`Current Date: ${dateNow}`);
console.log(`Time in milliseconds: ${dateNow.getTime()}`);
console.log(`Day of month: ${dateNow.getDate()}`);
console.log(`Year: ${dateNow.getFullYear()}`);
console.log(`Month: ${dateNow.getMonth()}`);
console.log(`Day of week: ${dateNow.getDay()}`);
console.log(`Hours: ${dateNow.getHours()}`);
console.log(`Minutes: ${dateNow.getMinutes()}`);
console.log(`Seconds: ${dateNow.getSeconds()}`);
