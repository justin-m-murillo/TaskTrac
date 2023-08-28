import { DateTime } from "ts-luxon"

const useDateTime = (date: Date, is24HourTime: boolean) => {
  return is24HourTime
    ? DateTime.fromJSDate(date).toFormat('DD - T')
    : DateTime.fromJSDate(date).toFormat('DD - t');
}

export default useDateTime