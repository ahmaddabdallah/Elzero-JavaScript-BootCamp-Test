// Test Case 1
let num = 105; // "009"

if (num <= 9) {
    console.log(`00${num}`);
}

else if (num > 10 && num <= 100) {
    console.log(`0${num}`);
}

else if (num >= 100) {
    console.log(`${num}`);
}

num <= 9
    ?console.log(`00${num}`)
    : num > 10 && num <= 100
    ? console.log(`0${num}`)
    : console.log(num);


    let num1 = 9;
    let str = "9";
    let str2 = "20";

// Output
"{num1} Is The Same Value As {str}"
"{num1} Is The Same Value As {str} But Not The Same Type"
"{num1} Is Not The Same Value Or The Same Type As {str2}"
"{str} Is The Same Type As {str2} But Not The Same Value"

if (num1 == str) {
    console.log(`${num1} Is The Same Value As ${str}`);
}
else{
    console.log("false")
}

if (num1 === str) {
    console.log("{num1} Is The Same Value As {str} But Not The Same Type")
}
else{
    console.log("false")
}


if (num1 === str2) {
    console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2}`);
}
else{
    console.log("false")
}
