// Assignment one

let testName = document.getElementsByName("js")
    console.log(testName[0])

let test_id = document.querySelector("#elzero")
    console.log(test_id)

let test_class = document.querySelector(".element")
    console.log(test_class)

let test_Name = document.querySelector("[name = 'js']")
    console.log(test_Name)

let test_tag = document.querySelector("div")
    console.log(test_tag)

let test_id_q = document.getElementById("elzero")
    console.log(test_id_q)

let test_Class = document.getElementsByClassName("element")
    console.log(test_Class[0])

let test_tag_N = document.getElementsByTagName("div")
    console.log(test_tag_N[0])

let test8 = document.querySelectorAll("#elzero")
    console.log(test8[0])

let test9 = document.querySelectorAll(".element")
    console.log(test9[0])

let test10 = document.querySelectorAll("[name = 'js']")
    console.log(test10[0])

let test11 = document.querySelectorAll("div")
    console.log(test11[0])


// التكليف 02

let img = document.querySelectorAll("div img")

for (let i = 0; i < img.length ; i++) {
    img[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
    img[i].setAttribute("alt" , "Elzero logo");
    img[i].style.background = "blue"
}