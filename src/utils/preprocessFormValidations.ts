export function inputDateValidation(arg: any) {
  if (typeof arg == "string" || arg instanceof Date)
    return new Date(arg + "T00:00:00-03:00");
}

export function inputNumberValidation(a: string) {
  parseInt(a as string, 10);
}
