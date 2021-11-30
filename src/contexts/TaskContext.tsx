import { useMutation, useQuery } from "@apollo/client"
import { createContext, useContext, useState } from "react"

import { useAuth, User } from "./AuthContext"

import { GET_TASKS } from "../GraphQL/queries"
import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK
} from "../GraphQL/mutations"

interface TaskProviderProps {
  children: React.ReactNode
}

interface Task {
  name: string
  taskId: string
  isDone: boolean
  completionData: string
  users: User[]
}

interface CreateTaskArgs {
  name: string
  responsible: string[]
  completionDate: Date
}

interface UpdateTaskArgs extends CreateTaskArgs {
  taskId: string
  isDone: boolean
}

interface TaskContextData {
  tasks: Task[]

  createLoading: boolean
  updateLoading: boolean
  deleteLoading: boolean

  deleteTask(taskId: string): Promise<void>
  createTask(args: CreateTaskArgs): Promise<void>
  updateTask(args: UpdateTaskArgs): Promise<void>
  toggleTaskCompletion(taskId: string): Promise<void>
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

const TaskContext = createContext({} as TaskContextData)

export function useTask() {
  return useContext(TaskContext)
}

export function TaskProvider({ children }: TaskProviderProps) {
  const { user } = useAuth()

  const [filter, setFilter] = useState("ALL")
  const [tasks, setTasks] = useState<Task[]>([])

  const { refetch } = useQuery(GET_TASKS, {
    variables: {
      filterBy: filter
    },

    onCompleted: data => {
      if (user) setTasks(data.getTasks.nodes)
    }
  })

  const [toggleTask] = useMutation(TOGGLE_TASK, {
    onCompleted: refetchTasks
  })
  const [addTask, { loading: createLoading }] = useMutation(CREATE_TASK, {
    onCompleted: refetchTasks
  })
  const [editTask, { loading: updateLoading }] = useMutation(UPDATE_TASK, {
    onCompleted: refetchTasks
  })
  const [removeTask, { loading: deleteLoading }] = useMutation(DELETE_TASK, {
    onCompleted: refetchTasks
  })

  async function refetchTasks() {
    await refetch()
  }

  async function deleteTask(taskId: string) {
    await removeTask({
      variables: {
        taskId
      }
    })
  }

  async function toggleTaskCompletion(taskId: string) {
    await toggleTask({
      variables: {
        taskId
      }
    })
  }

  async function createTask({
    name,
    responsible,
    completionDate
  }: CreateTaskArgs) {
    await addTask({
      variables: {
        name,
        responsible,
        completionDate
      }
    })
  }

  async function updateTask({
    name,
    taskId,
    isDone,
    responsible,
    completionDate
  }: UpdateTaskArgs) {
    await editTask({
      variables: {
        name,
        taskId,
        isDone,
        responsible,
        completionDate
      }
    })
  }

  const value: TaskContextData = {
    tasks,

    createLoading,
    updateLoading,
    deleteLoading,

    setFilter,
    deleteTask,
    createTask,
    updateTask,
    toggleTaskCompletion
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
