import { IconButton, ButtonProps } from "@chakra-ui/react"

import { Button } from "../Button"
import { useViewport } from "../../hooks/useViewport"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

import Chevron from "../../assets/chevron.svg"

interface ControlButtonProps {
  labeled?: boolean
  style?: React.CSSProperties
}

interface PreviousButtonProps extends ControlButtonProps {
  canPreviousPage: boolean
  previousPage: (() => void) | React.MouseEventHandler<Element>
}

interface NextButtonProps extends ControlButtonProps {
  canNextPage: boolean
  nextPage: (() => void) | React.MouseEventHandler<Element>
}

function ControlButton(props) {
  const { aboveThreshold } = useViewport(756)
  const { pagCB_buttonBg, pagCB_buttonText } = useWorkmizeColorMode()

  return aboveThreshold && props.labeled ? (
    <Button
      color={pagCB_buttonText}
      backgroundColor={pagCB_buttonBg}
      width="150px"
      {...props}
    />
  ) : (
    <IconButton
      backgroundColor={pagCB_buttonBg}
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
