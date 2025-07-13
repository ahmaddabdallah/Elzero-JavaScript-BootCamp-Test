/*
    function advanced
*/

function say_hello(userName , age) {
    if(age <= 18) {
        console.log("Age is not suitable for you");
    } else {
        console.log(`Hi ${userName} and Your age Is ${age}`);
    }
}

say_hello("Ahmad" , 15)
say_hello("Ali" , 35)
say_hello("Osama" , 25)

function generate(start , end , excuse) {
    for(let i = start ; i <= end ; i++) {
        if (i === excuse){
            continue; // skip the excuse
        }
        console.log(i);
    }
}

generate(1996 , 2024 , 2005)