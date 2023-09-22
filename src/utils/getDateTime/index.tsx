import { DateTime } from "ts-luxon"

const getDateTime = (date: Date, is24HourTime: boolean) => {
  return is24HourTime
    ? DateTime.fromJSDate(date).toFormat('DD - T')
    : DateTime.fromJSDate(date).toFormat('DD - t');
}

export default getDateTime