// Expected Output :
// mm - dd - yyyy, mm / dd / yyyy
// or
// dd - mm - yyyy, dd / mm / yyyy


function currentDate(date, callback) {
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month
  let fullDate = callback(day, month, year);
  console.log(fullDate);
}

currentDate(new Date(), function (dd, mm, yyyy) {
  return `mm - dd - yyyy, ${mm} / ${dd} / ${yyyy}`;
});
currentDate(new Date(), function (dd, mm, yyyy) {
  return `dd - mm - yyyy, ${dd} / ${mm} / ${yyyy}`;
});