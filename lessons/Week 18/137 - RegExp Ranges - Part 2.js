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

let testString = "AaBbcdefG123!234%^&*";

let lowercaseLetters = /[a-z]/g;
let nonLowercaseChars = /[^a-z]/g;
let uppercaseLetters = /[A-Z]/g;
let nonUppercaseChars = /[^A-Z]/g;
let specificLetters = /[abc]/g;
let allLetters = /[a-zA-z]/g;
let nonLetterChars = /[^a-zA-z]/g;

// Output
console.log(testString.match(lowercaseLetters));
console.log(testString.match(nonLowercaseChars));
console.log(testString.match(uppercaseLetters));
console.log(testString.match(nonUppercaseChars));
console.log(testString.match(specificLetters));
console.log(testString.match(allLetters));
console.log(testString.match(nonLetterChars));
