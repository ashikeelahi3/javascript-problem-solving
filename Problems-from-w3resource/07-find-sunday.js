

function findSundayInFirstJanuary(startingYear, endingYear) {
  let count = 0;
  for (let i = startingYear; i <= endingYear; i++){
    let date = new Date(`${i} / 01 / 01`);
    if (date.getDay() == 0) {
      count++;
    }
  }
  console.log(`There are ${count} sunday in January 1 between ${startingYear} to ${endingYear}`);
}

findSundayInFirstJanuary(2014, 2050);
 