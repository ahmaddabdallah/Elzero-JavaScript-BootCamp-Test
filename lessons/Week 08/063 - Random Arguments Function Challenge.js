/*
    Function - Random Argument Challenge
    ====================================
    
    This challenge requires you to:
    
    1. Create a function called showDetails (or checkStatus as used in the examples)
    2. The function should accept 3 parameters [a, b, c]
    3. Each parameter can be one of three data types:
        - String: representing a person's name
        - Number: representing a person's age
        - Boolean: representing employment status (true = available, false = not available)
    
    4. The tricky part is that these arguments can be passed in any order!
        For example, the name could be the first, second, or third parameter.
    
    5. Your task is to:
        - Determine which parameter is which data type
        - Format a message with the correct information
        - Return a string like: "Hello [NAME], Your Age Is [AGE], You Are [STATUS]"
        - Where [STATUS] is "Available For Hire" or "Not Available For Hire"
    
    6. You should use ternary conditional operators where appropriate
    
    Think about how you can check the data type of each parameter and
    assign the values to the correct variables before creating your output string.
*/

function checkStatus(a, b, c) {
  let emptyArray = [a, b, c];
  for (let i = 0; i < emptyArray.length; i++) {
    typeof emptyArray[i] === 'string'
      ? (userName = emptyArray[i])
      : typeof emptyArray[i] === 'number'
      ? (age = emptyArray[i])
      : (avilable = emptyArray[i]);
  }
  let availableState =
    avilable === true
      ? 'You are available for hiring'
      : 'You are not available for hiring';
  return `Hello ${userName} , Age is : ${age} , ${availableState}`;
}

console.log(checkStatus('Philo', 16, true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"

console.log(checkStatus(16, 'Philo', true)); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(true, 16, 'Philo')); // Output => "Hello Philo, Your Age Is 16, You Are Available For Hire"
console.log(checkStatus(false, 'Philo', 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
console.log(checkStatus('Philo', false, 16)); // Output => "Hello Philo, Your Age Is 16, You Are Not Available For Hire"
