import { Checkbox } from "@chakra-ui/react"

import { styles } from "./styles"

import { UserImage } from "../UserImage"
import { User } from "../../contexts/AuthContext"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

interface UserComboboxSelect {
  user: User
  index: number
  checked: boolean
  toggleItem(checked: boolean, index: number): void
}

export function UserComboboxSelect({
  user,
  index,
  checked,
  toggleItem
}: UserComboboxSelect) {
  const { usrCombo_borderColor } = useWorkmizeColorMode()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    toggleItem(e.target.checked, index)
  }

  return (
    <li style={styles.item}>
      <Checkbox
        colorScheme="gray"
        isChecked={checked}
        onChange={handleChange}
        style={styles.checkbox(usrCombo_borderColor)}
      />
      <UserImage src={user.avatar} size={25} />
      <p style={styles.p}>{user.name}</p>
    </li>
  )
}
