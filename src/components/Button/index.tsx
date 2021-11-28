import { Button as ChakraButton } from "@chakra-ui/react"
import { styles } from "./styles"

export interface ButtonProps {
  label: string
  width?: string
  height?: string
  disabled?: boolean
  isFullWidth?: boolean
  backgroundColor?: string
  size?: "sm" | "md" | "lg"
  type?: "button" | "submit" | "reset"
  marginTop?: number
  marginLeft?: number
  marginRight?: number
  marginBottom?: number
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({
  label,
  type,
  width,
  height,
  onClick,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  size = "md",
  disabled = false,
  isFullWidth = false,
  backgroundColor = "#805AD5"
}: ButtonProps) {
  const style = styles.button(
    width,
    height,
    backgroundColor,
    isFullWidth,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom
  )

  return (
    <ChakraButton
      size={size}
      type={type}
      style={style}
      onClick={onClick}
      isDisabled={disabled}
      _hover={{ opacity: 0.9 }}
    >
      {label}
    </ChakraButton>
  )
}
