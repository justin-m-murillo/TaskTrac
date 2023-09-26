import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: Date, is24HourTime: boolean) => {
  const dateString = date.toString();
  const parsedDateTime = DateTime.fromFormat(dateString, "EEE MMM dd yyyy HH:mm:ss 'GMT'ZZZ (z)", { zone: 'UTC' });
  const sliced = date.toString().slice(0, -5);
  console.log('sliced dt', parsedDateTime);
  return sliced;
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString() as string).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString() as string).toFormat('DD - t');
}

export default getDateTime;