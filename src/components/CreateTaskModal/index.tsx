import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { Modal } from "../Modal"
import { Label } from "../Label"
import { Input } from "../Input"
import { Button } from "../Button"
import { Combobox } from "../Combobox"
import { Calendar } from "../Calendar"
// import { useAuth } from "../../contexts/AuthContext"

import Check from "../../assets/check.svg"

import UserDark from "../../assets/user.svg"
import UserLight from "../../assets/user_light.svg"

import TaskDark from "../../assets/task_dark.svg"
import TaskLight from "../../assets/task_light.svg"

import DateDark from "../../assets/date_dark.svg"
import DateLight from "../../assets/date_light.svg"

interface CreateTaskModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateTaskModal({ open, setOpen }: CreateTaskModalProps) {
  const items = ["User1", "User2", "User3", "User4"]

  const User = useColorModeValue(UserLight, UserDark)
  const Task = useColorModeValue(TaskLight, TaskDark)
  const Date = useColorModeValue(DateLight, DateDark)

  if (!open) return null

  return (
    <Modal
      setOpen={setOpen}
      header={
        <>
          <Check />
          <h1 style={{ marginLeft: 10 }}>Nova tarefa</h1>
        </>
      }
    >
      <form style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.inputBlock(15)}>
          <Label value="Nome" />
          <Input placeholder="Nome da tarefa" />
        </div>
        <div style={styles.inputBlock(15)}>
          <Combobox
            label="Responsáveis"
            items={items}
            placeholder="Nome da tarefa"
          />
        </div>
        <div style={styles.inputBlock(15)}>
          <Label value="Entrega" />
          <Calendar placeholder="Selecione ou digite uma data" />
        </div>

        <Button label="Criar tarefa" type="submit" />
      </form>
    </Modal>
  )
}
