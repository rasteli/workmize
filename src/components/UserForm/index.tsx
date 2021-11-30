import { useState } from "react"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { InputGroup, InputRightElement } from "@chakra-ui/input"

import { Input } from "../Input"
import { Label } from "../Label"
import { Button } from "../Button"
import { Combobox } from "../Combobox"

import { GET_COMPANY_ID } from "../../GraphQL/queries"
import { useCustomCombobox } from "../../contexts/ComboboxContext"
import { LogInFunction, SignUpFunction } from "../../contexts/AuthContext"

import { styles } from "./styles"

import EyeDark from "../../assets/eye_dark.svg"
import EyeLight from "../../assets/eye_light.svg"

interface UserFormProps {
  type: "signup" | "login"
  gap?: number
  buttonLabel?: string
  buttonColor?: string
  buttonHeight?: string
  buttonIsLoading?: boolean
  inputSize?: "xs" | "sm" | "md" | "lg"
  onSubmit: SignUpFunction & LogInFunction
}

export function UserForm({
  type,
  gap = 15,
  buttonHeight,
  buttonColor,
  onSubmit,
  inputSize = "md",
  buttonLabel = "Submit",
  buttonIsLoading = false
}: UserFormProps) {
  const roles = ["Administrador", "Membro"]

  const { data } = useQuery(GET_COMPANY_ID, {
    variables: {
      email: "gabrielrasteli3@gmail.com"
    }
  })

  const router = useRouter()
  const { role } = useCustomCombobox()
  const Eye = useColorModeValue(EyeLight, EyeDark)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [showPwd, setShowPwd] = useState(false)
  const [invalidField, setInvalidField] = useState(false)

  const InvalidLabel = () => (
    <Label value="Este campo não pode estar vazio." invalid />
  )

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if ((type === "signup" && !name) || !email || !password) {
      return setInvalidField(true)
    }

    setInvalidField(false)

    const options = {
      email,
      password,
      role
    }

    const operations = {
      signup: async () =>
        await onSubmit({
          name,
          companyId: data.getMyCompany.id,
          ...options
        }),

      login: async () =>
        await onSubmit({
          ...options
        })
    }

    try {
      const operation = operations[type]

      await operation()
      router.push("/")
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      {type === "signup" && (
        <div style={styles.inputBlock(gap)}>
          <Label value="Nome" required />
          <Input
            placeholder="Digite o seu nome..."
            size={inputSize}
            onChange={e => setName(e.target.value)}
          />
          {invalidField && <InvalidLabel />}
        </div>
      )}

      <div style={styles.inputBlock(gap)}>
        <Label value="E-mail" required />
        <Input
          placeholder="Digite o seu e-mail..."
          type="email"
          size={inputSize}
          onChange={e => setEmail(e.target.value)}
        />
        {invalidField && <InvalidLabel />}
      </div>

      <div style={styles.inputBlock(gap)}>
        <Label value="Senha" required />

        <InputGroup>
          <Input
            placeholder="******"
            type={showPwd ? "text" : "password"}
            size={inputSize}
            onChange={e => setPassword(e.target.value)}
          />
          <InputRightElement
            style={{ cursor: "pointer" }}
            onClick={() => setShowPwd(!showPwd)}
          >
            <Eye style={{ marginTop: "10%", marginRight: 5 }} />
          </InputRightElement>
        </InputGroup>

        {invalidField && <InvalidLabel />}
      </div>

      <Combobox items={roles} inputSize={inputSize} gap={gap} />
      <Button
        type="submit"
        marginTop={20}
        label={buttonLabel}
        height={buttonHeight}
        loading={buttonIsLoading}
        backgroundColor={buttonColor}
      />
    </form>
  )
}
