console.log("------ First Assignment ------")
function sayHello(theName, theGender) {
    if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`)
    }
    else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`)
    }
    else {
    console.log(`Hello ${theName}`)
    }
}
// Needed Output  
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
console.log("------ Second Assignment ------")
    // Second Assignment
    function calculate(firstNum, secondNum, operation) {
        if (operation == "add" || operation == "+") {
            result = firstNum + secondNum  
            }
            else if (operation == "subtract" || operation == "-") {
                result = firstNum - secondNum
            }
            else if (operation == "multiply" || operation == "*") {
                result = firstNum * secondNum
            }
            else if (operation === undefined ) {
                result = firstNum + secondNum 
            }

            if (secondNum === undefined && operation === undefined) {
                console.log("Second number is not found")
            }
            console.log(result)
        }

        // Needed Output
        calculate(20); // Second Number Not Found
        calculate(20, 30); // 50
        calculate(20, 30, 'add'); // 50
        calculate(20, 30, 'subtract'); // -10
        calculate(20, 30, 'multiply'); // 600

        console.log("------ Third Assignment ------")
        // third Assignment
        function ageInTime(age) {
            if (age >= 10 && age <= 100) {
        let months = age * 12;
        let weeks = age * 12 * 7;
        let days = age * 12 * 4 * 7;
        let Hour = age * 12 * 4 * 7 * 24;
        let Minuets = age * 12 * 4 * 7 * 24 * 60;
        let second = age * 12 * 4 * 7 * 24 * 60 * 3600;
        console.log(`The age ${age} is equal to ${months} months.`);
        console.log(`The age ${age} is equal to ${weeks} weeks.`);
        console.log(`The age ${age} is equal to ${days} days.`);
        console.log(`The age ${age} is equal to ${Hour} Hours.`);
        console.log(`The age ${age} is equal to ${Minuets} Minutes.`);
        console.log(`The age ${age} is equal to ${second} second.`);

    }
    else {
        console.log("Age Out Of Range");
        return;
    }
}

  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months

console.log("------ fourth Assignment ------")
  // Assignment five

    function checkStatus(a, b, c) {
        let empty = []
        empty.push(a , b ,c)
        for (let i = 0; i < empty.length; i++) {
        if (typeof empty[i] == "string") {
            user = empty[i] 
        }
        else if (typeof empty[i] == "number") {
            age = empty[i]
    }
    else if (typeof empty[i] == "boolean") {
            bool = empty[i]
            if (bool == true) {
                bool = "Your are Available for Hire."
            }
            else {
                bool = "Your are Not Available For Hire."
            }
        }
    }
    console.log(`Hello ${user} and your Age Is: ${age} , ${bool}`)
}

  // Needed Output
    checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
    checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
    
    // console.log("------ fifth Assignment ------")
    
    function createSelectBox(startYear, endYear) {
        document.write(`<select> Choose the correct year`)
        for (let i = startYear; i <= endYear; i++) {
            document.write(`<option value="${i}">${i}</option>`)
        }
        document.write(`</select`)
    }
    createSelectBox(1920, 2010);

    console.log("------ Sixth Assignment ------")
    // Assignment sex

    function multiply(...number) {
        let result = 1;
        for (let i = 0; i < number.length; i++) {
            if (typeof number[i] === 'number') {
                result *= parseInt(number[i]);
            }
            else if (typeof number[i] === 'string') {
                continue;
            }
        }

        console.log(result);
    }

    multiply(10, 20); // 200
    multiply("A", 10, 30); // 300
    multiply(100.5, 10, "B"); // 1000