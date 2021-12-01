import { useCombobox } from "downshift"
import { ScaleFade } from "@chakra-ui/transition"
import { InputGroup, InputRightElement } from "@chakra-ui/react"

import { styles } from "./styles"

import { Input } from "../Input"
import { Label } from "../Label"
import { useCustomCombobox } from "../../contexts/ComboboxContext"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

export interface ComboboxProps {
  items: any[]
  label: string
  gap?: number
  required?: boolean
  placeholder?: string
  searchable?: boolean
  defaultAction?: boolean
  inputSize?: "xs" | "sm" | "md" | "lg"
  onClick?: React.MouseEventHandler<HTMLLIElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed"
}

export function Combobox({
  gap,
  items,
  label,
  onClick,
  onChange,
  required,
  inputSize,
  searchable,
  placeholder,
  defaultAction,
  position
}: ComboboxProps) {
  const { setComboboxValue } = useCustomCombobox()
  const {
    cal_textColor,
    cal_bgColor,
    Arrow,
    Check,
    Search
  } = useWorkmizeColorMode()

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getComboboxProps,
    getItemProps,
    selectedItem,
    getInputProps
  } = useCombobox({
    items,
    onInputValueChange: ({ inputValue }) => {
      setComboboxValue(inputValue)
    }
  })

  return (
    <div style={{ marginBottom: gap, position: "relative" }}>
      <Label value={label} required={required} {...getLabelProps()} />
      {!isOpen ? (
        <div {...getComboboxProps()}>
          <InputGroup {...getToggleButtonProps()}>
            <Input
              size={inputSize}
              value={selectedItem}
              color="#718086"
              placeholder={placeholder}
              readOnly
              {...getInputProps()}
            />

            <InputRightElement>
              <button aria-label="toggle menu">
                <Arrow />
              </button>
            </InputRightElement>
          </InputGroup>
        </div>
      ) : (
        <ScaleFade
          in={isOpen}
          style={styles.comboboxMenuStyle(cal_textColor, cal_bgColor, position)}
          {...getMenuProps()}
        >
          {searchable && (
            <div style={styles.searchInput}>
              <Search />
              <Input
                placeholder="Buscar"
                _focus={{ boxShadow: "none" }}
                onChange={onChange}
              />
            </div>
          )}

          {items.map((item, index) => (
            <li
              key={index}
              onClick={
                defaultAction ? getItemProps({ item, index }).onClick : onClick
              }
              style={{
                ...styles.item,
                opacity: selectedItem === item ? 1 : 0.6
              }}
            >
              {selectedItem === item && <Check />}
              {item}
            </li>
          ))}
        </ScaleFade>
      )}
    </div>
  )
}
