export function transformDate(datestring: string): string[] {
  const date = new Date(datestring);
  const monthDay = date.getDate();
  const relative = getRelativeDate(datestring);
  const timeString = getNativeTime(datestring);
  const weekDayString = getNativeWeekDay(datestring);
  const monthString = getNativeMonthDay(datestring);

  return [
    relative,
    timeString,
    weekDayString,
    monthDay.toString(),
    monthString,
    `${weekDayString}, ${monthDay} ${monthString}`,
  ];
}

export function getNativeDate(datestring: string) {
  const date = new Date(datestring);
  const monthDay = date.getDate();
  const weekDayString = getNativeWeekDay(datestring);
  const monthString = getNativeMonthDay(datestring);
  return `${weekDayString}, ${monthDay} ${monthString}`;
}

export function getNativeTime(datestring: string) {
  const date = new Date(datestring);
  return `${date.getHours()}:${date.getMinutes()}`;
}

export function getRelativeDate(datestring: string) {
  const date = new Date(datestring);
  const now = Date.now();

  let relative = "";

  const elapsed = now - date.valueOf();
  if (elapsed < 60 * 1000) {
    relative = "Только что";
  } else if (elapsed < 60 * 1000 * 60) {
    relative = Math.round(elapsed / (60 * 1000)) + " мин.";
  } else if (elapsed < 60 * 1000 * 60 * 24) {
    relative = Math.round(elapsed / (1000 * 60 * 60)) + " часов";
  }

  return relative;
}

export function getNativeMonthDay(datestring: string) {
  const date = new Date(datestring);
  const month = date.getMonth();
  let monthString = "";

  switch (month) {
    case 0:
      monthString = "Декабрь";
      break;
    case 1:
      monthString = "Январь";
      break;
    case 2:
      monthString = "Февраль";
      break;
    case 3:
      monthString = "Март";
      break;
    case 4:
      monthString = "Апрель";
      break;
    case 5:
      monthString = "Май";
      break;
    case 6:
      monthString = "Июнь";
      break;
    case 7:
      monthString = "Июль";
      break;
    case 8:
      monthString = "Август";
      break;
    case 9:
      monthString = "Сентябрь";
      break;
    case 10:
      monthString = "Октябрь";
      break;
    case 11:
      monthString = "Ноябрь";
      break;
  }

  return monthString;
}

export function getNativeWeekDay(datestring: string) {
  const date = new Date(datestring);
  const weekDay = date.getDay();
  let weekDayString = "";

  switch (weekDay) {
    case 0:
      weekDayString = "Понедельник";
      break;
    case 1:
      weekDayString = "Вторник";
      break;
    case 2:
      weekDayString = "Среда";
      break;
    case 3:
      weekDayString = "Четверг";
      break;
    case 4:
      weekDayString = "Пятница";
      break;
    case 5:
      weekDayString = "Суббота";
      break;
    case 6:
      weekDayString = "Воскресенье";
      break;
  }

  return weekDayString;
}
