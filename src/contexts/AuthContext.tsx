import { useMutation, useQuery } from "@apollo/client"
import { createContext, useContext, useState } from "react"

import { LOGIN_USER } from "../GraphQL/mutations"
import { CREATE_USER } from "../GraphQL/mutations"
import { GET_CURRENT_USER } from "../GraphQL/queries"

export interface CompletionMessage {
  text: string
  type: "success" | "error"
}

interface AuthenticationArgs {
  role: string
  email: string
  password: string
}

interface SingUpArgs extends AuthenticationArgs {
  name: string
  companyId: string
}

export type LogInFunction = (args: AuthenticationArgs) => Promise<void>
export type SignUpFunction = ({ name, companyId }: SingUpArgs) => Promise<void>

interface AuthContextProviderProps {
  children: React.ReactNode
}

export interface User {
  id: string
  name: string
  role: string
  email: string
  avatar: string
}

interface AuthContextData {
  user: User | null
  message: CompletionMessage

  logIn: LogInFunction
  signUp: SignUpFunction
  logOut(): Promise<void>

  userIsAdmin: boolean
  userLoading: boolean
  loginLoading: boolean
  createLoading: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [message, setMessage] = useState<CompletionMessage>()

  const [createUser, { loading: createLoading }] = useMutation(CREATE_USER, {
    onError: () => {
      setMessage({ text: "Erro ao criar usuário!", type: "error" })
    }
  })

  const { client, refetch, loading: userLoading } = useQuery(GET_CURRENT_USER, {
    onCompleted: data => {
      setUser(data.whoAmI)
    },
    onError: error => {
      console.log(error.message)
    }
  })

  const [loginUser, { loading: loginLoading }] = useMutation(LOGIN_USER, {
    onCompleted: async data => {
      localStorage.setItem("@workmize:token", data.signIn.token)
      await refetch()
    },
    onError: () => {
      setMessage({
        text: "Email ou senha inválidos, tente novamente.",
        type: "error"
      })
    }
  })

  async function signUp({
    name,
    email,
    password,
    companyId,
    role
  }: SingUpArgs) {
    await createUser({
      variables: {
        name,
        email,
        password,
        role,
        companyId
      }
    })

    logIn({ email, password, role })
  }

  async function logIn({ email, password, role }: AuthenticationArgs) {
    await loginUser({
      variables: {
        email,
        password,
        role
      }
    })
  }

  async function logOut() {
    setUser(null)

    await client.resetStore()
    localStorage.removeItem("@workmize:token")
  }

  const value: AuthContextData = {
    user,
    message,

    logIn,
    signUp,
    logOut,

    userLoading,
    loginLoading,
    createLoading,
    userIsAdmin: user?.role === "ADMIN"
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
