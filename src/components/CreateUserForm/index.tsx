import Image from "next/image"
import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { InputGroup, InputRightElement } from "@chakra-ui/input"

import { Input } from "../Input"
import { Label } from "../Label"
import { Button } from "../Button"
import { Combobox } from "../Combobox"

import { styles } from "./styles"

import EyeDark from "../../assets/eye_dark.svg"
import EyeLight from "../../assets/eye_light.svg"

export function CreateUserForm() {
  const items = ["Administrador", "Membro"]
  const [showPwd, setShowPwd] = useState(false)

  const Eye = useColorModeValue(EyeLight, EyeDark)
  const containerBg = useColorModeValue("#F7FAFC", "#171923")

  return (
    <div style={styles.container(containerBg)}>
      <h1>Dados do seu usuário</h1>
      <div style={styles.imageWrapper}>
        <Image
          src="https://avatars.githubusercontent.com/u/59903124?v=4"
          alt=""
          width={110}
          height={110}
        />
      </div>

      <form style={styles.form}>
        <div style={{ marginBottom: 15 }}>
          <Label value="Nome" required />
          <Input placeholder="Digite o seu nome..." required />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Label value="E-mail" required />
          <Input placeholder="Digite o seu e-mail..." required />
        </div>
        <div style={{ marginBottom: 15 }}>
          <Label value="Senha" required />

          <InputGroup>
            <Input
              placeholder="******"
              required
              type={showPwd ? "text" : "password"}
            />
            <InputRightElement
              style={{ cursor: "pointer" }}
              onClick={() => setShowPwd(!showPwd)}
            >
              <Eye />
            </InputRightElement>
          </InputGroup>
        </div>

        <Combobox items={items} />
        <Button type="submit" label="Criar usuário" marginTop={20} />
      </form>
    </div>
  )
}
