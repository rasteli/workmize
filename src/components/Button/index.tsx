import { Button as ChakraButton } from "@chakra-ui/react"
import { styles } from "./styles"

export interface ButtonProps {
  label: string
  color?: string
  width?: string
  height?: string
  loading?: boolean
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
  color = "#FFF",
  loading = false,
  disabled = false,
  isFullWidth = false,
  backgroundColor = "#805AD5"
}: ButtonProps) {
  const buttonStyle = styles.button(
    color,
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
      style={buttonStyle}
      onClick={onClick}
      isLoading={loading}
      isDisabled={disabled}
      _hover={{ opacity: 0.9 }}
      _focus={{ boxShadow: "none", background: "#fff" }}
    >
      {label}
    </ChakraButton>
  )
}
