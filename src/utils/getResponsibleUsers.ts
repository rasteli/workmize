import { User } from "../contexts/AuthContext"

export function getResponsibleUsers(users: User[], selectedUsers: boolean[]) {
  const responsible = users.filter((_, index) => {
    return selectedUsers[index]
  })

  return responsible
}
