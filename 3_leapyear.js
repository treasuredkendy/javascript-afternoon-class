// leap  year check: create a function that accepts a year as input and employs an if statement to check if its a leap year. a leap year is any year that evenly divisible by 4( except for years that are evenly divisible by 100 but not 400).

function isLeapYear(year) {

    if (year % 400 === 0) {
      return true;
    }
  
    return (year % 4 === 0) && (year % 100 !== 0);
  }
  
  
  const year = 1600;

  if (isLeapYear(year)) {
    console.log(year + ' is a leap year');
  } else {
    console.log(year + ' is not a leap year');
  }
  