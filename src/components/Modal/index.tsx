import { CloseButton } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

export interface ModalProps {
  children: React.ReactNode
  header: React.ReactNode
}

export function Modal({ children, header }: ModalProps) {
  const mainBg = useColorModeValue("#fff", "#22242E")
  const mainText = useColorModeValue("#22242E", "#fff")
  const headerBg = useColorModeValue("#BCA8E9", "#31274F")

  return (
    <div style={styles.container}>
      <header style={styles.header(headerBg)}>
        {header}
        <CloseButton style={styles.closeButton} size="lg" />
      </header>

      <main style={styles.main(mainText, mainBg)}>{children}</main>
    </div>
  )
}
