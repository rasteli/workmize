import { useState } from "react"
import { Checkbox, IconButton, Input } from "@chakra-ui/react"

import Order from "../../assets/order.svg"
import Search from "../../assets/search.svg"

import { styles } from "./styles"

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
  const [order, setOrder] = useState(false)
  const [search, setSearch] = useState(false)

  const rotateInDeg = order ? "-180" : "0"

  return (
    <div style={styles.container} onClick={() => search && setSearch(false)}>
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
          onClick={() => setOrder(!order)}
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
          style={styles.searchButton}
          _hover={{ background: "none" }}
          _focus={{ boxShadow: "none" }}
        />
      ) : (
        <Input
          placeholder="Buscar..."
          style={styles.searchInput}
          autoFocus
          _focus={{ borderColor: "#A0AEC0" }}
        />
      )}
    </div>
  )
}
