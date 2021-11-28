import Head from "next/head"

import { Table } from "../components/Table"
import { Modal } from "../components/Modal"
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
        <Table />

        {/* <Modal
          header={
            <>
              <User />
              <h1 style={{ marginLeft: 10 }}>Criar usuário</h1>
            </>
          }
        >
          <CreateUserForm />
        </Modal> */}
      </main>
    </div>
  )
}
