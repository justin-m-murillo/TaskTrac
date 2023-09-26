import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: Date, is24HourTime: boolean) => {
  console.log('getDateTime Raw Date', date);
  const sliced = date.toString().slice(0, -5);
  console.log('sliced dt', sliced);
  return sliced;
  // return is24HourTime
  //   ? DateTime.fromISO(date.toString() as string).toFormat('DD - T')
  //   : DateTime.fromISO(date.toString() as string).toFormat('DD - t');
}

export default getDateTime;