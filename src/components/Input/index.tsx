import { Input as ChakraInput } from "@chakra-ui/react"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

import { styles } from "./styles"

export interface InputProps {
  type?: string
  value?: string
  color?: string
  readOnly?: boolean
  required?: boolean
  placeholder?: string
  size?: "xs" | "sm" | "md" | "lg"
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  _focus?: React.CSSProperties
}

export function Input({
  value,
  onChange,
  placeholder,
  size = "md",
  type = "text",
  required = false,
  readOnly = false,
  color = "#718086",
  _focus
}: InputProps) {
  const { cal_bgColor } = useWorkmizeColorMode()

  return (
    <ChakraInput
      style={styles.input(color, cal_bgColor)}
      placeholder={placeholder}
      type={type}
      size={size}
      value={value}
      onChange={onChange}
      isReadOnly={readOnly}
      required={required}
      _focus={_focus}
      _placeholder={{ color }}
    />
  )
}
