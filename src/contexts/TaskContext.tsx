import { useMutation, useQuery } from "@apollo/client"
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback
} from "react"

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

interface Task {
  name: string
  taskId: string
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
}

interface Setters {
  setUserSearch: React.Dispatch<React.SetStateAction<string>>
  setUserLimit: React.Dispatch<React.SetStateAction<number>>
  setCompletionDate: React.Dispatch<React.SetStateAction<moment.Moment>>

  setTaskSkip: React.Dispatch<React.SetStateAction<number>>
  setTaskSearch: React.Dispatch<React.SetStateAction<string>>
  setTaskFilter: React.Dispatch<React.SetStateAction<string>>
}

interface TaskContextData {
  tasks: Task[]
  users: User[]
  completionDate: moment.Moment

  userLoading: boolean
  taskLoading: boolean
  createLoading: boolean
  updateLoading: boolean
  deleteLoading: boolean

  deleteTask(taskId: string): Promise<void>
  createTask(args: CreateTaskArgs): Promise<void>
  updateTask(args: UpdateTaskArgs): Promise<void>
  toggleTaskCompletion(taskId: string): Promise<void>

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

  const [userLimit, setUserLimit] = useState(7)
  const [userSearch, setUserSearch] = useState("")

  const [taskSkip, setTaskSkip] = useState(0)
  const [taskSearch, setTaskSearch] = useState("")
  const [taskFilter, setTaskFilter] = useState("ALL")

  const { refetch: userRefetch, loading: userLoading } = useQuery(GET_USERS, {
    variables: {
      limit: userLimit,
      search: userSearch
    },

    onCompleted: data => {
      if (user) setUsers(data.getUsers.nodes)
    },
    onError: error => {
      console.log(error.message)
    }
  })

  const { refetch: taskRefetch, loading: taskLoading } = useQuery(GET_TASKS, {
    variables: {
      filterBy: taskFilter,
      search: taskSearch,
      skip: taskSkip
    },

    onCompleted: data => {
      if (user) setTasks(data.getTasks.nodes)
    },
    onError: error => {
      console.log(error.message)
    }
  })

  const [toggleTask] = useMutation(TOGGLE_TASK)
  const [addTask, { loading: createLoading }] = useMutation(CREATE_TASK)
  const [editTask, { loading: updateLoading }] = useMutation(UPDATE_TASK)
  const [removeTask, { loading: deleteLoading }] = useMutation(DELETE_TASK)

  useEffect(() => {
    userRefetch()
  })

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

  async function createTask({ name, responsible }: CreateTaskArgs) {
    await addTask({
      variables: {
        name,
        responsible,
        completionDate: completionDate.format()
      }
    })
  }

  async function updateTask({
    name,
    taskId,
    isDone,
    responsible
  }: UpdateTaskArgs) {
    await editTask({
      variables: {
        name,
        taskId,
        isDone,
        responsible,
        completionDate: completionDate.format()
      }
    })
  }

  const value: TaskContextData = {
    tasks,
    users,
    completionDate,

    userLoading,
    taskLoading,
    createLoading,
    updateLoading,
    deleteLoading,

    deleteTask,
    createTask,
    updateTask,
    toggleTaskCompletion,

    setters: {
      setUserLimit,
      setUserSearch,
      setCompletionDate,

      setTaskSkip,
      setTaskFilter,
      setTaskSearch
    }
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}
