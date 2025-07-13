/*
    Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    const myRequest = new XMLHttpRequest();
    myRequest.addEventListener('load', function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error('API Is Wrong'));
      }
    });

    myRequest.open('GET', apiLink);
    myRequest.send();
  });
};

// API Key : https://api.github.com/users/ahmadabdallahh/repos

getData('https://api.github.com/users/ahmadabdallahh/repos')
  .then((result) => {
    //   console.log(result)
    result.length = 10;
    return result;
  })
  .then((result) => {
    console.log(result[0].name);
  }).catch(rej => {
    console.log("Reject");
    
  });

/*
    myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        // console.log(this.responseText);
        let jsData = JSON.parse(this.responseText);

        for (let i = 0; i < jsData.length; i++) {
          //   console.log(jsData[i].node_id);
          let myElement = document.createElement('div');
          let myText = document.createTextNode(
            `[${i + 1}] ID : ${jsData[i].id}`
          );
          myElement.appendChild(myText);
          document.body.appendChild(myElement);
        }
      }
    };
*/
