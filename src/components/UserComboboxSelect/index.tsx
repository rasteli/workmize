import { Checkbox } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { UserImage } from "../UserImage"
import { User } from "../../contexts/AuthContext"

interface UserComboboxSelect {
  user: User
  index: number
  checked: boolean
  onToggle?: () => void
  toggleItem(checked: boolean, index: number): void
}

export function UserComboboxSelect({
  user,
  index,
  checked,
  onToggle,
  toggleItem
}: UserComboboxSelect) {
  const borderColor = useColorModeValue("#000", "#FFFFFF")

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    toggleItem(e.target.checked, index)

    if (ontoggle) onToggle()
  }

  return (
    <li style={styles.item}>
      <Checkbox
        colorScheme="gray"
        isChecked={checked}
        onChange={handleChange}
        style={styles.checkbox(borderColor)}
      />
      <UserImage src={user.avatar} size={25} />
      <p style={styles.p}>{user.name}</p>
    </li>
  )
}
