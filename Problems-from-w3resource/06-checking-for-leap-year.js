
function checkingLeapYear(year) {
  let str = ((year % 4 === 0) && (year % 400 !== 0)) ? "This is a leap year." : "This is not a leap year.";
  console.log(str);
}

checkingLeapYear(2004);
checkingLeapYear(2020);
