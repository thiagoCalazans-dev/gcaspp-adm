import dayjs from "dayjs";

export function inputDateFormatToISOString(string: string) {
  const date = dayjs(string).toISOString();
  return date;
}

type dateString = string | Date;

export function formatDateStringToBrDate(dateString: dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}
