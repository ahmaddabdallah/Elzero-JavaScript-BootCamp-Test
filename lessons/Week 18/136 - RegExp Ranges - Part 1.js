/*
    Regular Expression
        Ranges

            - Part 1
                (X|Y) => X Or Y
                [0-9] => 0 To 9
                [^0-9] => Any Character Not 0 To 9
                Practice

            - Part 2
                [a-z]
                [^a-z]
                [A-Z]
                [^A-Z]
                [abc]
                [^abc]

*/

let tld = 'Com Net Org Info Code Io';
let tldReg = /(org|info|io)/gi;
console.log(tld.match(tldReg));

let nums = '12345678910';
let regNums = /[0-2]/gi;
console.log(nums.match(regNums));

let notNums = '12345678910';
let notNumsReg = /[^0-2]/g;
console.log(notNums.match(notNumsReg));

let specialNums = '1!2@3#4$5%678910';
let specialNumsReg = /[^0-9]/g;
console.log(specialNums.match(specialNumsReg));

let practice = 'Os1 Os1Os Os2 Os8 Os8Os';
let practiceReg = /Os[5-9]Os/g;
console.log(practice.match(practiceReg));
