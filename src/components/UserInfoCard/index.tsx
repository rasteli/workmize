import { SlideFade, Box } from "@chakra-ui/react"

import { styles } from "./styles"
import Logoff from "../../assets/logoff.svg"
import { useAuth } from "../../contexts/AuthContext"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

interface UserInfoCardProps {
  open: boolean
}

export function UserInfoCard({ open }: UserInfoCardProps) {
  const { user, logOut } = useAuth()
  const { dra_containerBg } = useWorkmizeColorMode()

  if (!open) return null

  return (
    <SlideFade in={open}>
      <Box
        style={styles.container(dra_containerBg)}
        _after={styles.containerAfter}
      >
        <p style={styles.name}>{user.name}</p>
        <p style={styles.email}>{user.email}</p>
        <hr />
        <button style={styles.logoffButton} onClick={logOut}>
          <Logoff style={styles.logoffIcon} />
          Fazer logoff
        </button>
      </Box>
    </SlideFade>
  )
}
