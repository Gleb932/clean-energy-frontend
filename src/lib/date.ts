const dateOptions = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
} as const

const dateTimeOptions = {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
} as const

export function localDateToDate(localDate: string): Date {
  const [y, m, d] = localDate.split("-").map(Number);
  return new Date(y, m - 1, d);
}

export function dateToFormattedLocaleStr(date: Date) {
    return date.toLocaleDateString('en-GB', dateOptions)
}

export function instantToFormattedLocaleStr(date: Date) {
    return date.toLocaleDateString('en-GB', dateTimeOptions)
}