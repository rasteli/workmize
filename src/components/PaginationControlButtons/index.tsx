import { IconButton, ButtonProps } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { Button } from "../Button"
import { useViewport } from "../../hooks/useViewport"

import Chevron from "../../assets/chevron.svg"

interface PreviousButtonProps {
  labeled?: boolean
  canPreviousPage: boolean
  style?: React.CSSProperties
  previousPage: (() => void) | React.MouseEventHandler<Element>
}

interface NextButtonProps {
  labeled?: boolean
  canNextPage: boolean
  style?: React.CSSProperties
  nextPage: (() => void) | React.MouseEventHandler<Element>
}

function ControlButton(props) {
  const { aboveThreshold } = useViewport(756)
  const buttonBg = useColorModeValue("#A0AEC0", "#22242E")
  const buttonText = useColorModeValue("#F8F8F8", "#718086")

  return aboveThreshold && props.labeled ? (
    <Button
      color={buttonText}
      backgroundColor={buttonBg}
      width="150px"
      {...props}
    />
  ) : (
    <IconButton
      backgroundColor={buttonBg}
      icon={<Chevron style={{ transform: "scale(0.5)" }} />}
      aria-label="control button"
      width="50px"
      _focus={{ boxShadow: "none" }}
      {...props}
    />
  )
}

export function PreviousButton({
  canPreviousPage,
  previousPage,
  labeled,
  style
}: PreviousButtonProps) {
  return (
    <ControlButton
      disabled={!canPreviousPage}
      onClick={previousPage}
      height="40px"
      label="Anterior"
      style={{ transform: "scaleX(-1)", ...style }}
      labeled={labeled}
    />
  )
}

export function NextButton({
  canNextPage,
  nextPage,
  labeled,
  style
}: NextButtonProps) {
  return (
    <ControlButton
      disabled={!canNextPage}
      onClick={nextPage}
      height="40px"
      label="Próxima"
      labeled={labeled}
      style={style}
    />
  )
}
