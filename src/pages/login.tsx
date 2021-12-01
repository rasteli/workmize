import Head from "next/head"
import { useState } from "react"

import { styles } from "../styles/pages/login"

import { Alert } from "../components/Alert"
import { UserForm } from "../components/UserForm"
import { useAuth } from "../contexts/AuthContext"
import { useViewport } from "../hooks/useViewport"
import { CreateUserModal } from "../components/CreateUserModal"
import { ToggleColorMode } from "../components/ToggleColorMode"
import { useWorkmizeColorMode } from "../hooks/useWorkmizeColorMode"

import Worktime from "../assets/worktime.svg"

export default function Login() {
  const [open, setOpen] = useState(false)
  const { aboveThreshold } = useViewport(1230)
  const { logIn, loginLoading, message } = useAuth()
  const { dra_containerBg, loginAsideBg, Workmize } = useWorkmizeColorMode()

  return (
    <>
      <Head>
        <title>Workmize - acessar a sua conta</title>
        <meta charSet="utf-8" />
      </Head>

      <div style={styles.container}>
        <main style={styles.main(dra_containerBg, aboveThreshold)}>
          <Workmize style={styles.logo} />
          <ToggleColorMode style={styles.toggleColorMode} />

          <div style={styles.form(aboveThreshold)}>
            <h1 style={styles.h1}>Acesse a Workmize</h1>
            <h3 style={styles.h3}>
              Por favor, insira seus dados para prosseguir.
            </h3>

            {message && <Alert label={message.text} variant={message.type} />}

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
          <aside style={styles.aside(loginAsideBg)}>
            <Worktime style={styles.worktime} />
            <h1 style={styles.h1}>Gerencie as suas tarefas</h1>
          </aside>
        )}
      </div>

      <CreateUserModal open={open} setOpen={setOpen} />
    </>
  )
}
