import { useCombobox } from "downshift"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { InputGroup, InputRightElement } from "@chakra-ui/input"

import { Input } from "../Input"
import { Label } from "../Label"

import CheckDark from "../../assets/check_dark.svg"
import CheckLight from "../../assets/check_light.svg"

import ArrowDark from "../../assets/arrow_dark.svg"
import ArrowLight from "../../assets/arrow_light.svg"

export interface ComboboxProps {
  items: any[]
}

export function Combobox({ items }: ComboboxProps) {
  const color = useColorModeValue("#22242E", "#FFFFFF")
  const backgroundColor = useColorModeValue("#EDF2F7", "#0F1016")

  const Check = useColorModeValue(CheckLight, CheckDark)
  const Arrow = useColorModeValue(ArrowLight, ArrowDark)

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
    items
    // onInputValueChange: ({ inputValue }) => {
    //   setInputItems(
    //     items.filter(item =>
    //       item.toLowerCase().startsWith(inputValue.toLowerCase())
    //     )
    //   )
    // }
  })

  const comboboxMenuStyle: React.CSSProperties = {
    color,
    backgroundColor,
    padding: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "#CBD5E0",
    listStyleType: "none"
  }

  return (
    <div>
      <Label value="Permissão" required {...getLabelProps()} />
      {!isOpen ? (
        <div {...getComboboxProps()}>
          <InputGroup {...getToggleButtonProps()}>
            <Input
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
        <ul {...getMenuProps()} style={comboboxMenuStyle}>
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
