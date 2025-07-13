/*
    String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], Start [Opt] Length)
    - slice(Start [Mand], End [Opt] Not Include End)
    - repeat(Times) [ES6]
    - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero web school";

console.log(a.indexOf("web"))
console.log(a.indexOf("web , 8"))

console.log(a.indexOf("o")) //5

console.log(a.lastIndexOf("o")) //15

console.log(a.slice(2 , 7))
console.log(a.slice(-6))

console.log(a.repeat(10))

console.log(a.split(" " , 6))