// This ensures Date formating is not dependent of a specific JS engine
export function formatDate(dateString) {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                  'Jul', 'Aug', 'Sep', 'Oct' , 'Nov', 'Dec'];
  let date = '';
  let timestamp = Date.parse(dateString);

  if (isNaN(timestamp)) {
    let newDateStr = dateString.split('')
    newDateStr[dateString.length - 5] = '.';
    date = new Date(newDateStr.join(''))
    date.setHours(date.getHours()+4)
  } else {
    date = new Date(dateString);
    date.setHours(date.getHours()-1)
  }

  let weekday = weekdays[date.getDay()],
      month = months[date.getMonth()],
      day = date.getDate(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      day_night = hour < 12 ? 'AM' : 'PM';

  if (minutes.toString().length === 1) {
    minutes = `0${minutes}`;
  }
  return `${weekday} ${month} ${day} - ${hour < 12 ? hour : hour - 12}:${minutes} ${day_night}`;
}
