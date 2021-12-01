import { useState } from "react"

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

interface CreateTaskModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateTaskModal({ open, setOpen }: CreateTaskModalProps) {
  const { users, createTask, completionDate } = useTask()
  const [checkedItems, toggleItem] = useCheckbox(users)
  const [name, setName] = useState("")

  const items = users.map((user, index) => (
    <UserComboboxSelect
      key={user.id}
      user={user}
      index={index}
      toggleItem={toggleItem}
      checked={checkedItems[index]}
    />
  ))

  const responsible = users.filter((user, index) => {
    return checkedItems[index]
  })

  if (!open) return null

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await createTask({ name, responsible: responsible.map(user => user.id) })
    setOpen(false)
  }

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
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputBlock(15)}>
          <Label value="Nome" />
          <Input
            placeholder="Nome da tarefa"
            onChange={e => setName(e.target.value)}
          />
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
