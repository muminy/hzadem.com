import dayjs from "dayjs"

export type EqualProps = string | number

export function isEqual(first: EqualProps, second: EqualProps) {
  return first === second
}

export function getDate(date: string) {
  return dayjs(date).locale("tr").format("DD MMMM, YYYY")
}
