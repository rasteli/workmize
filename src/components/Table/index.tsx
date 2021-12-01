import { useMemo, useState } from "react"
import { Checkbox, Text } from "@chakra-ui/react"
import { Column, useTable, usePagination } from "react-table"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { useViewport } from "../../hooks/useViewport"
import { useCheckbox } from "../../hooks/useCheckbox"

import { UserImage } from "../UserImage"
import { BottomToast } from "../BottomToast"
import { formatDate } from "../../utils/formateDate"
import { useTask } from "../../contexts/TaskContext"
import { TableFirstColumn } from "../TableFirstColumn"
import { TablePaginationControl } from "../TablePaginationControl"

import Checked from "../../assets/check_checked.svg"
import Unchecked from "../../assets/check_unchecked.svg"

interface CustomColumn {
  col1: React.ReactNode
  col2: React.ReactNode[]
  col3: string
}

export function Table() {
  const [open, setOpen] = useState(false)
  const { tasks, toggleTaskCompletion, taskRefetch } = useTask()

  const { aboveThreshold } = useViewport(756)
  const fontSize = aboveThreshold ? 16 : 12

  const oddBg = useColorModeValue("#F2F2F2", "#1C1E27")
  const tableBg = useColorModeValue("#F9F9FB", "#22242E")
  const containerBg = useColorModeValue("#FFFFFF", "#171923")
  const borderColor = useColorModeValue("#1719234D", "#464750")
  const checkboxBorder = useColorModeValue("#22242E", "#F9F9FB")

  const data = useMemo(() => {
    return tasks.map(task => {
      return {
        col1: task.name,
        col2: task.users.map(user => (
          <UserImage key={user.id} src={user.avatar} size={25} noMargin />
        )),
        col3: formatDate(task.completionDate)
      }
    })
  }, [tasks])

  const [checkedItems, toggleItem, toggleAllItems] = useCheckbox(data)

  const columns: Column<CustomColumn>[] = useMemo(
    () => [
      {
        Header: (
          <TableFirstColumn
            allChecked={checkedItems.every(Boolean)}
            checkboxStyles={styles.checkbox(checkboxBorder)}
            onChange={e => {
              toggleAllItems(e.target.checked)
              setOpen(true)
            }}
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
    [checkboxBorder, toggleAllItems, checkedItems]
  )

  const {
    page,
    prepareRow,
    headerGroups,
    getTableProps,
    getTableBodyProps,

    nextPage,
    pageCount,
    canNextPage,
    previousPage,
    canPreviousPage,

    state: { pageIndex }
  } = useTable<CustomColumn>(
    { columns, data, initialState: { pageSize: 6 } },
    usePagination
  )

  function handleSelection(checked: boolean, index: number) {
    toggleItem(checked, index)
    setOpen(true)
  }

  async function toggleTask(index: number) {
    await toggleTaskCompletion(tasks[index].id)
    await taskRefetch()
  }

  return (
    <div style={styles.container(containerBg)}>
      <header style={styles.header}>({data.length} tarefas)</header>

      <table style={styles.table(tableBg, fontSize)} {...getTableProps()}>
        <thead style={styles.thead(borderColor)}>
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
          {page.map((row, rIndex) => {
            prepareRow(row)
            const backgroundColor = rIndex % 2 === 0 ? tableBg : oddBg

            return (
              <tr
                key={rIndex}
                style={styles.tr(backgroundColor)}
                {...row.getRowProps()}
              >
                {row.cells.map((cell, cIndex) => (
                  <td
                    key={cIndex}
                    style={styles.td(cIndex)}
                    {...cell.getCellProps()}
                  >
                    {cIndex % 3 === 0 && (
                      <>
                        <Checkbox
                          colorScheme="gray"
                          style={styles.checkbox(checkboxBorder)}
                          isChecked={checkedItems[rIndex]}
                          onChange={e =>
                            handleSelection(e.target.checked, rIndex)
                          }
                        />

                        {aboveThreshold &&
                          (tasks[rIndex].isDone ? (
                            <Checked
                              style={{ cursor: "pointer" }}
                              onClick={() => toggleTask(rIndex)}
                            />
                          ) : (
                            <Unchecked
                              style={{ cursor: "pointer" }}
                              onClick={() => toggleTask(rIndex)}
                            />
                          ))}
                      </>
                    )}
                    <Text
                      style={{ marginLeft: aboveThreshold ? 15 : 0 }}
                      isTruncated
                    >
                      {cell.render("Cell")}
                    </Text>
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>

      <TablePaginationControl
        nextPage={nextPage}
        pageIndex={pageIndex}
        pageCount={pageCount}
        canNextPage={canNextPage}
        previousPage={previousPage}
        canPreviousPage={canPreviousPage}
      />

      <BottomToast
        open={open}
        setOpen={setOpen}
        toggleSelection={toggleAllItems}
        tasks={tasks.filter((_, index) => checkedItems[index])}
        taskCount={checkedItems.filter(Boolean).length}
      />
    </div>
  )
}
