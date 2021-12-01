import { createContext, useContext, useEffect, useState } from "react"
import { ApolloQueryResult, useMutation, useQuery } from "@apollo/client"

import { useAuth, User } from "./AuthContext"

import {
  CREATE_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TOGGLE_TASK
} from "../GraphQL/mutations"
import { GET_TASKS, GET_USERS } from "../GraphQL/queries"

interface TaskProviderProps {
  children: React.ReactNode
}

export interface Task {
  id: string
  name: string
  isDone: boolean
  completionDate: string
  users: User[]
}

interface CreateTaskArgs {
  name: string
  responsible: string[]
}

interface UpdateTaskArgs extends CreateTaskArgs {
  taskId: string
  isDone: boolean
  completionDate: string
}

interface Setters {
  setUserSearch: React.Dispatch<React.SetStateAction<string>>
  setUserLimit: React.Dispatch<React.SetStateAction<number>>
  setCompletionDate: React.Dispatch<React.SetStateAction<moment.Moment>>

  setTaskSearch: React.Dispatch<React.SetStateAction<string>>
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>
}

interface CompletionMessage {
  text: string
  type: "success" | "error"
}

interface TaskContextData {
  tasks: Task[]
  users: User[]
  message: CompletionMessage
  completionDate: moment.Moment

  userLoading: boolean
  taskLoading: boolean
  createLoading: boolean
  updateLoading: boolean
  deleteLoading: boolean

  sortTasks(): void
  deleteTask(taskId: string): Promise<void>
  createTask(args: CreateTaskArgs): Promise<void>
  updateTask(args: UpdateTaskArgs): Promise<void>
  toggleTaskCompletion(taskId: string): Promise<void>
  taskRefetch(
    variables?: Partial<{
      filterBy: string
      search: string
    }>
  ): Promise<ApolloQueryResult<any>>

  setters: Setters
}

const TaskContext = createContext({} as TaskContextData)

export function useTask() {
  return useContext(TaskContext)
}

export function TaskProvider({ children }: TaskProviderProps) {
  const { user } = useAuth()

  const [tasks, setTasks] = useState<Task[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [completionDate, setCompletionDate] = useState<moment.Moment>()

  const [message, setMessage] = useState<CompletionMessage>()

  const [userLimit, setUserLimit] = useState(7)
  const [userSearch, setUserSearch] = useState("")

  const [taskSearch, setTaskSearch] = useState("")
  const [taskFilter, setTaskFilter] = useState("ALL")

  const {
    refetch: userRefetch,
    loading: userLoading,
    data: userData
  } = useQuery(GET_USERS, {
    variables: {
      limit: userLimit,
      search: userSearch
    },

    onCompleted: data => {
      if (user) setUsers(data.getUsers.nodes)
    }
  })

  const { refetch: taskRefetch, loading: taskLoading, data } = useQuery(
    GET_TASKS,
    {
      variables: {
        filterBy: taskFilter
      }
    }
  )

  const [toggleTask] = useMutation(TOGGLE_TASK)
  const [addTask, { loading: createLoading }] = useMutation(CREATE_TASK)
  const [editTask, { loading: updateLoading }] = useMutation(UPDATE_TASK)
  const [removeTask, { loading: deleteLoading }] = useMutation(DELETE_TASK)

  useEffect(() => {
    userRefetch()
  })

  useEffect(() => {
    function setTasksBySearch() {
      if (user && data) {
        const tasks = data.getTasks.nodes

        setTasks(() => {
          if (!taskSearch) return tasks

          const searchedTasks = tasks.filter((task: Task) => {
            return task.name.startsWith(taskSearch)
          })

          return searchedTasks
        })
      }
    }

    setTasksBySearch()
  }, [user, taskSearch, data])

  function sortTasks() {
    const tasksCopy = [...tasks]
    tasksCopy.sort((a, b) => (a < b ? 1 : -1))

    setTasks(tasksCopy)
  }

  async function deleteTask(taskId: string) {
    await removeTask({
      variables: {
        taskId
      }
    })

    await taskRefetch()
  }

  async function toggleTaskCompletion(taskId: string) {
    await toggleTask({
      variables: {
        taskId
      }
    })

    await taskRefetch()
  }

  async function createTask({ name, responsible }: CreateTaskArgs) {
    try {
      await addTask({
        variables: {
          name,
          responsible,
          completionDate: completionDate.format()
        }
      })

      await taskRefetch()
      setMessage({ text: "Tarefa criada com sucesso!", type: "success" })
    } catch {
      setMessage({ text: "Error ao criar tarefa!", type: "error" })
    }
  }

  async function updateTask({
    name,
    taskId,
    isDone,
    responsible,
    completionDate
  }: UpdateTaskArgs) {
    try {
      await editTask({
        variables: {
          name,
          taskId,
          isDone,
          responsible,
          completionDate
        }
      })

      await taskRefetch()
      setMessage({ text: "Tarefa editada com sucesso!", type: "success" })
    } catch {
      setMessage({ text: "Error ao editar tarefa!", type: "error" })
    }
  }

  const value: TaskContextData = {
    tasks,
    users,
    message,
    completionDate,

    userLoading,
    taskLoading,
    createLoading,
    updateLoading,
    deleteLoading,

    sortTasks,
    deleteTask,
    createTask,
    updateTask,
    taskRefetch,
    toggleTaskCompletion,

    setters: {
      setUserLimit,
      setUserSearch,
      setCompletionDate,

      setTaskFilter,
      setTaskSearch
    }
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
