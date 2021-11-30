import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import Chevron from "../../assets/chevron.svg"

import { PreviousButton, NextButton } from "../PaginationControlButtons"

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
  const currentPageBg = useColorModeValue("#FFFFFF", "#22242E")
  const boxShadow = useColorModeValue("0px 2px 5px #0000001C", "none")

  return (
    <footer style={styles.container}>
      <PreviousButton
        canPreviousPage={canPreviousPage}
        previousPage={previousPage}
        labeled
      />

      <div style={styles.page}>
        Página{" "}
        <span style={styles.currentPage(currentPageBg, boxShadow)}>
          {pageIndex + 1}
        </span>{" "}
        de {pageCount}
      </div>

      <NextButton canNextPage={canNextPage} nextPage={nextPage} labeled />
    </footer>
  )
}
