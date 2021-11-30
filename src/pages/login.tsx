import Head from "next/head"
import { useState } from "react"
import { useColorModeValue } from "@chakra-ui/color-mode"

import { styles } from "../styles/pages/login"

import { UserForm } from "../components/UserForm"
import { useAuth } from "../contexts/AuthContext"
import { useViewport } from "../hooks/useViewport"
import { CreateUserModal } from "../components/CreateUserModal"
import { ToggleColorMode } from "../components/ToggleColorMode"

import Worktime from "../assets/worktime.svg"
import WorkmizeDark from "../assets/workmize_dark.svg"
import WorkmizeLight from "../assets/workmize_light.svg"

export default function Login() {
  const asideBackground = {
    light:
      "transparent linear-gradient(138deg, #B794F4 0%, #805AD5 100%, #312950 100%, #322659 100%) 0% 0% no-repeat padding-box",
    dark:
      "transparent linear-gradient(138deg, #805AD5 0%, #312950 100%, #322659 100%) 0% 0% no-repeat padding-box"
  }

  const { aboveThreshold } = useViewport(1230)
  const { logIn, loginLoading } = useAuth()

  const [open, setOpen] = useState(false)
  const mainBg = useColorModeValue("#FFFFFF", "#171923")
  const Workmize = useColorModeValue(WorkmizeLight, WorkmizeDark)
  const asideBg = useColorModeValue(asideBackground.light, asideBackground.dark)

  return (
    <>
      <Head>
        <title>Workmize - acessar a sua conta</title>
        <meta charSet="utf-8" />
      </Head>

      <div style={styles.container}>
        <main style={styles.main(mainBg, aboveThreshold)}>
          <Workmize style={styles.logo} />
          <ToggleColorMode style={styles.toggleColorMode} />

          <div style={styles.form(aboveThreshold)}>
            <h1 style={styles.h1}>Acesse a Workmize</h1>
            <h3 style={styles.h3}>
              Por favor, insira seus dados para prosseguir.
            </h3>

            <UserForm
              gap={25}
              type="login"
              inputSize="lg"
              buttonHeight="60px"
              buttonColor="#48BB78"
              buttonLabel="Fazer Login"
              buttonIsLoading={loginLoading}
              onSubmit={logIn}
            />
          </div>

          <footer style={styles.footer}>
            Ainda não é usuário?
            <button style={styles.createUser} onClick={() => setOpen(true)}>
              Crie seu usuário!
            </button>
          </footer>
        </main>

        {aboveThreshold && (
          <aside style={styles.aside(asideBg)}>
            <Worktime style={styles.worktime} />
            <h1 style={styles.h1}>Gerencie as suas tarefas</h1>
          </aside>
        )}
      </div>

      <CreateUserModal open={open} setOpen={setOpen} />
    </>
  )
}
