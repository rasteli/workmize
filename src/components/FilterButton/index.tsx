import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { Button } from "../Button"

interface FilterButtonProps {
  label: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function FilterButton({ label, onClick }: FilterButtonProps) {
  const [pressed, setPressed] = useState(false)

  const text = useColorModeValue("#22242E", "#e2e4e6")
  const buttonBg = useColorModeValue("#e2e4e6", "#2F353D")
  const buttonPressedBg = useColorModeValue("#D6BCFA", "#322659")

  return (
    <Button
      label={label}
      marginRight={8}
      color={pressed ? text : "#8D99A7"}
      marginBottom={5}
      backgroundColor={pressed ? buttonPressedBg : buttonBg}
      onClick={e => {
        onClick(e)
        setPressed(!pressed)
      }}
    />
  )
}
