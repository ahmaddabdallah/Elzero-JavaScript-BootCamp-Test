/*
    Date And Time
        - Track Operations Time

        Search
        - performance.now()
        - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
for (let i = 0; i < 10000; i++) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);
