/*
    Async & Await With Try, Catch, Finally
*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Iam The Good Promise'),
    reject('I am a Bad Promise');
  }, 1000);
});

// async function readData() {
//   console.log('Before Promise');
//   try {
//     console.log(await myPromise);
//   } catch (reason) {
//     console.log(`Reason ${reason}`);
//   } finally {
//     console.log('After Promise');
//   }
// }

// readData();

async function fetchData() {
  console.log('Before Fetch');
  try {
    console.log(await myPromise);
  } catch (reason) {
    let myFetch = await fetch(
      'https://api.github.com/users/ahmadabdallah/repos'
    );
    console.log(myFetch.json());

  } finally {
    console.log('After Fetch');
  }
}

fetchData();
