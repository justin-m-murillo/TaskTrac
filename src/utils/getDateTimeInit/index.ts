import { DateTime } from "ts-luxon";

const getDateTimeInit = () => {
  return DateTime.fromJSDate(new Date()).toISO();
}

export default getDateTimeInit;