import { useMemo, useState } from "react"
import { Checkbox } from "@chakra-ui/react"
import { Column, useTable } from "react-table"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"
import { TableFirstColumn } from "../TableFirstColumn"

interface CustomColumn {
  col1: React.ReactNode
  col2: string
  col3: string
}

export function Table() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "AAAA"
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "AAAA"
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "AAAA"
      }
    ],
    []
  )

  const columns: Column<CustomColumn>[] = useMemo(
    () => [
      {
        Header: (
          <TableFirstColumn
            checkboxStyles={styles.checkbox}
            toggleAllItems={toggleAllItems}
          />
        ),
        accessor: "col1"
      },
      {
        Header: "Responsáveis",
        accessor: "col2"
      },
      {
        Header: "Data de entrega",
        accessor: "col3"
      }
    ],
    []
  )

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(columns.length).fill(false)
  )

  function toggleAllItems(checked: boolean) {
    setCheckedItems(Array(columns.length).fill(checked))
  }

  function toggleItem(checked: boolean, index: number) {
    setCheckedItems(items => {
      const newItems = items.filter((item, indexInArray) => {
        return indexInArray !== index
      })

      newItems.splice(index, 0, checked)

      return newItems
    })
  }

  const {
    rows,
    prepareRow,
    headerGroups,
    getTableProps,
    getTableBodyProps
  } = useTable<CustomColumn>({ columns, data })

  const oddBg = useColorModeValue("#F2F2F2", "#1C1E27")
  const tableBg = useColorModeValue("#F9F9FB", "#22242E")
  const borderColor = useColorModeValue("#1719234D", "#464750")

  return (
    <table style={styles.container(tableBg)} {...getTableProps()}>
      <thead style={{ borderBottom: `2px solid ${borderColor}` }}>
        {headerGroups.map((headerGroup, hIndex) => (
          <tr key={hIndex} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, cIndex) => (
              <th
                key={cIndex}
                style={styles.th(cIndex, borderColor)}
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rIndex) => {
          prepareRow(row)
          const backgroundColor = rIndex % 2 === 0 ? tableBg : oddBg

          return (
            <tr
              key={rIndex}
              style={styles.tr(backgroundColor)}
              {...row.getRowProps()}
            >
              {row.cells.map((cell, cIndex) => (
                <td style={styles.td} key={cIndex} {...cell.getCellProps()}>
                  {cIndex % 3 === 0 && (
                    <Checkbox
                      colorScheme="gray"
                      style={styles.checkbox}
                      isChecked={checkedItems[rIndex]}
                      onChange={e => toggleItem(e.target.checked, rIndex)}
                    />
                  )}
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
