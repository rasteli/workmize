import { Slide } from "@chakra-ui/transition"
import { CloseButton } from "@chakra-ui/react"

import { styles } from "./styles"

import Alert from "../../assets/alert.svg"
import Check from "../../assets/check_checked_inverted.svg"

export interface ToastProps {
  open: boolean
  message: string
  variant: "success" | "error"
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Toast({ open, message, variant, setOpen }: ToastProps) {
  if (!open) return null

  const variants = {
    success: {
      bg: "#38A169",
      icon: Check
    },

    error: {
      bg: "#E53E3E",
      icon: Alert
    }
  }

  const toastBg = variants[variant].bg
  const ToastIcon = variants[variant].icon

  return (
    <Slide in={open} direction="right" style={styles.container(toastBg)}>
      <CloseButton
        onClick={() => setOpen(false)}
        style={styles.closeButton}
        _focus={{ boxShadow: "none" }}
      />
      <ToastIcon style={styles.icon(variant)} />
      {message}
    </Slide>
  )
}
