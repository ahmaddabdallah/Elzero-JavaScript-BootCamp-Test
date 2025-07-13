/*
    BOM [Browser Object Model]
    - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
    - close()
    - Window Features
    --- left [Num]
    --- top [Num]
    --- width [Num]
    --- height [Num]
    --- menubar [yes || no]

    Search
    - Window.Open Window Features
*/

let btnLogin = document.getElementById('login');

btnLogin.addEventListener('click', login);

function login() {
  setTimeout(function () {
    window.open('https://google.com', '_blank', 'width=450, height=350');
  }, 1500);
}
