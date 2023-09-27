import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('Date object', date);
  const dateString = date.toString();
  console.log('Date string', dateString);
  const parsedDateTime = DateTime.fromFormat(dateString, "EEE MMM dd yyyy HH:mm:ss 'GMT'ZZZ (ZZZZZ)", { zone: 'UTC' });
  console.log('parsed DateTime', parsedDateTime);
  return parsedDateTime.toString() as string;
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString() as string).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString() as string).toFormat('DD - t');
}

export default getDateTime;