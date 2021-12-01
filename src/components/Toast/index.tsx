import { Slide } from "@chakra-ui/transition"
import { CloseButton } from "@chakra-ui/react"

import { styles } from "./styles"
import { variants } from "../../utils/alertVariants"

export interface ToastProps {
  open: boolean
  message: string
  variant: "success" | "error"
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Toast({ open, message, variant, setOpen }: ToastProps) {
  if (!open) return null

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
      <p>{message}</p>
    </Slide>
  )
}
