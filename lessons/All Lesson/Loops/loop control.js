/*
    loop control
    Break
    continue
    label
*/

let products = [1,2,3,4,3,5,"Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];


main_loop:for (let i = 0; i < products.length; i++) {
    if (typeof products[i] == "number") {
        continue;
    }
    console.log(products[i]);

    nested_loop: for (let j = 0; j < colors.length; j++) {
        console.log(`- ${colors[j]}`);
        if (colors[j] == "Green") {
            break;
        }
    }
}