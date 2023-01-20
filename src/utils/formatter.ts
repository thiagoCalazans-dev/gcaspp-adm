import dayjs from "dayjs";

export function inputDateFormatToISOString(string: string) {
  const date = dayjs(string).toISOString();
  return date;
}
