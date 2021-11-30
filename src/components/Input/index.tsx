import { Input as ChakraInput } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

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
  const backgroundColor = useColorModeValue("#EDF2F7", "#0F1016")

  const style: React.CSSProperties = {
    border: 0,
    color,
    backgroundColor
  }

  return (
    <ChakraInput
      style={style}
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
