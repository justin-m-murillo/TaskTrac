import { DateTime } from "ts-luxon"
import formatISO from "date-fns/formatISO";

const getDateTime = (date: string, is24HourTime: boolean) => {
  return is24HourTime
    ? DateTime.fromISO(date).toFormat('DD - T')
    : DateTime.fromISO(date).toFormat('DD - t');
}

export default getDateTime;