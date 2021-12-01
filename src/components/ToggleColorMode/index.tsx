import { useColorMode } from "@chakra-ui/color-mode"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

interface ToggleColorModeProps {
  variant?: "text" | "iso"
  style?: React.CSSProperties
}

export function ToggleColorMode({
  style,
  variant = "text"
}: ToggleColorModeProps) {
  const { toggleColorMode } = useColorMode()
  const { SwitchText, SwitchIso } = useWorkmizeColorMode()

  const Switch = variant === "text" ? SwitchText : SwitchIso

  return <Switch style={style} onClick={toggleColorMode} />
}
