/*
    Await
        - Await Works Only Inside Asnyc Functions
        - Await Make JavaScript Wait For The Promise Result
        - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('I am A Good Promise !');
  }, 2000);
});

async function readData() {
  console.log('Before Promise');
  //   myPromise.then((resolved) => console.log(resolved));
  console.log(await myPromise);
  console.log('After Promise');
}

readData();
