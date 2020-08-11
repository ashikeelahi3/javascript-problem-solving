// Output: 
//  Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


function formateDate(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amOrPm = (hour < 12) ? "AM" : "PM";
  hour = hour % 12;
  hour = hrs ? hour: 12;
  let fullDate = `${hour < 10 ? '0' + hour : hour} ${amOrPm} : ${minute < 10 ? '0' + minute : minute} : ${second < 10 ? '0' + second : second}`;

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let day = days[date.getDay()];

  console.log(`Today is : ${day}`);
  console.log(`Current time is : ${fullDate}`);
}

formateDate(new Date());
