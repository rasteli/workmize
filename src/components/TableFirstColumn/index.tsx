import { useState, useEffect } from "react"
import { Checkbox, IconButton, Input } from "@chakra-ui/react"

import Order from "../../assets/order.svg"
import Search from "../../assets/search.svg"

import { styles } from "./styles"

import { useViewport } from "../../hooks/useViewport"
import { useTask } from "../../contexts/TaskContext"

interface TableFirstColumnProps {
  allChecked: boolean
  checkboxStyles: React.CSSProperties
  onChange(event: React.ChangeEvent<HTMLInputElement>): void
}

export function TableFirstColumn({
  allChecked,
  checkboxStyles,
  onChange
}: TableFirstColumnProps) {
  const {
    sortTasks,
    setters: { setTaskSearch }
  } = useTask()

  const { aboveThreshold } = useViewport(1230)
  const [order, setOrder] = useState(false)
  const [search, setSearch] = useState(false)

  const rotateInDeg = order ? "-180" : "0"
  const searchInputWIdth = aboveThreshold ? "15%" : "50%"
  const searchPosition = aboveThreshold ? { left: 160 } : { top: 15, right: 20 }

  function closeSearch() {
    if (search) {
      setSearch(false)
      setTaskSearch("")
    }
  }

  function toggleSortTasks() {
    setOrder(!order)
    sortTasks()
  }

  return (
    <div
      style={{
        ...styles.container
      }}
      onClick={closeSearch}
    >
      <Checkbox
        colorScheme="gray"
        isChecked={allChecked}
        style={checkboxStyles}
        onChange={onChange}
      />
      <div style={{ color: "#805AD5" }}>
        Tarefa
        <IconButton
          icon={<Order />}
          aria-label="Order tasks"
          background="none"
          style={{ transform: `rotate(${rotateInDeg}deg)` }}
          onClick={toggleSortTasks}
          _hover={{ background: "none" }}
          _focus={{ boxShadow: "none" }}
        />
      </div>
      {!search ? (
        <IconButton
          icon={<Search />}
          aria-label="Search task"
          background="none"
          onClick={() => setSearch(true)}
          style={{ ...styles.searchButton, ...searchPosition }}
          _hover={{ background: "none" }}
          _focus={{ boxShadow: "none" }}
        />
      ) : (
        <Input
          placeholder="Buscar..."
          style={{
            ...searchPosition,
            ...styles.searchInput,
            width: searchInputWIdth
          }}
          autoFocus
          onChange={e => setTaskSearch(e.target.value)}
          _focus={{ borderColor: "#A0AEC0", position: "absolute" }}
        />
      )}
    </div>
  )
}
