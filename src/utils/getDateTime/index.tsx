import { DateTime } from "ts-luxon"

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('getDateTime DATE STRING', date.toString());
  console.log('getDateTime DATE TO FORMAT', DateTime.fromISO(date.toString()).toFormat('DD - T'));
  
  return date.toString();
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString()).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString()).toFormat('DD - t');
}

export default getDateTime