import { createContext, useContext, useState } from "react"

interface ComboboxContextData {
  role: string
  setComboboxValue: React.Dispatch<React.SetStateAction<string>>
}

interface ComboboxProviderProps {
  children: React.ReactNode
}

const ComboboxContext = createContext({} as ComboboxContextData)

export function useCustomCombobox() {
  return useContext(ComboboxContext)
}

export function ComboboxProvider({ children }: ComboboxProviderProps) {
  const [comboboxValue, setComboboxValue] = useState("")

  const roles = {
    Administrador: "ADMIN",
    Membro: "MEMBER"
  }

  const value: ComboboxContextData = {
    setComboboxValue,
    role: roles[comboboxValue]
  }

  return (
    <ComboboxContext.Provider value={value}>
      {children}
    </ComboboxContext.Provider>
  )
}
