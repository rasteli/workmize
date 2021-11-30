import { IconButton, IconButtonProps } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { Button, ButtonProps } from "../Button"
import { useViewport } from "../../hooks/useViewport"

import Chevron from "../../assets/chevron.svg"

interface PreviousButtonProps {
  canPreviousPage: boolean
  previousPage: () => void
}

interface NextButtonProps {
  canNextPage: boolean
  nextPage: () => void
}

function ControlButton(props) {
  const { aboveThreshold } = useViewport(756)
  const buttonBg = useColorModeValue("#A0AEC0", "#22242E")
  const buttonText = useColorModeValue("#F8F8F8", "#718086")

  return aboveThreshold ? (
    <Button
      color={buttonText}
      backgroundColor={buttonBg}
      label="Anterior"
      width="150px"
      {...props}
    />
  ) : (
    <IconButton
      color={buttonText}
      backgroundColor={buttonBg}
      icon={<Chevron style={{ transform: "scale(0.5)" }} />}
      aria-label="control button"
      width="50px"
      {...props}
    />
  )
}

export function PreviousButton({
  canPreviousPage,
  previousPage
}: PreviousButtonProps) {
  return (
    <ControlButton
      disabled={!canPreviousPage}
      onClick={previousPage}
      height="40px"
      style={{ transform: "scaleX(-1)" }}
    />
  )
}

export function NextButton({ canNextPage, nextPage }: NextButtonProps) {
  return (
    <ControlButton disabled={!canNextPage} onClick={nextPage} height="40px" />
  )
}
