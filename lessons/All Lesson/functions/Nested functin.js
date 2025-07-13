/*
    Function
    - Function Inside Function
    - Return Function
*/

// Example one
function say(first_name , last_name) {
    let message = `Hello `

    function concat() {
        function full_name() {
            return `${first_name} ${last_name}`
        }
        return `${message}${full_name()}`
    }
    return concat()
}

console.log(say("Ahmad" , "Ali"))
