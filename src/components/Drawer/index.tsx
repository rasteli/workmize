import "./textarea.css"

import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  IconButton
} from "@chakra-ui/react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { Label } from "../Label"
import { Combobox } from "../Combobox"
import { Calendar } from "../Calendar"
import { Task } from "../../contexts/TaskContext"
import { useTask } from "../../contexts/TaskContext"
import { useCheckbox } from "../../hooks/useCheckbox"
import { UserComboboxSelect } from "../UserComboboxSelect"

import { getResponsibleUsers } from "../../utils/getResponsibleUsers"

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
  const users = task.users

  const [checkedItems, toggleItem] = useCheckbox(users)
  const { toggleTaskCompletion, taskRefetch, updateTask } = useTask()

  const responsible = getResponsibleUsers(users, checkedItems)

  const taskProps = {
    name: task.name,
    isDone: task.isDone,
    taskId: task.id,
    responsible
  }

  const items = users.map((user, index) => (
    <UserComboboxSelect
      key={user.id}
      user={user}
      index={index}
      toggleItem={toggleItem}
      checked={checkedItems[index]}
      onToggle={() =>
        updateTask({
          ...taskProps,
          responsible: responsible.map(user => user.id)
        })
      }
    />
  ))

  const headerBg = useColorModeValue("#BCA8E9", "#31274F")
  const containerBg = useColorModeValue("#FFFFFF", "#171923")
  const closeButtonBg = useColorModeValue("#A0AEC0", "#464750")

  function close() {
    setOpen(false)
  }

  async function toggleTask() {
    await toggleTaskCompletion(task.id)
    await taskRefetch()
  }

  return (
    <ChakraDrawer
      isOpen={open}
      placement="right"
      onClose={close}
      variant="customWidth"
    >
      <DrawerOverlay />
      <DrawerContent style={styles.container(containerBg)}>
        <IconButton
          icon={<Chevron />}
          aria-label="close button"
          style={styles.closeButton(closeButtonBg)}
          onClick={close}
        />

        <DrawerHeader style={styles.header(headerBg)}>
          Visualizar tarefa
        </DrawerHeader>

        <DrawerBody>
          <div>
            {task.isDone ? (
              <Checked style={styles.checked} onClick={toggleTask} />
            ) : (
              <Unchecked style={styles.checked} onClick={toggleTask} />
            )}
            <textarea className="task" rows={3} style={styles.textarea}>
              {task.name}
            </textarea>
          </div>

          <div style={{ marginBottom: 20 }}>
            <Combobox
              searchable
              items={items}
              defaultAction={false}
              label="Responsáveis"
              position="absolute"
              placeholder={`${users.map(user => user.name)},`}
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <Label value="Entrega" />
            <Calendar placeholder="Selecione ou digite uma data" fullWidth />
          </div>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  )
}
