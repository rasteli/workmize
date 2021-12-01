import { IconButton } from "@chakra-ui/button"
import { SlideFade } from "@chakra-ui/transition"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "./styles"
import { useTask, Task } from "../../contexts/TaskContext"

import Trash from "../../assets/trash.svg"
import CheckDark from "../../assets/check_dark.svg"
import CheckLight from "../../assets/check_light.svg"
import Complete from "../../assets/check_unchecked.svg"

export interface BottomToastProps {
  tasks: Task[]
  open: boolean
  taskCount: number
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleSelection(checked: boolean): void
}

export function BottomToast({
  open,
  tasks,
  setOpen,
  taskCount,
  toggleSelection
}: BottomToastProps) {
  const { deleteTask, toggleTaskCompletion } = useTask()

  const Check = useColorModeValue(CheckLight, CheckDark)
  const mainBg = useColorModeValue("#FFFFFF", "#0F1016")
  const headerBg = useColorModeValue("#E2E8F0", "#464750")

  if (!open) return null

  const pluralOrSingularTitle =
    taskCount > 1 || taskCount === 0
      ? "tarefas selecionadas"
      : "tarefa selecionada"

  function clearSelection() {
    toggleSelection(false)
    setOpen(false)
  }

  async function resolve(promises: any[]) {
    await Promise.all(promises)
    clearSelection()
  }

  async function completeTasks() {
    const promises = []

    tasks.map(task => {
      if (!task.isDone) {
        promises.push(toggleTaskCompletion(task.id))
      }
    })

    await resolve(promises)
  }

  async function deleteTasks() {
    const promises = []

    tasks.map(task => {
      promises.push(deleteTask(task.id))
    })

    await resolve(promises)
  }

  return (
    <SlideFade in={open} style={styles.container}>
      <header style={styles.header(headerBg)}>
        <Check style={styles.check} />
        <p style={styles.title}>
          {taskCount} {pluralOrSingularTitle}
        </p>

        <button style={styles.button} onClick={() => toggleSelection(true)}>
          Selecionar tudo
        </button>
        <button style={styles.button} onClick={clearSelection}>
          Limpar
        </button>
      </header>
      <main style={styles.main(mainBg)}>
        <div style={styles.taskActionBlock("#48BB78")}>
          <IconButton
            icon={<Complete />}
            onClick={completeTasks}
            style={{
              ...styles.taskActionButton,
              filter:
                "invert(67%) sepia(50%) saturate(509%) hue-rotate(92deg) brightness(88%) contrast(80%)"
            }}
            aria-label="complete task"
            _focus={{ boxShadow: "none" }}
          />
          <p>Concluir</p>
        </div>

        <div style={styles.taskActionBlock("#F5565C")}>
          <IconButton
            icon={<Trash />}
            onClick={deleteTasks}
            style={styles.taskActionButton}
            aria-label="remove task"
            _focus={{ boxShadow: "none" }}
          />
          <p>Excluir</p>
        </div>
      </main>
    </SlideFade>
  )
}
