import { useCombobox } from "downshift"
import { ScaleFade } from "@chakra-ui/transition"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { InputGroup, InputRightElement } from "@chakra-ui/input"

import { styles } from "./styles"

import { Input } from "../Input"
import { Label } from "../Label"
import { useCustomCombobox } from "../../contexts/ComboboxContext"

import CheckDark from "../../assets/check_dark.svg"
import CheckLight from "../../assets/check_light.svg"

import ArrowDark from "../../assets/arrow_dark.svg"
import ArrowLight from "../../assets/arrow_light.svg"

import SearchDark from "../../assets/search_dark.svg"
import SearchLight from "../../assets/search_light.svg"

export interface ComboboxProps {
  items: any[]
  label: string
  gap?: number
  placeholder?: string
  searchable?: boolean
  defaultAction?: boolean
  inputSize?: "xs" | "sm" | "md" | "lg"
  onClick?: React.MouseEventHandler<HTMLLIElement>
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed"
}

export function Combobox({
  gap,
  items,
  label,
  onClick,
  inputSize,
  searchable,
  placeholder,
  defaultAction,
  position
}: ComboboxProps) {
  const color = useColorModeValue("#22242E", "#718086")
  const backgroundColor = useColorModeValue("#EDF2F7", "#0F1016")

  const Check = useColorModeValue(CheckLight, CheckDark)
  const Arrow = useColorModeValue(ArrowLight, ArrowDark)
  const Search = useColorModeValue(SearchLight, SearchDark)

  const { setComboboxValue } = useCustomCombobox()

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
      <Label value={label} required {...getLabelProps()} />
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
          style={styles.comboboxMenuStyle(color, backgroundColor, position)}
          {...getMenuProps()}
        >
          {searchable && (
            <div style={styles.searchInput}>
              <Search />
              <Input placeholder="Buscar" _focus={{ boxShadow: "none" }} />
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
