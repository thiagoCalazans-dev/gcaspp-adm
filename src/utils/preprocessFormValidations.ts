export function inputDateValidation(arg: any) {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}

export function inputNumberValidation(a: string) {
  parseInt(a as string, 10);
}
