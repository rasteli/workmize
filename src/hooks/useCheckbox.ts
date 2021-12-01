import { useState, useCallback } from "react"

type useCheckboxReturn = [
  boolean[],
  (checked: boolean, index: number) => void,
  (checked: boolean) => void
]

export function useCheckbox(data: any[]): useCheckboxReturn {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(data.length).fill(false)
  )

  function toggleItem(checked: boolean, index: number) {
    setCheckedItems(items => {
      const newItems = items.filter((_, indexInArray) => {
        return indexInArray !== index
      })

      newItems.splice(index, 0, checked)

      return newItems
    })
  }

  const toggleAllItems = useCallback(
    (checked: boolean) => {
      setCheckedItems(Array(data.length).fill(checked))
    },
    [data.length]
  )

  return [checkedItems, toggleItem, toggleAllItems]
}
