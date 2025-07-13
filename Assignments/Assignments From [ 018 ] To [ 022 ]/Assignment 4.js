let points = 10;

// Write Your Code Here

console.log(++points + (true + true)); // 13

// Write Your Code Here

console.log(--points - (true + true)); // 8;

/* Explanation: */

/*
    1. Convert points (10) to string "10"
    2. Get the length of "10" which is 2
    3. Increment the length to 3 (++2)
    4. Add 3 to the current points value (10 + 3 = 13)
    5. Store the result back in points variable
*/

points += ++points.toString().length;
console.log(points); // Output => 13

// Write Your Code Here
points -= ++points.toString().length + points.toString().length;
console.log(points); // Output => 8
