/*
    function practice
    rest
    Parameters
    default
    loop
    condition
*/

function show_info(user = "Unknown",age = "Unknown" , rate = 0 , show = "Yes", ...skills){
    document.write(`<div>`)
    document.write(`<h2>Welcome ${user} </h2>`)
    document.write(`<p>Age Is: ${age}</p>`)
    if (show == "Yes") {
        if (skills.length > 0) {
            document.write(`<p>Skills : ${skills.join(" | ")}</p>`)
        }
        else{
            document.write(`<p>Skills : No Skills</p>`)
        }
    }
    else{
        document.write("Skills is hidden")   
    }
    document.write(`</div>`)
}

show_info("Ahmad" , 38 , 50 , "`No`" , "HTML" , "CSS" , "JavaScript" , "React" , "Django" , "Slack" , "Python" , "SQL" , "flutter" , "Dart")