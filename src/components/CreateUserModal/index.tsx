import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { Modal } from "../Modal"
import { UserForm } from "../UserForm"
import { UserImage } from "../UserImage"
import { useAuth } from "../../contexts/AuthContext"

import User from "../../assets/user.svg"

interface CreateUserModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateUserModal({ open, setOpen }: CreateUserModalProps) {
  const { signUp, createLoading } = useAuth()
  const containerBg = useColorModeValue("#F7FAFC", "#171923")

  if (!open) return null

  return (
    <Modal
      setOpen={setOpen}
      header={
        <>
          <User />
          <h1 style={{ marginLeft: 10 }}>Criar usuário</h1>
        </>
      }
    >
      <div style={styles.container(containerBg)}>
        <h1>Dados do seu usuário</h1>
        <div style={styles.imageWrapper}>
          <UserImage
            src="https://avatars.githubusercontent.com/u/59903124?v=4"
            size={110}
          />
        </div>
        <UserForm
          type="signup"
          buttonLabel="Criar usuário"
          onSubmit={signUp}
          buttonIsLoading={createLoading}
        />
      </div>
    </Modal>
  )
}
