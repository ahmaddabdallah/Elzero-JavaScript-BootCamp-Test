/*
    Ajax
        Loop On Data

        Search
            - Cross Origin API [CORS]
            - API Authentication

        Advanced Example & Training
            - https://github.com/PhilopaterHany/GitHub-Stats-App/
*/

let myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://api.github.com/users/ahmadabdallahh/repos');
myRequest.send();

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    for (let i = 0; i < jsData.length; i++) {
      //   console.log(jsData[i].node_id);
      let myElement = document.createElement('div');
      let myText = document.createTextNode(`[${i + 1}] ID : ${jsData[i].id}`);
      myElement.appendChild(myText)
      document.body.appendChild(myElement);
    }
  }
};
