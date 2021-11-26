import { useMemo } from "react"
import { Column, useTable } from "react-table"

interface CustomColumn {
  col1: string
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
        Header: "Column 1",
        accessor: "col1" // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2"
      },
      {
        Header: "Column 3",
        accessor: "col3"
      }
    ],
    []
  )

  const {
    rows,
    prepareRow,
    headerGroups,
    getTableProps,
    getTableBodyProps
  } = useTable<CustomColumn>({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr key={index} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th key={index} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)

          return (
            <tr key={index} {...row.getRowProps()}>
              {row.cells.map(cell => (
                <td key={index} {...cell.getCellProps()}>
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
