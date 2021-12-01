export function filterArrayStartingWith<T>(
  array: T[],
  prop: string,
  startsWith: string
) {
  const filteredArray = array.filter((element: T) => {
    return element[prop].toLowerCase().startsWith(startsWith.toLowerCase())
  })

  return filteredArray
}
