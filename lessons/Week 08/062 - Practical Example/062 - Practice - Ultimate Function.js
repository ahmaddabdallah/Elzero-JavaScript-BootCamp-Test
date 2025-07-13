/*
    Function Advanced Practice
        - Parameters
        - Default
        - Rest
        - Loop
        - Condition
*/

function showInfo(
  userName = 'Unknown',
  age = 'Unknown',
  rate = 0,
  show = 'Yes',
  ...skills
) {
  document.write('<div>');
  document.write(`<h2>Welcome , ${userName}</h2>`);
  document.write(`<p>Your Age Is : ${age}</p>`);
  document.write(`<p>Rate Hour : $${rate}</p>`);
  document.write(`<p>Your Skills </p>`);
  if (show == 'Yes') {
    // document.write(`<p>Skills : ${skills.join(" | ")}</p>`);
    for (let i = 0; i < skills.length; i++) {
      document.write(`<p>${i + 1} - ${skills[i]}</p>`);
    }
  } else {
    document.write('No Skills');
  }
  document.write('</div>');
}

showInfo('Ahmad', 18, 20, 'Yes', 'HTML', 'CSS', 'JS');
