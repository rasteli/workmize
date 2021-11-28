import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"
import { Button } from "../Button"

interface PaginationControlProps {
  canNextPage: boolean
  canPreviousPage: boolean

  pageIndex: number
  pageCount: number

  nextPage: () => void
  previousPage: () => void
}

export function TablePaginationControl({
  canNextPage,
  canPreviousPage,
  pageIndex,
  pageCount,
  nextPage,
  previousPage
}: PaginationControlProps) {
  const buttonBg = useColorModeValue("#A0AEC0", "#22242E")
  const currentPageBg = useColorModeValue("#FFFFFF", "#22242E")
  const boxShadow = useColorModeValue("0px 2px 5px #0000001C", "none")

  return (
    <footer style={styles.container}>
      <Button
        label="Anterior"
        backgroundColor={buttonBg}
        disabled={!canPreviousPage}
        onClick={previousPage}
        height="40px"
        width="150px"
      />

      <div style={styles.page}>
        Página{" "}
        <span style={styles.currentPage(currentPageBg, boxShadow)}>
          {pageIndex + 1}
        </span>{" "}
        de {pageCount}
      </div>

      <Button
        label="Próxima"
        backgroundColor={buttonBg}
        disabled={!canNextPage}
        onClick={nextPage}
        height="40px"
        width="150px"
      />
    </footer>
  )
}
