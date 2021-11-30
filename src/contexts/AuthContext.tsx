import { useMutation, useQuery } from "@apollo/client"
import { createContext, useContext, useState } from "react"

import { LOGIN_USER } from "../GraphQL/mutations"
import { CREATE_USER } from "../GraphQL/mutations"
import { GET_CURRENT_USER } from "../GraphQL/queries"

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
  name: string
  role: string
  email: string
  avatar: string
}

interface AuthContextData {
  user: User | null

  logIn: LogInFunction
  signUp: SignUpFunction
  logOut(): Promise<void>

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
  const [createUser, { loading: createLoading }] = useMutation(CREATE_USER)

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

    logIn,
    signUp,
    logOut,

    userLoading,
    loginLoading,
    createLoading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
