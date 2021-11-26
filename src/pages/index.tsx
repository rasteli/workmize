import Head from "next/head"

import { Input } from "../components/Input"
import { Modal } from "../components/Modal"
import { Combobox } from "../components/Combobox"
import { CreateUserForm } from "../components/CreateUserForm"

import User from "../assets/user.svg"

export default function Home() {
  const items = ["Administrador", "Membro"]

  return (
    <div>
      <Head>
        <title>Next app</title>
        <meta charSet="utf-8" />
      </Head>

      <main>
        <Input placeholder="Default Input" />
        <Combobox items={items} />
        <Modal
          header={
            <>
              <User />
              <h1 style={{ marginLeft: 10 }}>Criar usuário</h1>
            </>
          }
        >
          <CreateUserForm />
        </Modal>
      </main>
    </div>
  )
}
