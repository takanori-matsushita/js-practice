// 5.11.1
console.log(new Date(2012, 1, 20, 3, 12));

// 5.11.2
function getWeekDay(date) {
  let days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return days[date.getDay()];
}

let date2 = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getWeekDay(date2)); // "TU" と表示される

// 5.11.3
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) {
    day = 7;
  }
  return day;
}

let date3 = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date3)); // tuesday, should show 2

// 5.11.4
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

let date4 = new Date(2015, 0, 2);

console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

// 5.11.5
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}
console.log(getLastDayOfMonth(2012, 1));

// 5.11.6
function getSecondsToday() {
  let date = new Date();
  let today = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return Math.round((date - today) / 1000);
}
console.log(getSecondsToday()); // == 36000; // (3600 * 10)

// 5.11.7
function getSecondsToTomorrow() {
  let date = new Date();
  let tomorrow = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1
  );
  return Math.round((tomorrow - date) / 1000);
}
console.log(getSecondsToTomorrow()); // == 3600;

// 5.11.8
function formatDate(date) {
  let now = new Date();
  let calcDate = now - date;
  if (calcDate < 1 * 1000) {
    return "right now";
  } else if (calcDate < 60 * 1000) {
    return `${calcDate / 1000} sec. ago`;
  } else if (calcDate < 60 * 60 * 1000) {
    return `${calcDate / 60 / 1000} min. ago`;
  } else {
    return calcDate;
  }
}
console.log(formatDate(new Date(new Date() - 1))); // "right now"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
