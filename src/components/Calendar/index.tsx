import "moment/locale/pt-br"

import { useState } from "react"
import { SingleDatePicker } from "react-dates"
import { IconButton } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { useRootStyles } from "../../hooks/useRootStyles"
import { PreviousButton, NextButton } from "../PaginationControlButtons"

export interface CalendarProps {
  placeholder?: string
}

export function Calendar({ placeholder }: CalendarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [date, setDate] = useState<moment.Moment | null>(null)

  const bgColor = useColorModeValue("#edf2f7", "#0F1016")
  const textColor = useColorModeValue("#22242e", "#718086")
  const borderColor = useColorModeValue("#ffffff", "#cbd5e0")

  const inputBorderWidth = isFocused ? "2px" : 0
  const inputBorderRadius = isFocused ? "18px 18px 0 0" : "8px"

  const values = [
    bgColor,
    textColor,
    textColor,
    borderColor,
    inputBorderRadius,
    inputBorderWidth
  ]

  const props = [
    "--calendar-bg-color",
    "--calendar-text-color",
    "--calendar-input-color",
    "--calendar-border-color",
    "--calendar-input-border-radius",
    "--calendar-input-border-width"
  ]

  useRootStyles(props, values)

  return (
    <SingleDatePicker
      id="calendar"
      date={date}
      numberOfMonths={1}
      focused={isFocused}
      weekDayFormat="ddd"
      noBorder
      inputIconPosition="after"
      showDefaultInputIcon={isFocused}
      onDateChange={date => setDate(date)}
      placeholder={isFocused ? "dd/mm/aa" : placeholder}
      onFocusChange={({ focused }) => setIsFocused(focused)}
      renderNavPrevButton={({ onClick, disabled }) => (
        <PreviousButton
          previousPage={onClick}
          canPreviousPage={!disabled}
          style={{ ...styles.controlButton, left: 20 }}
        />
      )}
      renderNavNextButton={({ onClick, disabled }) => (
        <NextButton
          nextPage={onClick}
          canNextPage={!disabled}
          style={{ ...styles.controlButton, right: 20 }}
        />
      )}
    />
  )
}
