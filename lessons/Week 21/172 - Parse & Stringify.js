/*
    JSON
        - JSON.parse => Convert Text Data To JS Object
        - JSON.stringify => Convert JS Object To JSON
*/

// NOTE: Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// TODO: Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// IDEA: Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// HACK: Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
