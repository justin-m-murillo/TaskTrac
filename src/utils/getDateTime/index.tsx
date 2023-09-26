import { DateTime } from "ts-luxon"

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('getDateTime DATE STRING', date.toString());
  console.log('getDateTime DATE TO FORMAT', DateTime.fromISO(date.toString()).toFormat('DD - T'));
  const parsedDateTime = DateTime.fromFormat(date.toString(), "EEE MMM dd yyyy HH:mm:ss 'GMT'ZZZZZ (z)", { zone: 'UTC' })
  console.log('parsedDateTime', parsedDateTime);
  const formatISO = parsedDateTime.toISO();
  console.log('formatISO', formatISO);
  //return date.toString();
  return is24HourTime
    ? DateTime.fromISO(formatISO as string).toFormat('DD - T')
    : DateTime.fromISO(formatISO as string).toFormat('DD - t');
}

export default getDateTime;