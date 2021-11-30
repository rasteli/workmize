import { useCombobox } from "downshift"
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

export interface ComboboxProps {
  items: any[]
  gap?: number
  inputSize: "xs" | "sm" | "md" | "lg"
}

export function Combobox({ items, inputSize, gap }: ComboboxProps) {
  const color = useColorModeValue("#22242E", "#FFFFFF")
  const backgroundColor = useColorModeValue("#EDF2F7", "#0F1016")

  const Check = useColorModeValue(CheckLight, CheckDark)
  const Arrow = useColorModeValue(ArrowLight, ArrowDark)

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
    <div style={{ marginBottom: gap }}>
      <Label value="Permissão" required {...getLabelProps()} />
      {!isOpen ? (
        <div {...getComboboxProps()}>
          <InputGroup {...getToggleButtonProps()}>
            <Input
              size={inputSize}
              value={selectedItem}
              color={color}
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
        <ul
          {...getMenuProps()}
          style={styles.comboboxMenuStyle(color, backgroundColor)}
        >
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                opacity: selectedItem === item ? 1 : 0.6
              }}
              {...getItemProps({ item, index })}
            >
              {selectedItem === item && <Check />}
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
