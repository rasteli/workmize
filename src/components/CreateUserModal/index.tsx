import { styles } from "./styles"

import { Modal } from "../Modal"
import { Alert } from "../Alert"
import { UserForm } from "../UserForm"
import { UserImage } from "../UserImage"
import { useAuth } from "../../contexts/AuthContext"

import User from "../../assets/user.svg"

interface CreateUserModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateUserModal({ open, setOpen }: CreateUserModalProps) {
  const { signUp, createLoading, message } = useAuth()

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
      <h1>Dados do seu usuário</h1>
      <div style={styles.imageWrapper}>
        <UserImage src="no-photo.jpg" size={110} />
      </div>

      {message && <Alert label={message.text} variant={message.type} />}

      <UserForm
        type="signup"
        buttonLabel="Criar usuário"
        onSubmit={signUp}
        buttonIsLoading={createLoading}
      />
    </Modal>
  )
}
