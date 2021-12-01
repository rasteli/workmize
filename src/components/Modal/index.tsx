import { CloseButton } from "@chakra-ui/react"

import { styles } from "./styles"
import { useViewport } from "../../hooks/useViewport"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

export interface ModalProps {
  header: React.ReactNode
  children: React.ReactNode
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ children, header, setOpen }: ModalProps) {
  const { aboveThreshold } = useViewport(1230)
  const {
    dra_headerBg,
    mod_mainBg,
    mod_mainText,
    mod_innerContainerBg
  } = useWorkmizeColorMode()

  const translateY = aboveThreshold ? -50 : -60

  return (
    <>
      <div style={styles.backdrop} />
      <div style={styles.outerContainer(translateY)}>
        <header style={styles.header(dra_headerBg)}>
          {header}
          <CloseButton
            style={styles.closeButton}
            size="lg"
            onClick={() => setOpen(false)}
          />
        </header>
        <main style={styles.main(mod_mainText, mod_mainBg)}>
          <div style={styles.innerContainer(mod_innerContainerBg)}>
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
