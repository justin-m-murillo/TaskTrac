import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('Date object', date);
  console.log('Date object to string', date.toString());
  const dateString = date.toString();
  const parsedDateTime = DateTime.fromFormat(dateString, "EEE MMM dd yyyy HH:mm:ss 'GMT'ZZZ (z)", { zone: 'UTC' });
  console.log('parsed DateTime', parsedDateTime);
  return parsedDateTime;
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString() as string).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString() as string).toFormat('DD - t');
}

export default getDateTime;