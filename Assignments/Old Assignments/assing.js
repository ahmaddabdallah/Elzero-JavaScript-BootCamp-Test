
let img = document.querySelectorAll("img")

for (let i = 0; i < img.length ; i++) {
    if (img[i].hasAttribute("alt") ) {
        img[i].alt = "old"
    }
    else {
            img[i].alt = "Elzero New"
    }
}
