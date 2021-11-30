import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"

import { Modal } from "../Modal"
import { Label } from "../Label"
import { Input } from "../Input"
import { Button } from "../Button"
import { Combobox } from "../Combobox"
import { Calendar } from "../Calendar"
import { useTask } from "../../contexts/TaskContext"
import { useCheckbox } from "../../hooks/useCheckbox"
import { UserComboboxSelect } from "../UserComboboxSelect"

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
  const { users } = useTask()
  const [checkedItems, toggleItem] = useCheckbox(users)

  const items = users.map((user, index) => (
    <UserComboboxSelect
      key={user.id}
      user={user}
      index={index}
      toggleItem={toggleItem}
      checked={checkedItems[index]}
    />
  ))

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
      <form style={styles.form}>
        <div style={styles.inputBlock(15)}>
          <Label value="Nome" />
          <Input placeholder="Nome da tarefa" />
        </div>
        <div style={styles.inputBlock(15)}>
          <Combobox
            searchable
            items={items}
            defaultAction={false}
            label="Responsáveis"
            position="absolute"
            placeholder="Adicione um ou vários"
          />
        </div>
        <div style={styles.inputBlock(15)}>
          <Label value="Entrega" />
          <Calendar placeholder="Selecione ou digite uma data" fullWidth />
        </div>

        <Button label="Criar tarefa" type="submit" />
      </form>
    </Modal>
  )
}
