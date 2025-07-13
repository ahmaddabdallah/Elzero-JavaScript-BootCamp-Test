/*
    lexical scope (function)
*/

function parent() {
    let x = 10;
    function child() {
        console.log(x);
        function grand() {
            let x = 30;
            console.log(`From grand Is : ${x}`);
        }
        grand();
    }

    child();
}

parent()

function test() {
    for (let i = 0; i < 10; i++) {
        if (i === 3){
            continue;
        }
        console.log(i);
    }
}

test()