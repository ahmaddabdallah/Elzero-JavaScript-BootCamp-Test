function ageInTime(theAge) {
  if (theAge > 100 || theAge < 10) {
    return 'Age Out Of Range';
  }

  let months = theAge * 12;
  let weeks = months * 4;
  let days = theAge * 365.25;
  let hours = days * 24;
  let minutes = hours * 60;
  let seconds = minutes * 60;

  console.log(`
  Age : ${theAge} 
  Months : ${months} 
  Weeks : ${weeks} 
  Days : ${days} 
  Hours : ${hours} 
  Minutes : ${minutes} 
  Seconds : ${seconds} 
  `);
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

