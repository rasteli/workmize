import { CloseButton } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

export interface ModalProps {
  header: React.ReactNode
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ children, header, setOpen }: ModalProps) {
  const mainBg = useColorModeValue("#fff", "#22242E")
  const mainText = useColorModeValue("#22242E", "#fff")
  const headerBg = useColorModeValue("#BCA8E9", "#31274F")
  const innerContainerBg = useColorModeValue("#F7FAFC", "#171923")

  return (
    <>
      <div style={styles.backdrop}></div>
      <div style={styles.outerContainer}>
        <header style={styles.header(headerBg)}>
          {header}
          <CloseButton
            style={styles.closeButton}
            size="lg"
            onClick={() => setOpen(false)}
          />
        </header>
        <main style={styles.main(mainText, mainBg)}>
          <div style={styles.innerContainer(innerContainerBg)}>{children}</div>
        </main>
      </div>
    </>
  )
}
