import { DateTime } from "ts-luxon"

const useDateTime = (date: Date) => {
  return DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_MED);
}

export default useDateTime