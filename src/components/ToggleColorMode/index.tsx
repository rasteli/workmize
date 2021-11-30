import { useColorModeValue, useColorMode } from "@chakra-ui/color-mode"

import SwitchDark1 from "../../assets/switch_dark.svg"
import SwitchLight1 from "../../assets/switch_light.svg"

import SwitchDark2 from "../../assets/switch_dark_iso.svg"
import SwitchLight2 from "../../assets/switch_light_iso.svg"

interface ToggleColorModeProps {
  variant?: "text" | "iso"
  style?: React.CSSProperties
}

export function ToggleColorMode({
  style,
  variant = "text"
}: ToggleColorModeProps) {
  const SwitchDark = variant === "text" ? SwitchDark1 : SwitchDark2
  const SwitchLight = variant === "text" ? SwitchLight1 : SwitchLight2

  const { toggleColorMode } = useColorMode()
  const Switch = useColorModeValue(SwitchLight, SwitchDark)

  return <Switch style={style} onClick={toggleColorMode} />
}
