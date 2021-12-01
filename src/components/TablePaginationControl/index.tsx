import { styles } from "./styles"
import { PreviousButton, NextButton } from "../PaginationControlButtons"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

interface PaginationControlProps {
  canNextPage: boolean
  canPreviousPage: boolean

  pageIndex: number
  pageCount: number

  nextPage: () => void
  previousPage: () => void
}

export function TablePaginationControl({
  pageIndex,
  pageCount,
  nextPage,
  previousPage,
  canNextPage,
  canPreviousPage
}: PaginationControlProps) {
  const { mod_mainBg, boxShadow } = useWorkmizeColorMode()

  return (
    <footer style={styles.container}>
      <PreviousButton
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        labeled
      />

      <div style={styles.page}>
        Página{" "}
        <span style={styles.currentPage(mod_mainBg, boxShadow)}>
          {pageIndex + 1}
        </span>{" "}
        de {pageCount}
      </div>

      <NextButton canNextPage={canNextPage} nextPage={nextPage} labeled />
    </footer>
  )
}
