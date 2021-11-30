import { Checkbox } from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { UserImage } from "../UserImage"
import { User } from "../../contexts/AuthContext"

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
  const borderColor = useColorModeValue("#000", "#FFFFFF")

  return (
    <li style={styles.item}>
      <Checkbox
        colorScheme="gray"
        isChecked={checked}
        style={styles.checkbox(borderColor)}
        onChange={e => toggleItem(e.target.checked, index)}
      />
      <UserImage
        src={`https://hiring-api.workmize.com/${user.avatar}`}
        size={25}
      />
      <p style={styles.p}>{user.name}</p>
    </li>
  )
}
