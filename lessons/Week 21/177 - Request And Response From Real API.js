/*
    Ajax
        - Ready State => Status Of The Request
            [0] Request Not Initialized
            [1] Server Connection Established
            [2] Request Received
            [3] Processing Request
            [4] Request Is Finished And Response Is Ready
        - Status
            [200] Response Is Successful
            [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.github.com/users/ahmadabdallahh/repos');
myRequest.send();

myRequest.onreadystatechange = function () {
//   console.log(myRequest.status);
//   console.log(myRequest.readyState);

  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};

// console.log(myRequest);
