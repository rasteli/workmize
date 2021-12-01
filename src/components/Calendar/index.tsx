import "moment/locale/pt-br"

import { useState } from "react"
import { SingleDatePicker } from "react-dates"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { useTask } from "../../contexts/TaskContext"
import { useRootStyles } from "../../hooks/useRootStyles"
import { PreviousButton, NextButton } from "../PaginationControlButtons"

export interface CalendarProps {
  fullWidth?: boolean
  placeholder?: string
}

export function Calendar({ placeholder, fullWidth = false }: CalendarProps) {
  const [isFocused, setIsFocused] = useState(false)
  const {
    completionDate,
    setters: { setCompletionDate }
  } = useTask()

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

  function handleDateChange(date: moment.Moment) {
    setCompletionDate(date)
  }

  return (
    <>
      <SingleDatePicker
        id="calendar"
        date={completionDate}
        numberOfMonths={1}
        focused={isFocused}
        weekDayFormat="ddd"
        noBorder
        block={fullWidth}
        inputIconPosition="after"
        showDefaultInputIcon={isFocused}
        onDateChange={handleDateChange}
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

      <div style={styles.spacer} />
    </>
  )
}
