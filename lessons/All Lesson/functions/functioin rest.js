/*
    Function
    - Rest Parameters
    - Only One Allowed
    - Must Be Last Element
*/

function calculate(...numbers) {
    let result = 0;
    for(let i = 0; i < numbers.length; i++){
        result += numbers[i];
    }
    return `Final result Is : ${result}`;
}

console.log(calculate(10 , 34, 53 ,343 ,3430));

