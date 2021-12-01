import { useState } from "react"

import { Button } from "../Button"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

interface FilterButtonProps {
  label: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function FilterButton({ label, onClick }: FilterButtonProps) {
  const [pressed, setPressed] = useState(false)
  const { fb_text, fb_buttonBg, fb_buttonPressedBg } = useWorkmizeColorMode()

  return (
    <Button
      label={label}
      marginRight={8}
      color={pressed ? fb_text : "#8D99A7"}
      marginBottom={5}
      backgroundColor={pressed ? fb_buttonPressedBg : fb_buttonBg}
      onClick={e => {
        onClick(e)
        setPressed(!pressed)
      }}
    />
  )
}
