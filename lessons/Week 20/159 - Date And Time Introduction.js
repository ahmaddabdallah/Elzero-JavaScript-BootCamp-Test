/*
    Date And Time
        - Date Constructor

        Static Methods
            - Date.now()
                - To Track Time You Need Starting Point
                - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
                - Why 1970 [829 Days To 136 Years]

        Search For
            - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

// Display current date and time
console.log(dateNow);

// Get current timestamp in milliseconds
console.log(Date.now());

// Get date components
console.log(`Year: ${dateNow.getFullYear()}`);
console.log(`Month: ${dateNow.getMonth() + 1}`); // Adding 1 since months are 0-based
console.log(`Day of month: ${dateNow.getDate()}`);
console.log(`Day of week: ${dateNow.getDay()}`);
console.log(`Hours: ${dateNow.getHours()}`);
console.log(`Minutes: ${dateNow.getMinutes()}`);
