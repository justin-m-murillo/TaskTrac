import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('Date object', date);
  const newDate: Date = date;
  console.log('iso', newDate.toISOString());
  console.log('utc', newDate.toUTCString());
  console.log('getDate', newDate.getDate);
  console.log('getMonth', newDate.getMonth());
  console.log('getHours', newDate.getHours());
  console.log('getEpoch', newDate.getTime());
  return "";
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString() as string).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString() as string).toFormat('DD - t');
}

export default getDateTime;