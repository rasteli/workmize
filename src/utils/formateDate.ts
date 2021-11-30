export function formatDate(date: string) {
  const filteredDate = date.replace("-", "").replace("-", "")

  const [yearMonthDay] = filteredDate.split("T")

  const day = yearMonthDay.substring(6)
  const year = yearMonthDay.substring(0, 4)
  const month = yearMonthDay.substring(4, 6)
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}
