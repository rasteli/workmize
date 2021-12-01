import { User } from "../contexts/AuthContext"

export function getSelectedUsers(users: User[], selected: boolean[]) {
  const selectedUsers = users.filter((_, index) => {
    return selected[index]
  })

  return selectedUsers
}
