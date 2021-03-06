import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton
} from "@chakra-ui/react"
import { useState, useEffect } from "react"

import { Toast } from "../Toast"
import { Label } from "../Label"
import { Button } from "../Button"
import { Combobox } from "../Combobox"
import { Calendar } from "../Calendar"
import { formatDate } from "../../utils/formateDate"
import { useCheckbox } from "../../hooks/useCheckbox"
import { useTask, Task } from "../../contexts/TaskContext"
import { UserComboboxSelect } from "../UserComboboxSelect"
import { getSelectedUsers } from "../../utils/getSelectedUsers"
import { useWorkmizeColorMode } from "../../hooks/useWorkmizeColorMode"

import { styles } from "./styles"

import Chevron from "../../assets/chevron.svg"
import Checked from "../../assets/check_checked.svg"
import Unchecked from "../../assets/check_unchecked.svg"

export interface DrawerProps {
  task: Task
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Drawer({ task, open, setOpen }: DrawerProps) {
  const {
    users,
    toggleTaskCompletion,
    updateTask,
    completionDate,
    message
  } = useTask()
  const [name, setName] = useState(task?.name)
  const [disabled, setDisabled] = useState(true)
  const [toastOpen, setToastOpen] = useState(false)

  const [checkedItems, toggleItem] = useCheckbox(users)
  const selectedUsers = getSelectedUsers(users, checkedItems)
  const {
    dra_headerBg,
    dra_containerBg,
    dra_closeButtonBg
  } = useWorkmizeColorMode()

  useEffect(() => {
    if (name !== task?.name || checkedItems.some(Boolean) || completionDate) {
      setDisabled(false)
    }
  }, [task, name, selectedUsers, completionDate, checkedItems])

  if (!task) return null

  const responsibleIds = task.users.map(user => user.id)

  const items = users.map((user, index) => (
    <UserComboboxSelect
      key={user.id}
      user={user}
      index={index}
      toggleItem={toggleItem}
      checked={responsibleIds.includes(user.id) || checkedItems[index]}
    />
  ))

  function close() {
    setOpen(false)
  }

  async function toggleTask() {
    await toggleTaskCompletion(task.id)
  }

  async function handleSave() {
    await updateTask({
      name,
      taskId: task.id,
      isDone: task.isDone,
      completionDate: completionDate?.format() || task.completionDate,
      responsible: [...responsibleIds, ...selectedUsers.map(user => user.id)]
    })

    setDisabled(true)
    setToastOpen(true)
  }

  return (
    <ChakraDrawer
      isOpen={open}
      placement="right"
      onClose={close}
      variant="customWidth"
    >
      <DrawerOverlay />
      <DrawerContent style={styles.container(dra_containerBg)}>
        {message && (
          <Toast
            open={toastOpen}
            setOpen={setToastOpen}
            variant={message.type}
            message={message.text}
          />
        )}

        <IconButton
          icon={<Chevron />}
          aria-label="close button"
          style={styles.closeButton(dra_closeButtonBg)}
          onClick={close}
        />

        <DrawerHeader style={styles.drawerHeader(dra_headerBg)}>
          Visualizar tarefa
        </DrawerHeader>

        <DrawerBody style={styles.drawerBody}>
          <div>
            {task.isDone ? (
              <Checked style={styles.checked} onClick={toggleTask} />
            ) : (
              <Unchecked style={styles.checked} onClick={toggleTask} />
            )}
            <textarea
              className="task"
              rows={3}
              style={styles.textarea}
              onChange={e => setName(e.target.value)}
              defaultValue={task.name}
            />
          </div>

          <div style={styles.inputBlock}>
            <Combobox
              items={items}
              defaultAction={false}
              label="Respons??veis"
              position="absolute"
              placeholder={`${task.users.map(
                user => user.name
              )}, ${selectedUsers.map(user => user.name)} `}
            />
          </div>

          <div style={styles.inputBlock}>
            <Label value="Entrega" />
            <Calendar placeholder={formatDate(task.completionDate)} fullWidth />
          </div>

          <Button
            label="Salvar"
            isFullWidth
            marginTop={20}
            disabled={disabled}
            onClick={handleSave}
          />
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
